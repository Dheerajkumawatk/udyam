"use client";

import { useState } from "react";

export default function SellForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "done") {
    return (
      <div className="border hairline bg-paper-raised rounded-sm p-8 text-center">
        <h2 className="font-display text-2xl text-ink mb-2">
          Listing submitted
        </h2>
        <p className="text-ink-soft">
          We&apos;ll review your submission and reach out within 2 business
          days to verify details before it goes live.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border hairline bg-paper-raised rounded-sm p-6 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Business name" name="businessName" required />
        <Field label="Your email" name="email" type="email" required />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField
          label="Sector"
          name="sector"
          required
          options={[
            "IT & Software",
            "Manufacturing",
            "Restaurant / Cafe",
            "E-commerce",
            "Healthcare",
            "Education",
            "Retail Store",
            "Gym & Fitness",
            "Services",
          ]}
        />
        <Field label="Location (city, state)" name="location" required />
      </div>

      <SelectField
        label="What are you looking for?"
        name="listingType"
        required
        options={[
          "Full sale",
          "Raise equity",
          "Raise debt",
          "Franchise expansion",
        ]}
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Asking price / funding ask (INR)" name="askAmount" />
        <Field label="Annual revenue (INR)" name="annualRevenue" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-mono uppercase tracking-wide text-ink-soft">
          Business summary
        </label>
        <textarea
          name="summary"
          rows={4}
          required
          className="border hairline rounded-sm px-3 py-2 text-sm bg-paper text-ink"
          placeholder="What does the business do, and why is it a good opportunity?"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-danger">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-ink text-paper py-3 rounded-sm text-sm font-medium hover:bg-teal transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit listing for review"}
      </button>
      <p className="text-xs text-ink-soft text-center">
        Free to list. We verify basic KYC before your listing goes live.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-mono uppercase tracking-wide text-ink-soft">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="border hairline rounded-sm px-3 py-2 text-sm bg-paper text-ink"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-mono uppercase tracking-wide text-ink-soft">
        {label}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="border hairline rounded-sm px-3 py-2 text-sm bg-paper text-ink"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
