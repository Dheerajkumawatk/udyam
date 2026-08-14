import { PricingTier } from "@/lib/types";

export default function PricingTable({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {tiers.map((t) => (
        <div
          key={t.id}
          className={`flex flex-col rounded-sm border p-6 ${
            t.highlighted
              ? "border-gold bg-paper-raised shadow-[0_2px_0_0_var(--gold)]"
              : "hairline bg-paper-raised"
          }`}
        >
          <div className="text-[11px] font-mono uppercase tracking-widest text-teal mb-2">
            {t.audience}
          </div>
          <h3 className="font-display text-xl text-ink mb-4">{t.name}</h3>
          <div className="mb-6">
            <span className="font-mono text-2xl text-ink">{t.priceLabel}</span>
            <span className="text-sm text-ink-soft ml-1">{t.cadence}</span>
          </div>
          <ul className="space-y-2.5 mb-8 flex-1">
            {t.features.map((f) => (
              <li key={f} className="text-sm text-ink-soft flex gap-2">
                <span className="text-gold mt-0.5">—</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <button
            className={`w-full py-2.5 rounded-sm text-sm font-medium transition-colors ${
              t.highlighted
                ? "bg-ink text-paper hover:bg-teal"
                : "border hairline text-ink hover:border-ink"
            }`}
          >
            {t.priceLabel === "Free" ? "Get started" : t.priceLabel === "Custom" ? "Talk to us" : "Choose plan"}
          </button>
        </div>
      ))}
    </div>
  );
}
