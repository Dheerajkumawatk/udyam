import SellForm from "@/components/SellForm";

export default function SellPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
        For sellers &amp; founders
      </span>
      <h1 className="font-display text-4xl text-ink mt-2 mb-3">
        List your business today
      </h1>
      <p className="text-ink-soft leading-relaxed mb-10 max-w-xl">
        Free basic listing, no upfront broker fees. We verify basic KYC
        before your listing goes live, and your identity stays confidential
        until you choose to connect with a buyer.
      </p>
      <SellForm />
    </div>
  );
}
