import { listings } from "@/lib/data/listings";
import ListingsBrowser from "@/components/ListingsBrowser";

export default function ListingsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
        Marketplace
      </span>
      <h1 className="font-display text-4xl text-ink mt-2 mb-8">
        Businesses for sale &amp; raising funds
      </h1>
      <ListingsBrowser listings={listings} />
    </div>
  );
}
