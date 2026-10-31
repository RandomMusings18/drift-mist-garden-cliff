import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { FamilyBoard } from "@/components/families";
import { Shell } from "@/components/shell";
import { ShardCard } from "@/components/shard-card";
import { guideBySlug, guides } from "@/data/guides";
import { shardById, shards } from "@/data/shards";
import { RARITY_RANK, type Tier } from "@/data/types";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/skill/$skill")({ component: SkillPage });

const tierOrder: Tier[] = ["core", "amp", "niche"];
const tierHeading: Record<Tier, string> = {
  core: "Syphon these",
  amp: "Then the multiplier",
  niche: "Only if this is your grind",
};

function SkillPage() {
  const { skill } = Route.useParams();
  const guide = guideBySlug(skill);
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const rest = useMemo(() => {
    if (!guide) return [];
    const used = new Set(guide.goals.flatMap((goal) => goal.picks.map((pick) => pick.id)));
    return shards
      .filter((shard) => shard.skill === guide.shardSkill && !used.has(shard.id))
      .filter((shard) => {
        if (!query) return true;
        return `${shard.id} ${shard.shard} ${shard.attribute} ${shard.effect}`
          .toLowerCase()
          .includes(query);
      })
      .sort((a, b) => RARITY_RANK[a.rarity] - RARITY_RANK[b.rarity] || a.id.localeCompare(b.id));
  }, [guide, query]);

  if (!guide) {
    return (
      <Shell>
        <h1 className="font-display text-4xl">That skill isn't in the guide.</h1>
        <Link to="/" className="mt-4 inline-flex min-h-11 items-center text-gold">
          Back to all skills
        </Link>
      </Shell>
    );
  }

  const index = guides.findIndex((item) => item.slug === guide.slug);

  function hit(id: string, note: string) {
    if (!query) return true;
    const shard = shardById[id];
    if (!shard) return false;
    return `${shard.id} ${shard.shard} ${shard.attribute} ${shard.effect} ${note}`
      .toLowerCase()
      .includes(query);
  }

  const subnav = (
    <div className="border-t border-line">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
        {guide.goals.map((goal) => (
          <a
            key={goal.id}
            href={`#${goal.id}`}
            className="inline-flex min-h-11 shrink-0 items-center px-3 text-sm text-muted"
          >
            {goal.title}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <Shell subnav={subnav}>
      <p className="text-xs font-medium tracking-widest text-gold">
        {String(index + 1).padStart(2, "0")} / {guide.name.toUpperCase()}
      </p>
      <h1 className="mt-2 font-display text-5xl leading-none">{guide.name}</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">{guide.tagline}</p>
      <p className="mt-3 max-w-2xl text-sm text-faint">
        Order inside a stat is the syphon order. Multipliers do nothing until the stat they raise
        is already on you.
      </p>

      <label className="relative mt-6 block max-w-md">
        <span className="sr-only">Filter this skill</span>
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-faint" />
        <input
          value={q}
          onChange={(event) => setQ(event.target.value)}
          placeholder={`Filter ${guide.name.toLowerCase()} shards`}
          className="min-h-11 w-full rounded-card border border-line bg-raised pr-3 pl-10 placeholder:text-faint"
        />
      </label>

      <div className="mt-10 space-y-14">
        {guide.goals.map((goal) => {
          const visible = goal.picks.filter((pick) => hit(pick.id, pick.note));
          if (visible.length === 0) return null;
          let coreRank = 0;
          return (
            <section key={goal.id} id={goal.id} className="scroll-mt-40">
              <h2 className="font-display text-3xl">{goal.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted">{goal.blurb}</p>
              {tierOrder.map((tier) => {
                const picks = visible.filter((pick) => pick.tier === tier);
                if (picks.length === 0) return null;
                return (
                  <div key={tier} className="mt-5">
                    <h3 className={cn("text-xs font-medium tracking-widest", tier === "amp" ? "text-gold" : tier === "core" ? "text-core" : "text-faint")}>
                      {tierHeading[tier]}
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {picks.map((pick) => {
                        const rank = tier === "core" ? ++coreRank : undefined;
                        return (
                          <li key={pick.id}>
                            <ShardCard id={pick.id} note={pick.note} tier={pick.tier} rank={rank} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
              {guide.slug === "combat" && goal.id === "slayer" && !query && <FamilyBoard />}
            </section>
          );
        })}
      </div>

      {rest.length > 0 && (
        <section className="mt-14 border-t border-line pt-8">
          <h2 className="font-display text-3xl">Everything else filed under {guide.name}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Still real attributes. They didn't win a stat above. Open one if the effect is the
            thing you came for.
          </p>
          <ul className="mt-4 space-y-3">
            {rest.map((shard) => (
              <li key={shard.id}>
                <ShardCard id={shard.id} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </Shell>
  );
}
