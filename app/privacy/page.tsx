import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-hero-radial px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/8 bg-white/5 p-6 sm:p-8">
        <Link href="/" className="text-sm text-ganglia-aqua transition hover:text-white">
          Back to Ganglia
        </Link>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em]">Privacy Policy</h1>
        <p className="mt-3 text-sm text-ganglia-slate">Last updated: July 8, 2026</p>
        <div className="mt-8 space-y-6 text-base leading-8 text-ganglia-slate">
          <p>
            Ganglia is designed to help users manage daily commitments, track streaks, and view progress over time.
            We aim to keep the product simple and respectful of user privacy.
          </p>
          <p>
            Ganglia currently stores user-created commitments, completion logs, notes, and reminder preferences
            locally on the user&apos;s device. At this time, Ganglia does not collect personal data on a remote
            server, does not sell user data, and does not use third-party advertising SDKs.
          </p>
          <p>
            Ganglia can send optional local notifications for daily commitment reminders and milestone-related
            updates. If you join the waitlist, your email address is used only to contact you about Ganglia updates,
            launch access, and related product news. You can request deletion of your waitlist information at any
            time by emailing support@mybasalganglia.com.
          </p>
        </div>
      </div>
    </main>
  );
}
