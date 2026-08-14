import Link from "next/link";
import { Listing } from "@/lib/types";

const typeLabels: Record<string, string> = {
  "full-sale": "Full Sale",
  "raise-equity": "Raising Equity",
  "raise-debt": "Raising Debt",
  franchise: "Franchise",
};

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/listings/${listing.slug}`}
      className="group block border hairline bg-paper-raised hover:border-gold transition-colors rounded-sm"
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-teal">
            {listing.sector}
          </span>
          {listing.verified && (
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold border border-gold-soft px-2 py-0.5 rounded-full">
              Verified
            </span>
          )}
        </div>

        <h3 className="font-display text-xl leading-snug text-ink mb-1 group-hover:text-teal transition-colors">
          {listing.title}
        </h3>
        <p className="text-sm text-ink-soft mb-4">
          {listing.location}, {listing.state}
        </p>

        <p className="text-sm text-ink-soft leading-relaxed mb-5 line-clamp-2">
          {listing.summary}
        </p>

        <div className="flex items-end justify-between border-t hairline pt-3">
          <div>
            <div className="text-[11px] uppercase tracking-wide text-ink-soft/70">
              Ask
            </div>
            <div className="font-mono text-sm text-ink">
              {listing.askRangeLabel}
            </div>
          </div>
          <div className="flex gap-1.5 flex-wrap justify-end">
            {listing.type.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono uppercase tracking-wide bg-teal-soft text-teal px-2 py-1 rounded-sm"
              >
                {typeLabels[t]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
