import { mkdir, readFile, writeFile } from "fs/promises";
import { tmpdir } from "os";
import path from "path";

const waitlistDirectory = path.join(tmpdir(), "ganglia-waitlist");
const waitlistFile = path.join(waitlistDirectory, "waitlist-signups.csv");
const resendApiUrl = "https://api.resend.com/emails";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function ensureCsvFile() {
  await mkdir(waitlistDirectory, { recursive: true });

  try {
    await readFile(waitlistFile, "utf8");
  } catch {
    await writeFile(waitlistFile, "timestamp,email\n", "utf8");
  }
}

async function persistWaitlistSignup(email: string) {
  try {
    await ensureCsvFile();
    await writeFile(waitlistFile, `${new Date().toISOString()},${email}\n`, { flag: "a" });
  } catch (error) {
    console.error("Failed to persist waitlist signup locally", error);
  }
}

function getWaitlistEmailConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.WAITLIST_FROM_EMAIL,
    toEmail: process.env.WAITLIST_TO_EMAIL ?? "Kevin@mybasalganglia.com"
  };
}

async function sendWaitlistEmail(email: string) {
  const { apiKey, fromEmail, toEmail } = getWaitlistEmailConfig();

  if (!apiKey || !fromEmail || !toEmail) {
    return {
      attempted: false as const
    };
  }

  const response = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: "New Ganglia waitlist signup",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Ganglia waitlist signup</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        </div>
      `,
      text: `New Ganglia waitlist signup\n\nEmail: ${email}\nTime: ${new Date().toISOString()}`
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error: ${response.status} ${errorText}`);
  }

  return {
    attempted: true as const
  };
}

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string };
  const email = body.email?.trim().toLowerCase();

  if (!email || !isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  await persistWaitlistSignup(email);

  try {
    await sendWaitlistEmail(email);
  } catch (error) {
    console.error("Failed to send waitlist email", error);
  }

  return Response.json({
    message: "You are in. We will reach out when Ganglia is ready."
  });
}
