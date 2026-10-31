import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { ShardCard } from "@/components/shard-card";
import { guides } from "@/data/guides";
import { shards } from "@/data/shards";
import { RARITY_RANK } from "@/data/types";

type Search = { q: string; skill: string };

export const Route = createFileRoute("/catalog")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    q: typeof search.q === "string" ? search.q : "",
    skill: typeof search.skill === "string" ? search.skill : "",
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();

  function update(next: Partial<Search>) {
    void navigate({
      to: "/catalog",
      search: { ...search, ...next },
      replace: true,
    });
  }

  const query = search.q.trim().toLowerCase();
  const filtered = shards.filter((shard) => {
    if (search.skill && shard.skill !== search.skill) return false;
    if (!query) return true;
    return `${shard.id} ${shard.shard} ${shard.attribute} ${shard.effect} ${shard.skill} ${shard.family.join(" ")} ${shard.how.join(" ")}`
      .toLowerCase()
      .includes(query);
  });

  const groups = guides
    .map((guide) => ({
      name: guide.name,
      items: filtered
        .filter((shard) => shard.skill === guide.shardSkill)
        .sort((a, b) => RARITY_RANK[a.rarity] - RARITY_RANK[b.rarity] || a.id.localeCompare(b.id)),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <Shell>
      <p className="text-xs font-medium tracking-widest text-gold">FULL LIST</p>
      <h1 className="mt-2 font-display text-5xl leading-none">All {shards.length} shards</h1>
      <p className="mt-3 max-w-2xl text-muted">
        The skill pages are the short list. This is every attribute, including the ones that are
        not worth a syphon unless you already know why.
      </p>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <label className="min-w-0 flex-1">
          <span className="sr-only">Search</span>
          <input
            value={search.q}
            onChange={(event) => update({ q: event.target.value })}
            placeholder="Name, effect, family, id"
            className="min-h-11 w-full rounded-card border border-line bg-raised px-3 text-fg placeholder:text-faint"
          />
        </label>
        <label>
          <span className="sr-only">Skill</span>
          <select
            value={search.skill}
            onChange={(event) => update({ skill: event.target.value })}
            className="min-h-11 w-full rounded-card border border-line bg-raised px-3 text-fg sm:w-48"
          >
            <option value="">Every skill</option>
            {guides.map((guide) => (
              <option key={guide.slug} value={guide.shardSkill}>
                {guide.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-4 text-sm text-faint">{filtered.length} shown</p>

      {groups.length === 0 ? (
        <p className="mt-8 text-muted">Nothing matches. Try fortune, wisdom, or a shard id like C37.</p>
      ) : (
        <div className="mt-8 space-y-10">
          {groups.map((group) => (
            <section key={group.name}>
              <h2 className="font-display text-3xl">
                {group.name}
                <span className="ml-2 text-base text-faint">{group.items.length}</span>
              </h2>
              <ul className="mt-3 space-y-3">
                {group.items.map((shard) => (
                  <li key={shard.id}>
                    <ShardCard id={shard.id} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </Shell>
  );
}
