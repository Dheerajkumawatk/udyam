import { ClosedDeal } from "@/lib/types";

export default function DealTicker({ deals }: { deals: ClosedDeal[] }) {
  const track = [...deals, ...deals]; // duplicate for seamless loop

  return (
    <div className="border-y hairline bg-ink text-paper overflow-hidden">
      <div className="flex items-stretch">
        <div className="shrink-0 bg-gold text-ink font-mono text-xs uppercase tracking-widest px-4 flex items-center">
          Deal Ledger
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="ticker-track flex w-max">
            {track.map((d, i) => (
              <div
                key={`${d.id}-${i}`}
                className="flex items-center gap-3 px-6 py-2.5 whitespace-nowrap text-sm border-r border-paper/10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-soft" />
                <span className="text-paper/85">{d.headline}</span>
                <span className="font-mono text-xs text-gold-soft">
                  {d.sizeLabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
