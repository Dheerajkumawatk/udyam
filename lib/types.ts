export type ListingType = "full-sale" | "raise-equity" | "raise-debt" | "franchise";

export type Listing = {
  id: string;
  slug: string;
  title: string;
  sector: string;
  location: string;
  state: string;
  type: ListingType[];
  askRangeLabel: string; // e.g. "INR 50 Lakh - 1 Cr"
  annualRevenueLabel: string;
  established: number;
  teamSize: number;
  summary: string;
  details: string;
  featured: boolean;
  verified: boolean;
};

export type ClosedDeal = {
  id: string;
  headline: string;
  sizeLabel: string;
};

export type GrantStage =
  | "idea"
  | "early-revenue"
  | "growth"
  | "established-sme";

export type Grant = {
  id: string;
  name: string;
  provider: string;
  type: "government" | "state" | "private" | "incubator";
  sectors: string[]; // ["any"] for sector-agnostic
  stages: GrantStage[];
  states: string[]; // ["any"] for pan-India
  amountLabel: string;
  instrument: "grant" | "equity" | "debt" | "mixed";
  description: string;
  officialUrl: string;
};

export type PricingTier = {
  id: string;
  audience: "seller" | "buyer" | "advisor";
  name: string;
  priceLabel: string;
  cadence: string;
  features: string[];
  highlighted?: boolean;
};
