"use client";

import { useMemo, useState } from "react";
import { Listing } from "@/lib/types";
import ListingCard from "@/components/ListingCard";

export default function ListingsBrowser({ listings }: { listings: Listing[] }) {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("All");

  const sectors = useMemo(
    () => ["All", ...Array.from(new Set(listings.map((l) => l.sector)))],
    [listings]
  );

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      const matchesSector = sector === "All" || l.sector === sector;
      const matchesQuery =
        query.trim() === "" ||
        `${l.title} ${l.location} ${l.state} ${l.summary}`
          .toLowerCase()
          .includes(query.toLowerCase());
      return matchesSector && matchesQuery;
    });
  }, [listings, query, sector]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-8 bg-paper-raised border hairline rounded-sm p-4">
        <input
          type="text"
          placeholder="Search by name, city or keyword…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border hairline rounded-sm px-3 py-2 text-sm bg-paper text-ink"
        />
        <select
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          className="border hairline rounded-sm px-3 py-2 text-sm bg-paper text-ink sm:w-56"
        >
          {sectors.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-ink-soft mb-6">
        {filtered.length} listing{filtered.length !== 1 ? "s" : ""}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((l) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </div>
    </div>
  );
}
