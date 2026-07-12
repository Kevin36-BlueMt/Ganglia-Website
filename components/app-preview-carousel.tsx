"use client";

import Image from "next/image";
import { useRef } from "react";

const previewCards = [
  {
    title: "Today board",
    caption: "A focused commitments board with quick wins, bright feedback, and zero clutter.",
    kind: "image" as const,
    src: "/images/ganglia-app-example-1.png",
    alt: "Ganglia app commitments board screenshot"
  },
  {
    title: "Momentum view",
    caption: "Track streaks, weekly progress, and total reps in a screen that keeps you moving.",
    kind: "progress" as const
  },
  {
    title: "Milestone state",
    caption: "Celebrate visible progress with character evolution that rewards consistency.",
    kind: "milestone" as const
  }
];

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[19rem] rounded-[2.8rem] bg-[linear-gradient(160deg,rgba(255,121,176,0.92),rgba(255,78,141,0.72)_45%,rgba(56,18,43,0.88)_100%)] p-[1px] shadow-[0_30px_80px_rgba(255,78,141,0.28)]">
      <div className="rounded-[2.75rem] border border-white/10 bg-[#130f1b] p-3">
        <div className="relative overflow-hidden rounded-[2.3rem] border border-white/8 bg-[linear-gradient(180deg,#1b1328_0%,#120d1d_100%)] p-4">
          <div className="absolute left-1/2 top-2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-white/10" />
          {children}
        </div>
      </div>
    </div>
  );
}

function ProgressScreen() {
  return (
    <PhoneShell>
      <div className="pt-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Your Progress</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#ff9cc5]">Week 6</div>
          </div>
          <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-[#ffd4e4]">Locked in</div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-semibold text-[#ff7dae]">85%</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#c7b9d7]">weekly progress</div>
            </div>
            <Image
              src="/images/brain-day14.png"
              alt="Ganglia progress character"
              width={120}
              height={120}
              className="h-20 w-20 object-contain"
            />
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/6">
            <div className="h-full w-[85%] rounded-full bg-[linear-gradient(90deg,#FF5B97_0%,#FF7BAF_55%,#7FF6E3_100%)]" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-white/5 p-3">
              <div className="text-xl font-semibold text-[#ffd36f]">12</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#c7b9d7]">best streak</div>
            </div>
            <div className="rounded-2xl bg-white/5 p-3">
              <div className="text-xl font-semibold text-ganglia-aqua">156</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#c7b9d7]">total reps</div>
            </div>
            <div className="rounded-2xl bg-white/5 p-3">
              <div className="text-xl font-semibold text-white">5/5</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#c7b9d7]">today done</div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-full bg-[linear-gradient(90deg,#FF4E8D_0%,#FF6DA4_100%)] px-5 py-3 text-center text-sm font-semibold text-white">
          Keep the streak alive
        </div>
      </div>
    </PhoneShell>
  );
}

function MilestoneScreen() {
  return (
    <PhoneShell>
      <div className="pt-3">
        <div className="text-center">
          <div className="text-sm font-semibold text-white">Milestone Unlocked</div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#ff9cc5]">14 days straight</div>
        </div>

        <div className="mt-4 rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,91,151,0.12),rgba(255,255,255,0.03))] p-4 text-center">
          <Image
            src="/images/brain-celebrate.png"
            alt="Ganglia celebration character"
            width={180}
            height={180}
            className="mx-auto h-36 w-36 object-contain"
          />
          <div className="mt-2 text-2xl font-semibold text-white">Character upgraded</div>
          <p className="mt-2 text-sm leading-6 text-[#d3c5de]">
            Your brain gets stronger as the reps stack up. Discipline should feel visible.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
            <div className="text-lg font-semibold text-[#ffd36f]">+1 phase</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#c7b9d7]">growth unlocked</div>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
            <div className="text-lg font-semibold text-ganglia-aqua">14 reps</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#c7b9d7]">momentum built</div>
          </div>
        </div>

        <div className="mt-4 rounded-full bg-[linear-gradient(90deg,#FF4E8D_0%,#FF6DA4_100%)] px-5 py-3 text-center text-sm font-semibold text-white">
          Celebrate, then keep going
        </div>
      </div>
    </PhoneShell>
  );
}

export function AppPreviewCarousel() {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollRail(direction: "left" | "right") {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const amount = Math.round(rail.clientWidth * 0.82);
    rail.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth"
    });
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
      <div className="rounded-[2.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="section-label">Inside The App</div>
            <h2 className="section-title mt-3 max-w-3xl">
              Swipe through a few real-feeling Ganglia screens on a phone, not just a logo and promise.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ganglia-slate">
              On mobile, you can drag these left and right. On desktop, use the arrows. The first slide uses your
              attached app screenshot, and the others extend that same product direction.
            </p>
          </div>

          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollRail("left")}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:bg-white/10"
              aria-label="Scroll app previews left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollRail("right")}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition hover:bg-white/10"
              aria-label="Scroll app previews right"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {previewCards.map((card) => (
            <article key={card.title} className="min-w-[86%] snap-center sm:min-w-[24rem] lg:min-w-[26rem]">
              <div className="rounded-[2rem] border border-white/8 bg-[#0c0d14]/80 p-4 sm:p-5">
                {card.kind === "image" ? (
                  <PhoneShell>
                    <div className="pt-3">
                      <Image
                        src={card.src}
                        alt={card.alt}
                        width={500}
                        height={1020}
                        className="h-auto w-full rounded-[1.6rem] object-cover"
                      />
                    </div>
                  </PhoneShell>
                ) : null}

                {card.kind === "progress" ? <ProgressScreen /> : null}
                {card.kind === "milestone" ? <MilestoneScreen /> : null}

                <div className="mt-5 px-1">
                  <div className="text-lg font-semibold text-white">{card.title}</div>
                  <p className="mt-2 text-base leading-7 text-ganglia-slate">{card.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
