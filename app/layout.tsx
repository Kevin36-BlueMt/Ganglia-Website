import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mybasalganglia.com"),
  title: "Ganglia | Daily discipline, not another to-do list",
  description:
    "Ganglia is a daily discipline app for people who want to show up consistently and become different over time.",
  openGraph: {
    title: "Ganglia",
    description:
      "Show up daily. Become different. A daily discipline app built for consistency, not task management.",
    url: "https://mybasalganglia.com",
    siteName: "Ganglia"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganglia",
    description:
      "A daily discipline app built to help you show up every day and change through repetition."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
