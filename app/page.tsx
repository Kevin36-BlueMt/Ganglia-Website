import Image from "next/image";
import Link from "next/link";
import { AppPreviewCarousel } from "@/components/app-preview-carousel";
import { GangliaLogo } from "@/components/ganglia-logo";
import { WaitlistForm } from "@/components/waitlist-form";

const commitments = [
  {
    area: "B",
    areaLabel: "Body",
    title: "Drink 2L of water",
    note: "Hydration ritual",
    tint: "from-pink-500 to-rose-400"
  },
  {
    area: "M",
    areaLabel: "Mind",
    title: "Read for 20 minutes",
    note: "Focused growth",
    tint: "from-violet-500 to-fuchsia-400"
  },
  {
    area: "D",
    areaLabel: "Discipline",
    title: "Exercise for 30 minutes",
    note: "Stay in motion",
    tint: "from-lime-400 to-emerald-400"
  },
  {
    area: "G",
    areaLabel: "Growth",
    title: "Meditate for 10 minutes",
    note: "Build calm",
    tint: "from-amber-400 to-orange-400"
  },
  {
    area: "S",
    areaLabel: "Social",
    title: "Journal your thoughts",
    note: "Reflect clearly",
    tint: "from-sky-400 to-cyan-300"
  }
];

const features = [
  {
    title: "A board you actually want to open",
    copy:
      "Your daily commitments feel tactile, bright, and finite. Ganglia gives you a focused board, not an endless backlog."
  },
  {
    title: "Progress you can feel",
    copy:
      "Streaks, milestone phases, and the evolving brain character make consistency visible so the reward loop stays alive."
  },
  {
    title: "Recovery without shame",
    copy:
      "Miss a day, reset honestly, and keep going. The product is built for real life, not perfection theater."
  }
];

const steps = [
  {
    title: "Choose your commitments",
    copy: "Build a short daily board across Body, Mind, Growth, Discipline, and Social."
  },
  {
    title: "Show up and log the rep",
    copy: "Check off what you did, add notes, and keep the ritual alive in under a minute."
  },
  {
    title: "Watch identity compound",
    copy: "Track streaks, phases, and character growth until consistency starts to feel like who you are."
  }
];

const appSignals = [
  "Five life areas for balanced discipline",
  "One-minute daily check-ins",
  "Streak and milestone phase tracking",
  "Notes and optional action quantities",
  "Optional reminders that keep you honest",
  "Visual character progression tied to follow-through"
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-hero-radial text-white">
      <section className="relative">
        <div className="absolute inset-x-0 top-[-12rem] h-[34rem] bg-[radial-gradient(circle,_rgba(255,78,141,0.18),_transparent_56%)] blur-3xl" />
        <div className="absolute right-[-8rem] top-[8rem] h-[28rem] w-[28rem] rounded-full bg-[#ff4e8d]/20 blur-3xl" />
        <div className="absolute left-[-8rem] top-[18rem] h-[24rem] w-[24rem] rounded-full bg-ganglia-teal/12 blur-3xl" />

        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-14 pt-6 sm:px-8 lg:px-12">
          <header className="flex items-center justify-between py-4">
            <GangliaLogo />
            <div className="hidden items-center gap-4 md:flex">
              <nav className="flex items-center gap-6 text-sm text-ganglia-slate">
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
                <a href="#features" className="transition hover:text-white">
                  Features
                </a>
                <a href="#pricing" className="transition hover:text-white">
                  Pricing
                </a>
              </nav>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Join waitlist
              </a>
            </div>
          </header>

          <div className="grid flex-1 items-center gap-16 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-14">
            <div className="max-w-2xl animate-reveal">
              <div className="mb-5 inline-flex items-center rounded-full border border-[#ff4e8d]/25 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#ffd3e4]">
                Daily discipline for iPhone
              </div>
              <h1 className="max-w-xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Show up daily.
                <span className="mt-2 block bg-[linear-gradient(90deg,#7FF6E3_0%,#FF79B0_58%,#FFD36F_100%)] bg-clip-text text-transparent">
                  Become different.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ganglia-slate sm:text-xl">
                Ganglia turns personal growth into a daily system you can actually follow. It is not a checklist or
                to-do list. It is a discipline app built to make consistency visible through reps, streaks, and a
                character system that reflects how you are showing up.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#FF4E8D_0%,#FF6B9F_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(255,78,141,0.28)] transition hover:brightness-110"
                >
                  Join the waitlist
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  See how it works
                </a>
              </div>

              <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
                <div className="rounded-[1.6rem] border border-white/8 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-semibold text-[#ff85b7]">1 min</div>
                  <div className="mt-1 text-sm leading-6 text-ganglia-slate">
                    The time it takes to make a promise to yourself.
                  </div>
                </div>
                <div className="rounded-[1.6rem] border border-white/8 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-semibold text-ganglia-aqua">7 days</div>
                  <div className="mt-1 text-sm leading-6 text-ganglia-slate">
                    Only 7 days to unlock Phase 2, build momentum, and keep that promise.
                  </div>
                </div>
                <div className="rounded-[1.6rem] border border-white/8 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-semibold text-[#ffd36f]">$1.99</div>
                  <div className="mt-1 text-sm text-ganglia-slate">per month after</div>
                </div>
              </div>

              <div className="mt-8 rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5">
                <div className="text-xs uppercase tracking-[0.24em] text-ganglia-mist">What makes it different</div>
                <p className="mt-3 max-w-2xl text-base leading-7 text-ganglia-mist">
                  Less planning. Less guilt. Less clutter. More ritual, momentum, and identity change through daily
                  reps that are clear enough to keep doing.
                </p>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[28rem] justify-center lg:justify-end">
              <div className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,78,141,0.28),_transparent_58%)] blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(127,246,227,0.18),_transparent_60%)] blur-3xl" />

              <div className="relative w-full rounded-[2.4rem] bg-[linear-gradient(160deg,rgba(255,121,176,0.92),rgba(255,78,141,0.72)_45%,rgba(56,18,43,0.88)_100%)] p-[1px] shadow-[0_40px_120px_rgba(255,78,141,0.34)]">
                <div className="rounded-[2.35rem] border border-white/10 bg-[#140f1f]/95 p-3">
                  <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,#1b1328_0%,#120d1d_100%)] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-white">Today&apos;s Commitments</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.22em] text-[#ff9cc5]">5 / 5 complete</div>
                      </div>
                      <div className="rounded-full border border-[#ff8aba]/20 bg-[linear-gradient(90deg,rgba(255,78,141,0.24),rgba(255,121,176,0.15))] px-3 py-1 text-xs font-medium text-[#ffd4e4]">
                        All done
                      </div>
                    </div>

                    <div className="space-y-2">
                      {commitments.map((item) => (
                        <div
                          key={item.title}
                          className="flex items-center gap-3 rounded-[1.2rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-3 py-3"
                        >
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.tint} text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,78,141,0.16)]`}
                          >
                            {item.area}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-medium text-white">{item.title}</div>
                            <div className="mt-0.5 text-xs text-[#c9bad8]">
                              {item.areaLabel} • {item.note}
                            </div>
                          </div>
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#ff5f99,#ff3b88)] text-sm font-bold text-white">
                            ✓
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-[1.4rem] border border-[#ff7baa]/15 bg-[linear-gradient(180deg,rgba(255,73,137,0.12),rgba(255,255,255,0.03))] p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="grid flex-1 grid-cols-3 gap-3">
                          <div>
                            <div className="text-2xl font-semibold text-[#ff7dae]">85%</div>
                            <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#c7b9d7]">
                              weekly progress
                            </div>
                          </div>
                          <div>
                            <div className="text-2xl font-semibold text-[#ffd36f]">12</div>
                            <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#c7b9d7]">
                              best streak
                            </div>
                          </div>
                          <div>
                            <div className="text-2xl font-semibold text-ganglia-aqua">156</div>
                            <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#c7b9d7]">
                              total reps
                            </div>
                          </div>
                        </div>
                        <div className="rounded-[1.2rem] border border-white/8 bg-black/10 p-2">
                          <Image
                            src="/images/brain-celebrate.png"
                            alt="Ganglia celebration character"
                            width={140}
                            height={140}
                            className="h-20 w-20 object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-full bg-[linear-gradient(90deg,#FF4E8D_0%,#FF6DA4_100%)] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(255,78,141,0.25)]">
                      Keep going, champ. Build a better you.
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-0 right-0 mx-auto grid max-w-sm grid-cols-3 gap-2 px-2 text-center">
                <div className="rounded-2xl border border-white/10 bg-[#120f1b]/80 px-3 py-2 text-xs uppercase tracking-[0.2em] text-[#ffbad3] backdrop-blur">
                  No clutter
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#120f1b]/80 px-3 py-2 text-xs uppercase tracking-[0.2em] text-ganglia-aqua backdrop-blur">
                  Real streaks
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#120f1b]/80 px-3 py-2 text-xs uppercase tracking-[0.2em] text-[#ffd36f] backdrop-blur">
                  6c a day
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppPreviewCarousel />

      <section id="about" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div className="section-label">What Ganglia is</div>
            <h2 className="section-title">A discipline app with the energy of a product you want to come back to.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 backdrop-blur-sm"
              >
                <div className="h-1.5 w-14 rounded-full bg-[linear-gradient(90deg,#FF5F99_0%,#7FF6E3_100%)]" />
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-ganglia-slate">{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-8 lg:px-12 lg:py-10">
        <div className="rounded-[2.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-8 lg:p-10">
          <div className="section-label">How it works</div>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <h2 className="section-title">Simple enough to keep doing. Serious enough to change you.</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-ganglia-slate">
                Ganglia removes the planning clutter so you can focus on the signal that matters: whether you followed
                through today. The flow is short, visual, and built to survive normal human inconsistency.
              </p>
            </div>
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-[1.7rem] border border-white/8 bg-[#0f1019]/80 p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#FF5B97_0%,#FF7BAF_100%)] text-sm font-semibold text-white shadow-[0_16px_30px_rgba(255,78,141,0.2)]">
                    0{index + 1}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">{step.title}</div>
                    <p className="mt-2 text-base leading-7 text-ganglia-slate">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="section-label">Features</div>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2.3rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-8">
            <h2 className="section-title mt-0">Built to feel sharp, not heavy.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {appSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-ganglia-mist"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(180deg,#FF5B97_0%,#7FF6E3_100%)]" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.3rem] border border-[#ff7baa]/15 bg-[linear-gradient(180deg,rgba(255,91,151,0.14),rgba(255,255,255,0.03))] p-6 sm:p-8">
            <div className="text-sm uppercase tracking-[0.26em] text-[#ffd4e4]">Progress you can see</div>
            <p className="mt-4 text-2xl font-semibold leading-tight text-white">
              The brain character turns consistency into something emotionally legible.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-[1.5rem] border border-white/8 bg-black/10 p-3 text-center">
                <Image
                  src="/images/brain-day1.png"
                  alt="Ganglia brain on day one"
                  width={160}
                  height={160}
                  className="mx-auto h-24 w-24 object-contain"
                />
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-[#ffcadf]">Day 1</div>
              </div>
              <div className="rounded-[1.5rem] border border-white/8 bg-black/10 p-3 text-center">
                <Image
                  src="/images/brain-day14.png"
                  alt="Ganglia brain on day fourteen"
                  width={160}
                  height={160}
                  className="mx-auto h-24 w-24 object-contain"
                />
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-[#ffcadf]">Day 14</div>
              </div>
              <div className="rounded-[1.5rem] border border-white/8 bg-black/10 p-3 text-center">
                <Image
                  src="/images/brain-celebrate.png"
                  alt="Ganglia celebration brain"
                  width={160}
                  height={160}
                  className="mx-auto h-24 w-24 object-contain"
                />
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-[#ffcadf]">Milestone</div>
              </div>
            </div>
            <p className="mt-5 text-base leading-7 text-ganglia-slate">
              The character system comes straight from the app build: early momentum, stronger mid-streak energy, and
              celebration states that reward daily execution instead of burying you in charts.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-8 lg:px-12 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div className="section-label">Pricing</div>
            <h2 className="section-title">Low-friction pricing for a high-consistency habit.</h2>
          </div>
          <div className="rounded-[2.4rem] border border-[#ff7baa]/20 bg-[linear-gradient(135deg,rgba(26,17,32,0.92),rgba(255,91,151,0.14))] p-6 shadow-[0_24px_80px_rgba(255,78,141,0.12)] sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.26em] text-[#ffd4e4]">Try it first</div>
                <div className="mt-3 text-4xl font-semibold text-white">7-day free trial</div>
                <p className="mt-3 max-w-lg text-base leading-7 text-ganglia-slate">
                  Start the ritual, feel the loop, and decide after a week of real use.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-white/10 bg-white/5 px-5 py-4">
                <div className="text-sm uppercase tracking-[0.24em] text-ganglia-slate">Then</div>
                <div className="mt-1 text-3xl font-semibold text-[#ffd36f]">$1.99/month</div>
                <div className="mt-2 max-w-[15rem] text-sm leading-6 text-ganglia-slate">
                  No ads. No gimmicks. No in-app purchases. Just daily growth for 6 cents a day.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="rounded-[2.6rem] border border-white/8 bg-[linear-gradient(135deg,rgba(16,12,24,0.96),rgba(255,78,141,0.12),rgba(10,33,30,0.9))] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <div className="section-label">Waitlist</div>
              <h2 className="section-title">Get first access when Ganglia opens.</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-ganglia-slate">
                Join the list for launch updates, beta access, and early product news for the first iPhone release of
                Ganglia.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/8 bg-white/5 p-5 sm:p-6">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-10 text-sm text-ganglia-slate sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div>
          <div className="font-semibold uppercase tracking-[0.2em] text-ganglia-mist">Ganglia LLC</div>
          <div className="mt-2">Daily growth, made visible.</div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/privacy" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition hover:text-white">
            Terms of Service
          </Link>
          <Link href="/support" className="transition hover:text-white">
            Support
          </Link>
          <a href="mailto:Kevin@mybasalganglia.com" className="transition hover:text-white">
            Kevin@mybasalganglia.com
          </a>
        </div>
      </footer>
    </main>
  );
}
