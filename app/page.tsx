import Link from "next/link";
import DealTicker from "@/components/DealTicker";
import ListingCard from "@/components/ListingCard";
import { listings, closedDeals } from "@/lib/data/listings";

export default function Home() {
  const featured = listings.filter((l) => l.featured);

  return (
    <div>
      {/* Hero */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-[1.3fr_1fr] gap-14 items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              India&apos;s SME &amp; Startup Marketplace
            </span>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-ink mt-4 mb-6">
              Buy a business.
              <br />
              Raise your next round.
              <br />
              <span className="text-teal">Find the grant that fits.</span>
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed max-w-xl mb-8">
              A single ledger of verified businesses for sale, founders
              raising capital, and the government &amp; private schemes that
              can fund them — built for the Indian market.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/listings"
                className="bg-ink text-paper px-6 py-3 rounded-sm text-sm font-medium hover:bg-teal transition-colors"
              >
                Browse Listings
              </Link>
              <Link
                href="/grants"
                className="border hairline px-6 py-3 rounded-sm text-sm font-medium text-ink hover:border-gold transition-colors"
              >
                Match My Startup to a Grant
              </Link>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t hairline pt-6 lg:border-t-0 lg:pt-0">
            {[
              ["150+", "Verified listings"],
              ["10", "Grant schemes tracked"],
              ["28", "States covered"],
              ["Zero", "Upfront broker fees"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="font-mono text-3xl text-ink">{n}</dt>
                <dd className="text-sm text-ink-soft mt-1">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <DealTicker deals={closedDeals} />

      {/* Featured listings */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Featured
            </span>
            <h2 className="font-display text-3xl text-ink mt-2">
              Investment opportunities
            </h2>
          </div>
          <Link
            href="/listings"
            className="text-sm font-medium text-ink underline decoration-gold decoration-2 underline-offset-4 hover:text-teal"
          >
            View all listings →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      </section>

      {/* Grant CTA band */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-soft">
              For founders
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 mb-4 max-w-xl">
              Don&apos;t know which grant your startup qualifies for?
            </h2>
            <p className="text-paper/70 max-w-xl leading-relaxed">
              Tell us your sector, stage and state — we match you against
              government schemes like SISFS, PMEGP and CGTMSE, plus state and
              private incubator grants, with direct links to apply.
            </p>
          </div>
          <Link
            href="/grants"
            className="bg-gold text-ink px-6 py-3 rounded-sm text-sm font-medium hover:bg-gold-soft transition-colors whitespace-nowrap"
          >
            Run the Grant Matcher
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-3xl text-ink mb-10">
          How Udyam Bazaar works
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            ["List or search", "Sellers list a business or fundraise; buyers and investors search by sector, location and ticket size."],
            ["Verify", "We check basic KYC and documentation before a listing gets the Verified badge."],
            ["Connect", "Subscribed buyers unlock contact details and message owners directly — no broker in the middle."],
            ["Fund the gap", "Founders run the grant matcher alongside fundraising to stack government support with investor capital."],
          ].map(([title, body], i) => (
            <div key={title} className="border-t-2 border-gold pt-4">
              <div className="font-mono text-xs text-ink-soft mb-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg text-ink mb-2">{title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
