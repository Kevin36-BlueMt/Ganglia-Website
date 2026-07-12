import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-hero-radial px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/8 bg-white/5 p-6 sm:p-8">
        <Link href="/" className="text-sm text-ganglia-aqua transition hover:text-white">
          Back to Ganglia
        </Link>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em]">Support</h1>
        <p className="mt-3 text-base leading-8 text-ganglia-slate">
          If you need help using Ganglia, have trouble with reminders, or want to report a bug, email
          {" "}
          <a href="mailto:support@mybasalganglia.com" className="text-ganglia-aqua transition hover:text-white">
            support@mybasalganglia.com
          </a>
          .
        </p>
        <div className="mt-8 grid gap-4">
          <div className="rounded-[1.5rem] border border-white/8 bg-[#0B1514] p-5">
            <h2 className="text-lg font-semibold text-white">What to include</h2>
            <p className="mt-2 text-base leading-7 text-ganglia-slate">
              Include your device model, iOS version, Ganglia version, a short description of what happened, and
              screenshots if relevant.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/8 bg-[#0B1514] p-5">
            <h2 className="text-lg font-semibold text-white">Common topics</h2>
            <p className="mt-2 text-base leading-7 text-ganglia-slate">
              Notifications not showing, progress looking wrong, or sharing not working are the main launch-era
              issues the support page is prepared to handle.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
