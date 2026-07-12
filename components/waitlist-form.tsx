"use client";

import { useState, useTransition } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function submitWaitlist(currentEmail: string) {
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: currentEmail })
      });

      const payload = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setError(payload.error ?? "Something went wrong. Please try again.");
        return;
      }

      setMessage(payload.message ?? "You are on the list.");
      setEmail("");
    } catch {
      setError("We could not submit your email right now. Please try again.");
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    setError(null);

    const currentEmail = email;

    startTransition(() => {
      void submitWaitlist(currentEmail);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="waitlist-email">
          Email address
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          className="h-12 w-full rounded-full border border-white/10 bg-white/5 px-5 text-base text-white placeholder:text-ganglia-slate outline-none transition focus:border-ganglia-teal focus:bg-white/8"
        />
        <button
          type="submit"
          disabled={isPending}
          className="h-12 shrink-0 rounded-full bg-ganglia-teal px-6 text-sm font-semibold text-[#06201C] transition hover:bg-ganglia-aqua disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "Joining..." : "Join the waitlist"}
        </button>
      </div>

      {message ? <p className="text-sm text-ganglia-mist">{message}</p> : null}
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
    </form>
  );
}
