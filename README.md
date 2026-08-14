# Udyam Bazaar — MVP

A working starting point for an Indian business-marketplace platform: buy/sell
listings, fundraising listings, a subscription paywall pattern, and a
grant-matching tool for startups. Built with Next.js 16 (App Router),
TypeScript and Tailwind CSS v4.

This is a **functional MVP with mock data**, not a production app — see
"What's real vs. mocked" below before you launch it.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

| Route | What it does |
|---|---|
| `/` | Homepage — hero, the "Deal Ledger" ticker, featured listings, how-it-works |
| `/listings` | Browse & filter all listings (search + sector filter, client-side) |
| `/listings/[slug]` | Listing detail with a paywalled contact-unlock component |
| `/sell` | Seller form — posts to `/api/leads`, persisted to a temp file (see note below) |
| `/grants` | Interactive grant-matching tool (sector + stage + state → matches) |
| `/pricing` | Subscription tiers for sellers, buyers/investors, and advisors |

## What's real vs. mocked

**Real and working:**
- All routing, filtering, and the grant-matching logic (`components/GrantMatcher.tsx`)
- The seller form actually submits and persists data (`app/api/leads/route.ts`)
- Grant seed data (`lib/data/grants.ts`) uses real, currently-active Indian
  schemes (SISFS, CGTMSE, PMEGP, Stand-Up India, Atal Innovation Mission,
  MUDRA, state startup policies, NIDHI-Prayas, SIDBI FFS) with links to their
  official pages. **Amounts and deadlines for government schemes change —
  re-verify these periodically and always show the official-source link**,
  which the UI already does.

**Mocked — replace before launch:**
- **Listings** (`lib/data/listings.ts`) are placeholder/fictional. Replace
  with a real database.
- **Lead storage** (`app/api/leads/route.ts`) writes to a JSON file in the
  OS temp directory (`os.tmpdir()`), so it works both locally and on
  serverless hosts like Vercel without crashing. It is **not durable** —
  Vercel wipes `/tmp` between deployments and cold starts, and it has no
  concurrency safety. Swap in Postgres before you rely on this for real
  submissions.
- **Contact unlock** (`components/ContactUnlock.tsx`) just flips client-side
  state. Replace with a real server-side check of the logged-in user's
  subscription status — never gate real contact data behind client-only
  logic.
- **Auth** (`/login`) is a placeholder page. No real login flow exists yet.
- **Payments** — the pricing page buttons don't charge anything yet.
- **Fonts** — this sandbox couldn't reach fonts.googleapis.com, so
  `app/layout.tsx` currently uses a system-font fallback stack. There's a
  comment block in that file with the exact `next/font/google` code to
  restore the intended Fraunces/Inter/IBM Plex Mono pairing once you're
  deploying somewhere with normal internet access.

## Suggested build order for a real launch

1. **Database**: add Postgres + Prisma. Model `Listing`, `User`,
   `Subscription`, `Lead` — the shapes in `lib/types.ts` are a solid starting
   schema.
2. **Auth**: NextAuth with email/OTP (matches how Indian marketplaces
   typically onboard both buyers and sellers).
3. **Payments**: Razorpay Subscriptions for the Buyer Pro monthly plan and
   Razorpay one-time orders for featured listing fees. Gate
   `ContactUnlock` behind a real subscription check (server-side, in the
   page's data-fetching, not client state).
4. **Listing verification workflow**: an admin view (or just a Google
   Sheet + manual review to start) to mark listings "Verified" after a KYC
   check — this is the core trust mechanic both competitor platforms lean on.
5. **Deploy**: Vercel is the path of least resistance for Next.js. Add a
   managed Postgres (Supabase, Neon, or Railway) alongside it.
6. **Grant data upkeep**: schedule a quarterly review of `lib/data/grants.ts`
   — scheme amounts, deadlines and portals change.

## Deploying it (get a real URL)

The fastest path is Vercel — it's built by the Next.js team and needs zero
config for this project.

**Option A — Vercel CLI (fastest, no GitHub needed):**
```bash
npm install -g vercel
cd indiabiz-mvp
vercel        # follow the prompts, creates a preview URL
vercel --prod # promotes it to your production URL
```

**Option B — GitHub + Vercel dashboard (recommended if you'll keep iterating):**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → "Add New Project" → import that repo.
3. Vercel auto-detects Next.js — leave build settings as default and click Deploy.
4. You'll get a `*.vercel.app` URL immediately; add a custom domain later
   from the project's Settings → Domains tab.

Either way, no environment variables are required for this MVP as it
stands — auth, database and payment keys will need to be added as env vars
once you wire those in (see "Suggested build order" above).

## Project structure

```
app/                  Routes (App Router)
  api/leads/route.ts  Seller-form submission endpoint
  listings/           Browse + detail pages
  grants/             Grant matcher page
  pricing/            Pricing page
  sell/               Seller form page
components/           Reusable UI (Nav, Footer, ListingCard, GrantMatcher, ...)
lib/data/             Seed data (listings, grants, pricing tiers)
lib/types.ts          Shared TypeScript types — a good starting DB schema
```
