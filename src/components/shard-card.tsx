import { useState } from "react";
import { Bookmark, ChevronDown } from "lucide-react";
import { shardById } from "@/data/shards";
import {
  HUNTING_LEVEL,
  rarityLabel,
  SHARDS_TO_MAX,
  UNSYPHONABLE,
  type Tier,
} from "@/data/types";
import { cn } from "@/lib/cn";
import { usePins } from "@/lib/pins";

const bar: Record<string, string> = {
  COMMON: "bg-rarity-common",
  UNCOMMON: "bg-rarity-uncommon",
  RARE: "bg-rarity-rare",
  EPIC: "bg-rarity-epic",
  LEGENDARY: "bg-rarity-legendary",
};

const rarityText: Record<string, string> = {
  COMMON: "text-rarity-common",
  UNCOMMON: "text-rarity-uncommon",
  RARE: "text-rarity-rare",
  EPIC: "text-rarity-epic",
  LEGENDARY: "text-rarity-legendary",
};

const tierLabel: Record<Tier, string> = {
  core: "Syphon",
  amp: "Multiplier",
  niche: "Situational",
};

const tierClass: Record<Tier, string> = {
  core: "text-core",
  amp: "text-gold",
  niche: "text-muted",
};

export function ShardCard({
  id,
  note,
  tier,
  rank,
}: {
  id: string;
  note?: string;
  tier?: Tier;
  rank?: number;
}) {
  const shard = shardById[id];
  const pinned = usePins((s) => s.ids.includes(id));
  const toggle = usePins((s) => s.toggle);
  const [open, setOpen] = useState(false);

  if (!shard) return null;

  const locked = UNSYPHONABLE.has(shard.id);

  return (
    <article className="flex overflow-hidden rounded-card border border-line bg-surface">
      <div className={cn("w-1.5 shrink-0", bar[shard.rarity])} />
      <div className="min-w-0 flex-1 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
              {rank != null && (
                <span className="font-display text-sm text-gold">{String(rank).padStart(2, "0")}</span>
              )}
              {tier && (
                <span className={cn("font-medium tracking-wide", tierClass[tier])}>
                  {tierLabel[tier]}
                </span>
              )}
              <span className={cn("font-medium", rarityText[shard.rarity])}>
                {rarityLabel(shard.rarity)}
              </span>
              <span className="text-faint">{shard.id}</span>
              <span className="text-faint">{shard.skill}</span>
            </p>
            <h3 className="mt-1 font-display text-2xl leading-tight text-fg">{shard.shard}</h3>
            <p className="text-sm text-muted">{shard.attribute}</p>
          </div>
          <button
            type="button"
            aria-pressed={pinned}
            onClick={() => toggle(shard.id)}
            className={cn(
              "inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-card border px-3 text-sm",
              pinned
                ? "border-gold bg-gold text-ink"
                : "border-line bg-raised text-fg",
            )}
          >
            <Bookmark className="size-4" aria-hidden="true" />
            {pinned ? "Tracked" : "Track"}
          </button>
        </div>

        <p className="mt-3 text-base text-fg">{shard.effect}</p>
        {note && <p className="mt-2 text-sm text-muted">{note}</p>}

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-faint">
          {locked ? (
            <span className="rounded-full border border-line px-2 py-1">Cannot be syphoned</span>
          ) : (
            <>
              <span className="rounded-full border border-line px-2 py-1">
                {SHARDS_TO_MAX[shard.rarity]} copies to max
              </span>
              <span className="rounded-full border border-line px-2 py-1">
                Hunting {HUNTING_LEVEL[shard.rarity]}
              </span>
            </>
          )}
          {shard.family.length > 0 && (
            <span className="rounded-full border border-line px-2 py-1">
              {shard.family.join(", ")}
            </span>
          )}
        </div>

        {shard.how.length > 0 && (
          <div className="mt-3">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex min-h-11 items-center gap-1 text-sm text-gold"
            >
              Where to get it
              <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
            </button>
            {open && (
              <ul className="mt-1 space-y-1 text-sm text-muted">
                {shard.how.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
