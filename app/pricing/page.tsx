import PricingTable from "@/components/PricingTable";
import { pricingTiers } from "@/lib/data/pricing";

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
        Pricing
      </span>
      <h1 className="font-display text-4xl text-ink mt-2 mb-3">
        Simple pricing for every side of the deal
      </h1>
      <p className="text-ink-soft leading-relaxed mb-10 max-w-xl">
        Free to list. Buyers and investors pay a monthly subscription to
        unlock contact details and advanced filters. Sellers can boost
        visibility with a featured listing.
      </p>
      <PricingTable tiers={pricingTiers} />

      <div className="mt-16 border-t hairline pt-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg text-ink mb-2">
            How payments work
          </h3>
          <p className="text-sm text-ink-soft leading-relaxed">
            This demo ships without a live payment integration. Wire the
            &quot;Choose plan&quot; buttons to Razorpay Subscriptions (the
            standard choice for INR billing) to charge featured-listing fees
            and Buyer Pro subscriptions.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg text-ink mb-2">Refunds</h3>
          <p className="text-sm text-ink-soft leading-relaxed">
            Define a clear refund policy before launch — most Indian
            marketplaces offer no refund on featured-listing fees but a
            pro-rated refund on unused subscription months.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg text-ink mb-2">
            Advisor accounts
          </h3>
          <p className="text-sm text-ink-soft leading-relaxed">
            Consultants and M&amp;A advisors listing on behalf of clients get
            a custom plan — reach out once you have your first few advisor
            sign-ups to negotiate pricing.
          </p>
        </div>
      </div>
    </div>
  );
}
