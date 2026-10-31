import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { guides } from "@/data/guides";
import { shards } from "@/data/shards";
import { HUNTING_LEVEL, rarityLabel, SHARDS_TO_MAX, type Rarity } from "@/data/types";
import { Shell } from "@/components/shell";
import { skillIcons } from "@/components/icons";

export const Route = createFileRoute("/")({ component: Home });

const jumps = [
  { skill: "mining", hash: "hotm", label: "HOTM XP", detail: "Treasure Hoarder and commissions" },
  { skill: "mining", hash: "fortune", label: "Mining fortune", detail: "Flitter, then the ore line" },
  { skill: "combat", hash: "xp", label: "Combat XP", detail: "Wisdom plus kill orbs" },
  { skill: "combat", hash: "slayer", label: "Slayer", detail: "Quest progress, then the family" },
  { skill: "foraging", hash: "hotf", label: "HOTF XP", detail: "Ember, not foraging wisdom" },
  { skill: "fishing", hash: "scc", label: "Sea creatures", detail: "Bogged, then fishing speed" },
] as const;

const rarities: Rarity[] = ["COMMON", "UNCOMMON", "RARE", "EPIC", "LEGENDARY"];

function Home() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const cores = guides.reduce(
    (sum, guide) =>
      sum + guide.goals.reduce((n, goal) => n + goal.picks.filter((p) => p.tier === "core").length, 0),
    0,
  );

  return (
    <Shell>
      <p className="text-xs font-medium tracking-widest text-gold">HYPIXEL SKYBLOCK</p>
      <h1 className="mt-2 max-w-3xl font-display text-5xl leading-none text-fg sm:text-6xl">
        The shards worth syphoning.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Every attribute you syphon stays on. This is the short list for each skill, split by the
        stat you are actually grinding: HOTM XP, powder, fortune, combat, slayer, Heart of the
        Forest, sea creatures, and the echoes that raise them.
      </p>

      <form
        className="mt-6 flex max-w-xl flex-col gap-2 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          void navigate({ to: "/catalog", search: { q: q.trim(), skill: "" } });
        }}
      >
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Search shards</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-faint" />
          <input
            value={q}
            onChange={(event) => setQ(event.target.value)}
            placeholder="Search fortune, HOTM, slayer, sweep..."
            className="min-h-11 w-full rounded-card border border-line bg-raised pr-3 pl-10 text-fg placeholder:text-faint"
          />
        </label>
        <button
          type="submit"
          className="min-h-11 rounded-card bg-gold px-5 font-medium text-ink"
        >
          Search
        </button>
      </form>

      <dl className="mt-8 grid grid-cols-3 gap-3 border-y border-line py-4 text-sm">
        <div>
          <dt className="text-faint">Shards</dt>
          <dd className="font-display text-2xl text-fg">{shards.length}</dd>
        </div>
        <div>
          <dt className="text-faint">Skills</dt>
          <dd className="font-display text-2xl text-fg">{guides.length}</dd>
        </div>
        <div>
          <dt className="text-faint">Syphon first</dt>
          <dd className="font-display text-2xl text-fg">{cores}</dd>
        </div>
      </dl>

      <h2 className="mt-10 font-display text-3xl">Start with the grind</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {jumps.map((jump) => (
          <li key={jump.label}>
            <Link
              to="/skill/$skill"
              params={{ skill: jump.skill }}
              hash={jump.hash}
              className="flex min-h-11 items-center justify-between gap-3 rounded-card border border-line bg-surface px-4 py-3"
            >
              <span>
                <span className="block text-fg">{jump.label}</span>
                <span className="text-sm text-muted">{jump.detail}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-gold" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-display text-3xl">By skill</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {guides.map((guide) => {
          const Icon = skillIcons[guide.slug];
          return (
            <li key={guide.slug}>
              <Link
                to="/skill/$skill"
                params={{ skill: guide.slug }}
                className="block h-full rounded-card border border-line bg-surface p-4"
              >
                <span className="flex items-center gap-2">
                  {Icon && <Icon className="size-4 text-gold" aria-hidden="true" />}
                  <span className="font-display text-2xl text-fg">{guide.name}</span>
                </span>
                <span className="mt-1 block text-sm text-muted">{guide.tagline}</span>
                <span className="mt-3 flex flex-wrap gap-2">
                  {guide.goals.map((goal) => (
                    <span
                      key={goal.id}
                      className="rounded-full border border-line px-2 py-1 text-xs text-muted"
                    >
                      {goal.title}
                    </span>
                  ))}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">How a shard becomes a stat</h2>
          <ol className="mt-4 space-y-4 text-sm text-muted">
            <li>
              <span className="font-display text-lg text-fg">1. You don't equip it.</span>
              <span className="mt-1 block">
                Syphon copies into the attribute. Level I through X stays on your profile, all the
                time. There is no loadout to swap.
              </span>
            </li>
            <li>
              <span className="font-display text-lg text-fg">2. Rarity is the cost, not the power.</span>
              <span className="mt-1 block">
                A common can be the best shard in a skill. Legendary just means fewer copies to max,
                and a higher hunting level before you can syphon it.
              </span>
            </li>
            <li>
              <span className="font-display text-lg text-fg">3. Echoes go last.</span>
              <span className="mt-1 block">
                Wyvern raises wisdom. Caiman raises ruler damage. Iguana raises powder. Tiamat
                raises those echoes. Syphon the stat before the multiplier.
              </span>
            </li>
          </ol>
        </div>
        <div>
          <h2 className="font-display text-3xl">Copies to max</h2>
          <table className="mt-4 w-full text-left text-sm">
            <thead className="text-faint">
              <tr className="border-b border-line">
                <th className="py-2 font-medium">Rarity</th>
                <th className="py-2 font-medium">To level X</th>
                <th className="py-2 font-medium">Hunting</th>
              </tr>
            </thead>
            <tbody>
              {rarities.map((rarity) => (
                <tr key={rarity} className="border-b border-line">
                  <td className="py-2 text-fg">{rarityLabel(rarity)}</td>
                  <td className="py-2">{SHARDS_TO_MAX[rarity]}</td>
                  <td className="py-2">{HUNTING_LEVEL[rarity] === 0 ? "None" : HUNTING_LEVEL[rarity]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Shell>
  );
}
