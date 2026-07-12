import Image from "next/image";

type GangliaLogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function GangliaLogo({
  className = "",
  showWordmark = true
}: GangliaLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 animate-pulse-ring rounded-[1.6rem] bg-ganglia-teal/30 blur-md" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-[1.4rem] border border-white/10 bg-[#0C1D1B] shadow-glow">
          <Image src="/images/brain-day1.png" alt="Ganglia brain icon" width={40} height={40} className="h-10 w-10" />
        </div>
      </div>

      {showWordmark ? (
        <div>
          <div className="text-lg font-semibold tracking-[0.2em] text-white">GANGLIA</div>
          <div className="text-xs uppercase tracking-[0.28em] text-ganglia-slate">
            Daily discipline app
          </div>
        </div>
      ) : null}
    </div>
  );
}
