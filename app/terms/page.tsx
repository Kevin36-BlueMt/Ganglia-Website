import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-hero-radial px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/8 bg-white/5 p-6 sm:p-8">
        <Link href="/" className="text-sm text-ganglia-aqua transition hover:text-white">
          Back to Ganglia
        </Link>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em]">Terms of Service</h1>
        <p className="mt-3 text-sm text-ganglia-slate">Last updated: July 8, 2026</p>
        <div className="mt-8 space-y-6 text-base leading-8 text-ganglia-slate">
          <p>
            By using Ganglia, you agree to use the service lawfully and responsibly. Ganglia is provided on an
            as-available basis, and features may evolve over time as the product grows.
          </p>
          <p>
            Paid subscriptions begin after a 7-day free trial and then renew at $1.99 per month unless canceled
            through the platform where you purchased the subscription.
          </p>
          <p>
            You are responsible for maintaining the security of your account information and for the content you
            choose to record inside the product. Questions about these terms can be sent to
            {" "}
            hello@mybasalganglia.com.
          </p>
        </div>
      </div>
    </main>
  );
}
