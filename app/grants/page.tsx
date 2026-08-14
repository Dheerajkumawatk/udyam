import GrantMatcher from "@/components/GrantMatcher";
import { grants } from "@/lib/data/grants";

export default function GrantsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
        For founders
      </span>
      <h1 className="font-display text-4xl text-ink mt-2 mb-3">
        Find the right grant or scheme for your startup
      </h1>
      <p className="text-ink-soft leading-relaxed mb-10 max-w-xl">
        Tell us your sector, stage and state. We&apos;ll match you against
        government schemes, state startup policies and private incubator
        grants tracked on the platform, with direct links to the official
        source.
      </p>
      <GrantMatcher grants={grants} />
    </div>
  );
}
