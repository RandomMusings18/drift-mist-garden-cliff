import { shardById, shards } from "@/data/shards";
import { rarityLabel, type Shard } from "@/data/types";

const SLAYERS: { name: string; family: string; note: string }[] = [
  {
    name: "Revenant",
    family: "Undead",
    note: "Zombie slayer. Riftstalker vampires use this same line.",
  },
  { name: "Tarantula", family: "Arthropod", note: "Spider slayer." },
  { name: "Sven", family: "Animal", note: "Wolf slayer." },
  { name: "Voidgloom", family: "Ender", note: "Enderman slayer." },
  {
    name: "Inferno",
    family: "Infernal",
    note: "Blaze slayer. Magmatic is the Crimson Isle around it, not the boss.",
  },
];

const EXTRA = [
  "Magmatic",
  "Skeletal",
  "Mythological",
  "Frozen",
  "Woodland",
  "Aquatic",
  "Airborne",
  "Arcane",
  "Subterranean",
  "Humanoid",
  "Construct",
  "Elusive",
  "Cubic",
  "Pest",
  "Critter",
];

type Role = "damage" | "defense" | "magic" | "other";

function roleOf(shard: Shard, family: string): Role | null {
  const blob = `${shard.attribute} ${shard.effect}`;
  if (!new RegExp(`\\b${family}\\b`, "i").test(blob)) return null;
  const attr = shard.attribute.toLowerCase();
  const effect = shard.effect.toLowerCase();
  if (attr.includes("ruler") || effect.includes("more damage") || effect.includes("increase damage")) {
    return "damage";
  }
  if (attr.includes("resistance") || effect.includes("defense")) return "defense";
  if (attr.includes("fortune") || effect.includes("magic find")) return "magic";
  return "other";
}

function rows(family: string, role: Role) {
  return shards.filter((s) => roleOf(s, family) === role);
}

function Cell({ items }: { items: Shard[] }) {
  if (items.length === 0) return <p className="text-sm text-faint">None</p>;
  return (
    <ul className="space-y-2">
      {items.map((s) => (
        <li key={s.id} className="text-sm">
          <span className="text-fg">{s.shard}</span>
          <span className="text-faint">
            {" "}
            {s.id} · {rarityLabel(s.rarity)}
          </span>
          <span className="mt-0.5 block text-muted">{s.effect}</span>
        </li>
      ))}
    </ul>
  );
}

function FamilyBlock({
  title,
  note,
  family,
}: {
  title: string;
  note?: string;
  family: string;
}) {
  const damage = rows(family, "damage");
  const magic = rows(family, "magic");
  const defense = rows(family, "defense");
  const other = rows(family, "other");
  if (damage.length + magic.length + defense.length + other.length === 0) return null;

  return (
    <section className="border-t border-line py-5">
      <h3 className="font-display text-2xl text-fg">{title}</h3>
      {note && <p className="mt-1 text-sm text-muted">{note}</p>}
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div>
          <p className="mb-2 text-xs font-medium tracking-widest text-gold">DAMAGE</p>
          <Cell items={damage} />
        </div>
        <div>
          <p className="mb-2 text-xs font-medium tracking-widest text-gold">MAGIC FIND</p>
          <Cell items={magic} />
        </div>
        <div>
          <p className="mb-2 text-xs font-medium tracking-widest text-gold">DEFENSE</p>
          <Cell items={defense} />
        </div>
      </div>
      {other.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-xs font-medium tracking-widest text-muted">ALSO</p>
          <Cell items={other} />
        </div>
      )}
    </section>
  );
}

export function FamilyBoard() {
  return (
    <div className="mt-10 rounded-card border border-line bg-raised p-4 sm:p-6">
      <p className="text-xs font-medium tracking-widest text-gold">BY MOB</p>
      <h2 className="mt-1 font-display text-3xl text-fg">Slayer families</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Ruler is damage. Fortune is magic find on that family only, and it caps at the same +5 as
        Cinderbat's global magic find. Resistance is defense. Caiman (
        {shardById.E30?.shard}) raises every Ruler. Alligator ({shardById.E6?.shard}) raises every
        Resistance.
      </p>
      {SLAYERS.map((s) => (
        <FamilyBlock key={s.name} title={s.name} note={s.note} family={s.family} />
      ))}
      <details className="mt-4 border-t border-line pt-4">
        <summary className="min-h-11 cursor-pointer text-sm text-gold">
          Other mob families
        </summary>
        {EXTRA.map((family) => (
          <FamilyBlock key={family} title={family} family={family} />
        ))}
      </details>
    </div>
  );
}
