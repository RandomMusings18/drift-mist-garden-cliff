export type Rarity = "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY";

export type Shard = {
  id: string;
  shard: string;
  attribute: string;
  effect: string;
  how: string[];
  family: string[];
  skill: string;
  category: string;
  rarity: Rarity;
  max: number | null;
};

export type Tier = "core" | "amp" | "niche";

export type Pick = {
  id: string;
  tier: Tier;
  note: string;
};

export type Goal = {
  id: string;
  title: string;
  blurb: string;
  picks: Pick[];
};

export type SkillGuide = {
  slug: string;
  name: string;
  shardSkill: string;
  tagline: string;
  goals: Goal[];
};

export const RARITY_RANK: Record<Rarity, number> = {
  LEGENDARY: 0,
  EPIC: 1,
  RARE: 2,
  UNCOMMON: 3,
  COMMON: 4,
};

/** Copies consumed to reach attribute level 10. */
export const SHARDS_TO_MAX: Record<Rarity, number> = {
  COMMON: 96,
  UNCOMMON: 64,
  RARE: 48,
  EPIC: 32,
  LEGENDARY: 24,
};

/** Hunting level required before that rarity can be syphoned. */
export const HUNTING_LEVEL: Record<Rarity, number> = {
  COMMON: 0,
  UNCOMMON: 5,
  RARE: 10,
  EPIC: 15,
  LEGENDARY: 20,
};

/** Chameleon is a fusion tool. It cannot be syphoned. */
export const UNSYPHONABLE = new Set(["L4"]);

export function rarityLabel(rarity: Rarity) {
  return rarity[0] + rarity.slice(1).toLowerCase();
}
