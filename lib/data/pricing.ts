import { PricingTier } from "@/lib/types";

export const pricingTiers: PricingTier[] = [
  {
    id: "seller-free",
    audience: "seller",
    name: "Basic Listing",
    priceLabel: "Free",
    cadence: "",
    features: [
      "1 active listing",
      "Listed in search & category pages",
      "Receive buyer interest via masked inbox",
      "No contact details shown until you accept",
    ],
  },
  {
    id: "seller-featured",
    audience: "seller",
    name: "Featured Listing",
    priceLabel: "INR 4,999",
    cadence: "/ listing / 90 days",
    features: [
      "Everything in Basic",
      "\"Verified\" badge after document check",
      "Placement on homepage & category top",
      "Included in the weekly investor digest email",
      "Listing performance analytics",
    ],
    highlighted: true,
  },
  {
    id: "buyer-pro",
    audience: "buyer",
    name: "Buyer / Investor Pro",
    priceLabel: "INR 2,499",
    cadence: "/ month",
    features: [
      "Unlimited contact unlocks",
      "Advanced filters (revenue, ticket size, instrument)",
      "Early access to new listings (24h before public)",
      "Save searches & get alerts",
    ],
    highlighted: true,
  },
  {
    id: "advisor",
    audience: "advisor",
    name: "Advisor / Consultant",
    priceLabel: "Custom",
    cadence: "",
    features: [
      "List client mandates on their behalf",
      "Branded advisor profile page",
      "Deal-room document sharing",
      "Referral tracking for closed transactions",
    ],
  },
];
