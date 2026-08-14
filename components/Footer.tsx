import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t hairline mt-24 bg-ink text-paper/80">
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-xl text-paper mb-3">Udyam Bazaar</div>
          <p className="text-sm leading-relaxed text-paper/60">
            India&apos;s marketplace to buy, sell, fund and grow businesses —
            with grant matching built in for founders.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.15em] text-gold-soft mb-3">
            Marketplace
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/listings" className="hover:text-paper">Browse listings</Link></li>
            <li><Link href="/sell" className="hover:text-paper">Sell your business</Link></li>
            <li><Link href="/pricing" className="hover:text-paper">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.15em] text-gold-soft mb-3">
            Founders
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/grants" className="hover:text-paper">Grant matching</Link></li>
            <li><Link href="/listings?type=raise-equity" className="hover:text-paper">Raise funds</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.15em] text-gold-soft mb-3">
            Company
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-paper">About</Link></li>
            <li><Link href="/contact" className="hover:text-paper">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-5 text-center text-xs text-paper/40">
        © {new Date().getFullYear()} Udyam Bazaar. All rights reserved.
      </div>
    </footer>
  );
}
