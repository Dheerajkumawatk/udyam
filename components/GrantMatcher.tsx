"use client";

import { useMemo, useState } from "react";
import { Grant, GrantStage } from "@/lib/types";

const sectors = [
  "any",
  "IT & Software",
  "Manufacturing",
  "Restaurant / Cafe",
  "E-commerce",
  "Healthcare",
  "Education",
  "Retail Store",
  "Services",
];

const stages: { value: GrantStage; label: string }[] = [
  { value: "idea", label: "Idea / pre-revenue" },
  { value: "early-revenue", label: "Early revenue (< 2 yrs)" },
  { value: "growth", label: "Growth stage" },
  { value: "established-sme", label: "Established SME" },
];

const states = [
  "any",
  "Gujarat",
  "Maharashtra",
  "Karnataka",
  "Rajasthan",
  "Delhi",
  "Tamil Nadu",
  "Uttar Pradesh",
  "Telangana",
  "West Bengal",
];

function scoreGrant(
  grant: Grant,
  sector: string,
  stage: GrantStage,
  state: string
) {
  let score = 0;
  if (grant.sectors.includes("any") || grant.sectors.includes(sector)) score += 1;
  if (grant.stages.includes(stage)) score += 1;
  if (grant.states.includes("any") || grant.states.includes(state)) score += 1;
  return score;
}

export default function GrantMatcher({ grants }: { grants: Grant[] }) {
  const [sector, setSector] = useState("any");
  const [stage, setStage] = useState<GrantStage>("early-revenue");
  const [state, setState] = useState("any");
  const [submitted, setSubmitted] = useState(false);

  const matches = useMemo(() => {
    return grants
      .map((g) => ({ grant: g, score: scoreGrant(g, sector, stage, state) }))
      .filter((m) => m.score >= 2) // sector/stage/state: need at least 2 of 3 to match
      .sort((a, b) => b.score - a.score)
      .map((m) => m.grant);
  }, [grants, sector, stage, state]);

  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-4 mb-8 bg-paper-raised border hairline rounded-sm p-5">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-mono uppercase tracking-wide text-ink-soft">
            Sector
          </span>
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="border hairline rounded-sm px-3 py-2 text-sm bg-paper text-ink"
          >
            {sectors.map((s) => (
              <option key={s} value={s}>
                {s === "any" ? "Any sector" : s}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-mono uppercase tracking-wide text-ink-soft">
            Stage
          </span>
          <select
            value={stage}
            onChange={(e) => setStage(e.target.value as GrantStage)}
            className="border hairline rounded-sm px-3 py-2 text-sm bg-paper text-ink"
          >
            {stages.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-mono uppercase tracking-wide text-ink-soft">
            State
          </span>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border hairline rounded-sm px-3 py-2 text-sm bg-paper text-ink"
          >
            {states.map((s) => (
              <option key={s} value={s}>
                {s === "any" ? "Any state" : s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button
        onClick={() => setSubmitted(true)}
        className="mb-8 bg-ink text-paper px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-teal transition-colors"
      >
        Find matching schemes
      </button>

      {submitted && (
        <div>
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-display text-2xl text-ink">
              {matches.length} scheme{matches.length !== 1 ? "s" : ""} matched
            </h2>
          </div>

          <div className="bg-teal-soft border border-teal/20 rounded-sm px-4 py-3 text-sm text-teal mb-6">
            This is an informational matching tool, not a financial guarantee.
            Eligibility windows, amounts and deadlines change — always confirm
            details on the official scheme page before applying.
          </div>

          <div className="space-y-4">
            {matches.map((g) => (
              <div
                key={g.id}
                className="border hairline bg-paper-raised rounded-sm p-5"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest bg-gold-soft text-ink px-2 py-0.5 rounded-full">
                    {g.type}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                    {g.instrument}
                  </span>
                </div>
                <h3 className="font-display text-lg text-ink mb-1">
                  {g.name}
                </h3>
                <p className="text-xs text-ink-soft mb-3">{g.provider}</p>
                <p className="text-sm text-ink-soft leading-relaxed mb-4">
                  {g.description}
                </p>
                <div className="flex items-center justify-between border-t hairline pt-3">
                  <span className="font-mono text-sm text-teal">
                    {g.amountLabel}
                  </span>
                  <a
                    href={g.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ink underline decoration-gold decoration-2 underline-offset-4 hover:text-teal"
                  >
                    Official page →
                  </a>
                </div>
              </div>
            ))}
            {matches.length === 0 && (
              <p className="text-sm text-ink-soft">
                No close matches for this combination yet — try widening the
                sector or state to &quot;any&quot;.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
