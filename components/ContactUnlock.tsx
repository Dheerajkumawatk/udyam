"use client";

import { useState } from "react";
import Link from "next/link";

// DEMO ONLY: in production this component should check the logged-in
// user's real subscription status (server-side) rather than toggling
// client-side state. Wire this up to your auth/subscription check +
// Razorpay/Stripe before going live.
export default function ContactUnlock({ listingTitle }: { listingTitle: string }) {
  const [unlocked, setUnlocked] = useState(false);

  if (unlocked) {
    return (
      <div className="border hairline bg-paper-raised rounded-sm p-5">
        <div className="font-mono text-[11px] uppercase tracking-widest text-teal mb-3">
          Owner contact
        </div>
        <p className="text-sm text-ink mb-1">Contact person: Demo Owner</p>
        <p className="text-sm text-ink mb-1">Phone: +91 98XXX XXXXX</p>
        <p className="text-sm text-ink">Email: owner@example.com</p>
        <p className="text-xs text-ink-soft mt-3">
          Demo data — replace with the real seller record once auth &amp;
          subscriptions are wired up.
        </p>
      </div>
    );
  }

  return (
    <div className="border hairline bg-paper-raised rounded-sm p-5">
      <div className="font-mono text-[11px] uppercase tracking-widest text-teal mb-3">
        Owner contact
      </div>
      <p className="text-sm text-ink-soft mb-4">
        Contact details for &quot;{listingTitle}&quot; are visible to Buyer
        Pro subscribers.
      </p>
      <button
        onClick={() => setUnlocked(true)}
        className="w-full bg-ink text-paper py-2.5 rounded-sm text-sm font-medium hover:bg-teal transition-colors mb-2"
      >
        Unlock with Buyer Pro
      </button>
      <Link
        href="/pricing"
        className="block text-center text-xs text-ink-soft underline underline-offset-4 hover:text-ink"
      >
        See pricing
      </Link>
    </div>
  );
}
