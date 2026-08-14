import Link from "next/link";

const links = [
  { href: "/listings", label: "Browse Listings" },
  { href: "/grants", label: "Grant Matching" },
  { href: "/sell", label: "List Your Business" },
  { href: "/pricing", label: "Pricing" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b hairline">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            Udyam
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            Bazaar
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline text-sm text-ink-soft hover:text-ink transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/sell"
            className="text-sm font-medium bg-ink text-paper px-4 py-2 rounded-sm hover:bg-teal transition-colors"
          >
            List Your Business
          </Link>
        </div>
      </div>
    </header>
  );
}
