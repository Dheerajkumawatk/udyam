import { notFound } from "next/navigation";
import { listings } from "@/lib/data/listings";
import ContactUnlock from "@/components/ContactUnlock";

const typeLabels: Record<string, string> = {
  "full-sale": "Full Sale",
  "raise-equity": "Raising Equity",
  "raise-debt": "Raising Debt",
  franchise: "Franchise",
};

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export default async function ListingDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = listings.find((l) => l.slug === slug);
  if (!listing) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-center gap-2 mb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-teal">
          {listing.sector}
        </span>
        <span className="text-ink-soft/40">·</span>
        <span className="text-sm text-ink-soft">
          {listing.location}, {listing.state}
        </span>
        {listing.verified && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold border border-gold-soft px-2 py-0.5 rounded-full ml-2">
            Verified
          </span>
        )}
      </div>

      <h1 className="font-display text-4xl text-ink mb-6 max-w-3xl">
        {listing.title}
      </h1>

      <div className="grid lg:grid-cols-[1fr_320px] gap-10">
        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            {listing.type.map((t) => (
              <span
                key={t}
                className="text-xs font-mono uppercase tracking-wide bg-teal-soft text-teal px-3 py-1.5 rounded-sm"
              >
                {typeLabels[t]}
              </span>
            ))}
          </div>

          <h2 className="font-display text-xl text-ink mb-3">Overview</h2>
          <p className="text-ink-soft leading-relaxed mb-8">
            {listing.details}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 border-t hairline pt-6">
            {[
              ["Asking price", listing.askRangeLabel],
              ["Annual revenue", listing.annualRevenueLabel],
              ["Established", String(listing.established)],
              ["Team size", `${listing.teamSize} people`],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="text-xs uppercase tracking-wide text-ink-soft/70 mb-1">
                  {label}
                </div>
                <div className="font-mono text-ink">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <ContactUnlock listingTitle={listing.title} />
          <div className="border hairline bg-paper-raised rounded-sm p-5">
            <div className="font-mono text-[11px] uppercase tracking-widest text-teal mb-3">
              Confidentiality
            </div>
            <p className="text-sm text-ink-soft leading-relaxed">
              This business is listed on a no-name basis until you unlock
              contact details. Owner identity is protected until you connect.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
