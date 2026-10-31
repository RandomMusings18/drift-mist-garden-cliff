import type { SkillGuide } from "./types";

const wisdom = "Raises every Wisdom attribute, including this one, by up to 20%.";
const tiamat =
  "Makes every Echo attribute up to 50% stronger. Syphon the echo first, then this.";

export const guides: SkillGuide[] = [
  {
    slug: "mining",
    name: "Mining",
    shardSkill: "Mining",
    tagline: "HOTM XP, powder, fortune, speed, and the Hollows.",
    goals: [
      {
        id: "hotm",
        title: "HOTM XP",
        blurb:
          "Heart of the Mountain experience, not Mining skill XP. Commissions are the main source, and these two bonuses stack.",
        picks: [
          {
            id: "U26",
            tier: "core",
            note: "Up to +10% HOTM XP from every source. This is the mountain shard.",
          },
          {
            id: "U6",
            tier: "core",
            note: "Another +10%, but only on commission XP. Stack it with Dwarven Training.",
          },
        ],
      },
      {
        id: "powder",
        title: "Powder",
        blurb:
          "Mithril, gemstone, and glacite powder are three separate Atomized attributes. Echo of Atomized raises all three.",
        picks: [
          {
            id: "R21",
            tier: "core",
            note: "Up to +10% Mithril Powder.",
          },
          {
            id: "R31",
            tier: "core",
            note: "Up to +10% Gemstone Powder. Thyst is the powder shard people actually buy.",
          },
          {
            id: "R51",
            tier: "core",
            note: "Up to +10% Glacite Powder for the Mineshafts.",
          },
          {
            id: "E10",
            tier: "amp",
            note: "Echo of Atomized. Up to +20% on every Atomized attribute, powder included.",
          },
          { id: "L6", tier: "amp", note: tiamat },
        ],
      },
      {
        id: "fortune",
        title: "Mining fortune",
        blurb:
          "Generic Mining Fortune applies everywhere. Ore, block, and gemstone fortune are bigger but only on those drops.",
        picks: [
          {
            id: "C37",
            tier: "core",
            note: "Up to +25 Mining Fortune, always. A common. Syphon it early.",
          },
          {
            id: "L41",
            tier: "core",
            note: "Up to +10 Mining, Farming, and Foraging Fortune on one legendary.",
          },
          {
            id: "C43",
            tier: "niche",
            note: "Up to +50 Ore Fortune. Better than Flitter when you are on ores.",
          },
          {
            id: "C10",
            tier: "niche",
            note: "Up to +50 Block Fortune from the mossy box line.",
          },
          {
            id: "E63",
            tier: "niche",
            note: "Mines of Divan only: up to +50 Mining Speed and +25 Ore Fortune.",
          },
          {
            id: "U73",
            tier: "niche",
            note: "Up to +50 Gemstone Fortune, and only during Cole's Mining Fiesta.",
          },
          {
            id: "R77",
            tier: "niche",
            note: "Goblin Pet only: up to +10 Ore Fortune. Skip it if you don't run that pet.",
          },
        ],
      },
      {
        id: "speed",
        title: "Mining speed",
        blurb: "Speed is a separate grind from fortune. The always-on shard is small. The conditional ones are not.",
        picks: [
          {
            id: "C36",
            tier: "core",
            note: "Up to +30 Mining Speed with no condition. The default speed shard.",
          },
          {
            id: "R33",
            tier: "niche",
            note: "+100 Mining Speed while Weather is active on mining islands. Zero when it isn't.",
          },
          {
            id: "E63",
            tier: "niche",
            note: "Up to +50 Mining Speed inside the Mines of Divan, plus ore fortune.",
          },
          {
            id: "E8",
            tier: "niche",
            note: "Pickaxe ability cooldown down by up to 10%. Speed-adjacent, not Mining Speed.",
          },
        ],
      },
      {
        id: "wisdom",
        title: "Mining XP",
        blurb: "Mining Wisdom multiplies Mining skill XP. It does not give HOTM XP.",
        picks: [
          {
            id: "E36",
            tier: "core",
            note: "Up to +5 Mining Wisdom. The only direct mining XP shard.",
          },
          { id: "L7", tier: "amp", note: wisdom },
          { id: "L6", tier: "amp", note: tiamat },
        ],
      },
      {
        id: "hollows",
        title: "Crystal Hollows",
        blurb: "Chest loot, the nucleus, and the goblins that print powder routes.",
        picks: [
          {
            id: "U7",
            tier: "core",
            note: "Up to 50% chance of an extra item in Treasure Chests and the Crystal Nucleus.",
          },
          {
            id: "R29",
            tier: "core",
            note: "Up to 10% chance Crystal Hollows chests double their loot.",
          },
          {
            id: "R23",
            tier: "niche",
            note: "Up to double the chance of Golden and Diamond Goblins.",
          },
          {
            id: "U78",
            tier: "niche",
            note: "Up to 25% chance an Ender Node spawns an extra Nest Endermite.",
          },
        ],
      },
      {
        id: "spread",
        title: "Spread and pristine",
        blurb: "Spread mines extra blocks. Pristine is gemstone quality. Cold Resistance is the tax for the Glacite line.",
        picks: [
          {
            id: "R66",
            tier: "core",
            note: "Up to +10 Mining Spread.",
          },
          {
            id: "E15",
            tier: "core",
            note: "Each block has up to a 10% chance to grant 1 extra Pristine.",
          },
          {
            id: "E45",
            tier: "niche",
            note: "Up to +2.5 Gemstone Spread.",
          },
          {
            id: "E66",
            tier: "niche",
            note: "In Mineshafts, +0.5 Gemstone Spread per 29 Cold Resistance, falling to every 20 as this levels. Pair it with Wumpa.",
          },
          {
            id: "L60",
            tier: "niche",
            note: "Up to +5 Cold Resistance. Mineshafts gate, and it feeds Littlefoot.",
          },
        ],
      },
      {
        id: "shafts",
        title: "Mineshafts and Fiesta",
        blurb: "Scrap, fossils, and the fiesta-only gemstone procs.",
        picks: [
          {
            id: "R72",
            tier: "core",
            note: "Up to +10% Suspicious Scrap chance in the Glacite Mineshafts.",
          },
          {
            id: "R52",
            tier: "niche",
            note: "Up to double Chisel charges when you start the Fossil Excavator.",
          },
          {
            id: "E60",
            tier: "niche",
            note: "Up to +10% Glossy Gemstones during a Fiesta. Doubles again with a Fiesta Flask.",
          },
          {
            id: "R81",
            tier: "niche",
            note: "Up to +10% Refined Minerals during a Fiesta. Also doubles with a flask.",
          },
        ],
      },
    ],
  },
  {
    slug: "combat",
    name: "Combat",
    shardSkill: "Combat",
    tagline: "Combat XP, real damage, slayer, dungeons, and Kuudra.",
    goals: [
      {
        id: "xp",
        title: "Combat XP",
        blurb:
          "Wisdom and experience orbs multiply each other. Wisdom is the clean combat XP stat. Orbs only matter while you are killing.",
        picks: [
          {
            id: "L33",
            tier: "core",
            note: "Up to +10 Combat Wisdom. The combat XP shard.",
          },
          {
            id: "C9",
            tier: "core",
            note: "Up to double experience orbs from kills. Filed under Enchanting, but the XP is from mobs.",
          },
          { id: "L7", tier: "amp", note: wisdom },
          { id: "L6", tier: "amp", note: tiamat },
        ],
      },
      {
        id: "damage",
        title: "Damage",
        blurb:
          "Percent damage beats flat strength. The elemental strength line is only +10 Strength each. Useful filler, not a damage shard. Ruler shards for a specific mob family are listed under Slayer.",
        picks: [
          {
            id: "E27",
            tier: "core",
            note: "Up to +25% melee damage.",
          },
          {
            id: "E57",
            tier: "core",
            note: "Up to +15% damage while you are at full health.",
          },
          {
            id: "L30",
            tier: "core",
            note: "Up to +30% damage against bosses and minibosses. Slayers, dragons, dungeon bosses.",
          },
          {
            id: "R30",
            tier: "niche",
            note: "Up to +25% damage from ranged weapons.",
          },
          {
            id: "L14",
            tier: "niche",
            note: "After you get hit, your next hit deals up to +20% damage.",
          },
          {
            id: "U30",
            tier: "niche",
            note: "Up to +1% damage per Grandma Wolf combo, capped at 50. Enormous with that pet, dead without it.",
          },
          {
            id: "E48",
            tier: "niche",
            note: "Up to +10 Attack Speed. Matters for Inferno and anything that scales off swing rate.",
          },
          {
            id: "L36",
            tier: "amp",
            note: "Your Strength is increased by up to 1%. A multiplier on the stat, not +1 Strength.",
          },
          {
            id: "L39",
            tier: "amp",
            note: "Your Crit Damage is increased by up to 1%. Same idea as Unlimited Power.",
          },
          {
            id: "L42",
            tier: "amp",
            note: "Almighty Echo. Unlimited Power, Unlimited Energy, and the other Unlimited attributes get up to +50%.",
          },
        ],
      },
      {
        id: "slayer",
        title: "Slayer",
        blurb:
          "Quest progress is slayer XP. The discount is coins. Boss damage is Power Dragon plus the Ruler shard for that family, and Echo of Ruler raises every Ruler.",
        picks: [
          {
            id: "E25",
            tier: "core",
            note: "Slayer quests start up to 10% complete. The slayer XP shard.",
          },
          {
            id: "L54",
            tier: "core",
            note: "Up to 5% off the cost of starting a slayer quest.",
          },
          {
            id: "L30",
            tier: "core",
            note: "Up to +30% damage to bosses and minibosses, which is the slayer boss.",
          },
          {
            id: "E30",
            tier: "amp",
            note: "Echo of Ruler. Up to +20% on every Ruler damage shard.",
          },
          { id: "L6", tier: "amp", note: tiamat },
          {
            id: "L45",
            tier: "niche",
            note: "Up to +5% chance the Primordial cocoon hits a slayer boss or miniboss.",
          },
          {
            id: "L27",
            tier: "niche",
            note: "Up to 20% chance of a second Heavy Pearl. Blaze loot, not damage.",
          },
        ],
      },
      {
        id: "diana",
        title: "Diana and mythologicals",
        blurb: "Griffin burrows, not slayer quests. Damage and magic find for the family sit in the mob list below.",
        picks: [
          {
            id: "E39",
            tier: "core",
            note: "Up to +5 Tracking on Griffin Burrows.",
          },
          {
            id: "E42",
            tier: "core",
            note: "Up to +10% coins from Griffin Burrows.",
          },
          {
            id: "U60",
            tier: "core",
            note: "Up to +30% damage against Mythological mobs.",
          },
          {
            id: "R63",
            tier: "niche",
            note: "Up to +5 Magic Find against Mythological mobs. Cinderbat is the same +5, but everywhere.",
          },
        ],
      },
      {
        id: "magic-find",
        title: "Magic find",
        blurb:
          "One global +5 beats a drawer of family fortunes unless you only kill that family. Family fortunes are +5 Magic Find on one mob type.",
        picks: [
          {
            id: "L28",
            tier: "core",
            note: "Up to +5 Magic Find, always. Syphon this before any single-family fortune.",
          },
        ],
      },
      {
        id: "dungeons",
        title: "Dungeons",
        blurb: "Catacombs XP, class XP, and blessings. Score shards are capped at +1 per run.",
        picks: [
          {
            id: "E51",
            tier: "core",
            note: "Up to +10% Catacombs XP.",
          },
          {
            id: "E54",
            tier: "core",
            note: "Up to +20% dungeon class experience.",
          },
          {
            id: "E24",
            tier: "core",
            note: "Dungeon blessings are up to 10% stronger on you.",
          },
          {
            id: "R13",
            tier: "niche",
            note: "Catacombs boss chest quality, up to +10.",
          },
          {
            id: "R28",
            tier: "niche",
            note: "Up to +50 Speed cap while you are in the Catacombs.",
          },
          {
            id: "E21",
            tier: "niche",
            note: "Killing a Prince can add 1 bonus dungeon score, once per run.",
          },
          {
            id: "R91",
            tier: "niche",
            note: "Same +1 score rule, but from killing a bat.",
          },
        ],
      },
      {
        id: "kuudra",
        title: "Kuudra",
        blurb: "Teeth in the paid chest, then Infernal damage. Crimson Essence is on the Global page.",
        picks: [
          {
            id: "R22",
            tier: "core",
            note: "Up to 50% chance of an extra Kuudra Teeth in the paid reward chest.",
          },
          {
            id: "E18",
            tier: "core",
            note: "Up to +30% damage against Infernal mobs.",
          },
          {
            id: "U38",
            tier: "niche",
            note: "Up to +30% damage against Magmatic mobs. A lot of the Crimson Isle, not the Kuudra boss itself.",
          },
        ],
      },
      {
        id: "dragons",
        title: "Dragons",
        blurb: "Summoning eyes and the Superior weigh-in. Dragon Essence is on the Global page.",
        picks: [
          {
            id: "E12",
            tier: "niche",
            note: "Summoning Eyes you drop have up to a 5% chance to be recombobulated, which raises Superior odds when placed.",
          },
          {
            id: "U15",
            tier: "niche",
            note: "Dragon Shortbow deals up to 20% more damage in The End.",
          },
        ],
      },
    ],
  },
  {
    slug: "foraging",
    name: "Foraging",
    shardSkill: "Foraging",
    tagline: "Heart of the Forest XP, whispers, fortune, and sweep.",
    goals: [
      {
        id: "hotf",
        title: "HOTF XP",
        blurb:
          "Heart of the Forest experience. Whispers are the currency you spend in the tree, not the XP. Foraging Wisdom is skill XP.",
        picks: [
          {
            id: "U68",
            tier: "core",
            note: "Up to +10% Heart of the Forest XP. This is the HOTF shard.",
          },
        ],
      },
      {
        id: "whispers",
        title: "Whispers",
        blurb: "Atomized Whispers is powder-shaped: Echo of Atomized and Tiamat both raise it.",
        picks: [
          {
            id: "R88",
            tier: "core",
            note: "Up to +10% extra Whispers.",
          },
          {
            id: "E10",
            tier: "amp",
            note: "Echo of Atomized raises Atomized Whispers by up to 20%, same as the powder shards.",
          },
          { id: "L6", tier: "amp", note: tiamat },
        ],
      },
      {
        id: "fortune",
        title: "Foraging fortune",
        blurb:
          "Bambloom is the generic +100. Fig, Mangrove, and Helix fortune are separate stats and, on those trees, they are the whole build. Collectors add more for every digit of that log collection, up to 10M.",
        picks: [
          {
            id: "R4",
            tier: "core",
            note: "Up to +100 Foraging Fortune. The generic one. Nothing else in shards is this large and unconditional.",
          },
          {
            id: "C7",
            tier: "core",
            note: "Up to +100 Fig Fortune and +100 Mangrove Fortune.",
          },
          {
            id: "C52",
            tier: "core",
            note: "Up to +100 Helix Fortune.",
          },
          {
            id: "U4",
            tier: "core",
            note: "Up to +10 Fig Fortune per digit of Fig collection. At 10M logs that is eight digits.",
          },
          {
            id: "U28",
            tier: "core",
            note: "Same collector rule for Mangrove Fortune.",
          },
          {
            id: "U82",
            tier: "core",
            note: "Same collector rule for Helix Fortune.",
          },
          {
            id: "L41",
            tier: "core",
            note: "Up to +10 Foraging Fortune, and the same again for Mining and Farming.",
          },
          {
            id: "U43",
            tier: "niche",
            note: "Frog Pet gains up to +10 Foraging Fortune. Pet-locked.",
          },
        ],
      },
      {
        id: "sweep",
        title: "Sweep",
        blurb:
          "Tree sharpening is the sweep that matters. Day and night animal shards are +10 and lose to a single tree shard. Echo of Sharpening raises the sharpening line only.",
        picks: [
          {
            id: "R19",
            tier: "core",
            note: "Up to +150 Sweep on Helix trees.",
          },
          {
            id: "U16",
            tier: "core",
            note: "Up to +100 Sweep on Mangrove trees.",
          },
          {
            id: "C19",
            tier: "core",
            note: "Up to +50 Sweep on Fig trees.",
          },
          {
            id: "U31",
            tier: "core",
            note: "Axe melee gains up to +30 Sweep.",
          },
          {
            id: "U25",
            tier: "core",
            note: "Axe throws gain up to +30 Sweep.",
          },
          {
            id: "R61",
            tier: "amp",
            note: "Echo of Sharpening. Up to +20% on Fig, Mangrove, and Helix sharpening.",
          },
          { id: "L6", tier: "amp", note: tiamat },
          {
            id: "R95",
            tier: "niche",
            note: "Your first Sweep on each tree is up to 10% more effective.",
          },
          {
            id: "R37",
            tier: "niche",
            note: "Up to a 100% chance to chop one extra log on top of what you swept.",
          },
          {
            id: "C55",
            tier: "niche",
            note: "Up to +10 Sweep during the day. Small next to tree sharpening.",
          },
          {
            id: "C4",
            tier: "niche",
            note: "Up to +10 Sweep at night.",
          },
          {
            id: "C20",
            tier: "niche",
            note: "Up to +0.2 Sweep per unique Common you own. Only interesting once the common page is full.",
          },
        ],
      },
      {
        id: "wisdom",
        title: "Foraging XP",
        blurb: "Foraging skill XP. Not HOTF XP.",
        picks: [
          {
            id: "E4",
            tier: "core",
            note: "Up to +5 Foraging Wisdom.",
          },
          { id: "L7", tier: "amp", note: wisdom },
          { id: "L6", tier: "amp", note: tiamat },
        ],
      },
      {
        id: "gifts",
        title: "Tree gifts and contests",
        blurb: "Gifts, beacons, and Starlyn points. Separate from fortune.",
        picks: [
          {
            id: "R7",
            tier: "core",
            note: "Galatea beacons are up to twice as strong, plus a small chance of Signal Enhancers in gifts.",
          },
          {
            id: "R85",
            tier: "niche",
            note: "Up to 1% chance a Tree Gift doubles its loot.",
          },
          {
            id: "R83",
            tier: "niche",
            note: "Up to +20% odds of rare items in Torrhus Canyon gifts.",
          },
          {
            id: "R11",
            tier: "niche",
            note: "Up to +20% odds of rare items in Moonglade Marsh gifts.",
          },
          {
            id: "C17",
            tier: "niche",
            note: "Up to double Berries and Sea Lumies.",
          },
          {
            id: "U62",
            tier: "niche",
            note: "Up to +5% Starlyn Contest points.",
          },
          {
            id: "R47",
            tier: "niche",
            note: "Berries have up to a 100% chance to double their Starlyn points.",
          },
        ],
      },
      {
        id: "axe",
        title: "Axe and honey",
        blurb: "Throw cooldown, tree toughness, and the honeycomb loop.",
        picks: [
          {
            id: "R97",
            tier: "niche",
            note: "Axe throw cooldown down by up to 10%.",
          },
          {
            id: "L40",
            tier: "niche",
            note: "Cutting a tree reduces its Toughness by up to 1.",
          },
          {
            id: "C64",
            tier: "niche",
            note: "Honeyhives have up to a 25% chance to hold double Honeycomb.",
          },
          {
            id: "E52",
            tier: "niche",
            note: "Up to double Honeycomb from mobs spawned by lathered trees.",
          },
          {
            id: "E49",
            tier: "niche",
            note: "Honeyhives have up to a 5% chance to refill instantly.",
          },
          {
            id: "C45",
            tier: "niche",
            note: "Honeycomb-lathered trees pull mobs up to 10% faster.",
          },
          {
            id: "C67",
            tier: "niche",
            note: "Lathered trees have up to a 50% chance to attract a second mob.",
          },
        ],
      },
    ],
  },
  {
    slug: "farming",
    name: "Farming",
    shardSkill: "Farming",
    tagline: "Fortune, pests, visitors, and garden growth.",
    goals: [
      {
        id: "fortune",
        title: "Farming fortune",
        blurb:
          "Day and night shards are both always syphoned. Only the one that matches the sky is active. Pest fortune is a different stat from plot fortune.",
        picks: [
          {
            id: "C13",
            tier: "core",
            note: "Up to +25 Farming Fortune with no condition. First one to max.",
          },
          {
            id: "E31",
            tier: "core",
            note: "Up to +50 Farming Fortune during the day.",
          },
          {
            id: "E13",
            tier: "core",
            note: "Up to +50 Farming Fortune at night.",
          },
          {
            id: "U40",
            tier: "core",
            note: "Up to +30 Farming Fortune while the plot you are on has a pest.",
          },
          {
            id: "U19",
            tier: "core",
            note: "Up to +50 Farming Fortune against pests. This is the pest-kill stat, not crop fortune.",
          },
          {
            id: "L41",
            tier: "core",
            note: "Up to +10 Farming Fortune, shared with Mining and Foraging.",
          },
          {
            id: "L52",
            tier: "niche",
            note: "Counts as up to +10 toward the Greenhouse unique-crop bonus.",
          },
        ],
      },
      {
        id: "wisdom",
        title: "Farming XP",
        blurb: "Farming Wisdom only. Crop growth is a different goal.",
        picks: [
          {
            id: "E37",
            tier: "core",
            note: "Up to +5 Farming Wisdom.",
          },
          { id: "L7", tier: "amp", note: wisdom },
          { id: "L6", tier: "amp", note: tiamat },
        ],
      },
      {
        id: "pests",
        title: "Pests",
        blurb: "Spawn rate, overbloom, and the spray materials. Damage against pests is a combat shard.",
        picks: [
          {
            id: "U94",
            tier: "core",
            note: "Up to +10 Bonus Pest Chance.",
          },
          {
            id: "U100",
            tier: "core",
            note: "Pest spawn cooldown reduced by 0.5s.",
          },
          {
            id: "U10",
            tier: "core",
            note: "Up to +5 Overbloom on pests.",
          },
          {
            id: "R16",
            tier: "niche",
            note: "Up to +10 Overbloom toward rare crop drops.",
          },
          {
            id: "U91",
            tier: "niche",
            note: "Up to 10% chance a pest drops an extra Sprayonator material.",
          },
          {
            id: "U22",
            tier: "niche",
            note: "Up to +30% damage against pests.",
          },
        ],
      },
      {
        id: "visitors",
        title: "Garden visitors",
        blurb:
          "Speed and rarity first. The 'brings an item' shards are the visitor family. Queenly Echo raises that family, not visitor speed.",
        picks: [
          {
            id: "C25",
            tier: "core",
            note: "Visitors arrive up to 10% faster.",
          },
          {
            id: "R10",
            tier: "core",
            note: "Rare and above visitors are up to 10% more likely.",
          },
          {
            id: "R43",
            tier: "core",
            note: "Up to +10% copper from visitors.",
          },
          {
            id: "L35",
            tier: "amp",
            note: "Queenly Echo. Visitor attributes are up to 50% stronger. It does not speed arrivals.",
          },
          {
            id: "U52",
            tier: "niche",
            note: "Up to 2.5% chance a visitor brings a Honey Jar.",
          },
          {
            id: "U63",
            tier: "niche",
            note: "Up to 2.5% chance a visitor brings Compost.",
          },
          {
            id: "U67",
            tier: "niche",
            note: "Up to 2.5% chance a visitor brings Tasty Cheese.",
          },
          {
            id: "U70",
            tier: "niche",
            note: "Up to 2.5% chance a visitor brings Plant Matter.",
          },
          {
            id: "U88",
            tier: "niche",
            note: "Up to 2.5% chance a visitor brings Dung.",
          },
        ],
      },
      {
        id: "growth",
        title: "Growth and crops",
        blurb: "Crop growth, the composter, greenhouse speed, and the lottery procs.",
        picks: [
          {
            id: "C28",
            tier: "core",
            note: "Up to +10 Crop Growth in the Garden.",
          },
          {
            id: "U44",
            tier: "niche",
            note: "Composter works up to 10% faster.",
          },
          {
            id: "L57",
            tier: "niche",
            note: "Up to +1% growth speed in the Greenhouse.",
          },
          {
            id: "R84",
            tier: "niche",
            note: "Mutations have up to a 1% chance to re-mutate on the first harvest.",
          },
          {
            id: "U103",
            tier: "niche",
            note: "Up to a 0.01% chance of an Enchanted Crop. A lottery ticket, not a farm rate.",
          },
          {
            id: "L13",
            tier: "niche",
            note: "Up to a 0.1% chance of a Warty from Nether Wart.",
          },
        ],
      },
    ],
  },
  {
    slug: "fishing",
    name: "Fishing",
    shardSkill: "Fishing",
    tagline: "Sea creatures, fishing speed, double hook, and trophy fish.",
    goals: [
      {
        id: "scc",
        title: "Sea creature chance",
        blurb: "There is one universal Sea Creature Chance shard. Everything else is a side rate.",
        picks: [
          {
            id: "C14",
            tier: "core",
            note: "Up to +5 Sea Creature Chance. Max this before any other fishing shard.",
          },
          {
            id: "U32",
            tier: "niche",
            note: "Up to +2% chance the sea creature is corrupted. Crimson fishing, not SCC.",
          },
        ],
      },
      {
        id: "speed",
        title: "Fishing speed",
        blurb:
          "Water Hydra is always on. The island shards add another +30 on top when you are fishing there. They stack.",
        picks: [
          {
            id: "E17",
            tier: "core",
            note: "Up to +30 Fishing Speed everywhere.",
          },
          {
            id: "C38",
            tier: "core",
            note: "Up to +30 more Fishing Speed on fishing islands.",
          },
          {
            id: "C11",
            tier: "niche",
            note: "Up to +30 Fishing Speed on foraging islands. Galatea water.",
          },
          {
            id: "C41",
            tier: "niche",
            note: "Up to +30 Fishing Speed on mining islands.",
          },
        ],
      },
      {
        id: "hook",
        title: "Double hook",
        blurb: "Three legendaries, three island groups. None of them are global. Syphon the island you actually fish.",
        picks: [
          {
            id: "L47",
            tier: "core",
            note: "Up to +5 Double Hook Chance on fishing islands.",
          },
          {
            id: "L26",
            tier: "core",
            note: "Up to +5 Double Hook Chance on combat islands. This is the Crimson Isle hook.",
          },
          {
            id: "L5",
            tier: "core",
            note: "Up to +5 Double Hook Chance on foraging islands.",
          },
        ],
      },
      {
        id: "trophy",
        title: "Trophy and treasure",
        blurb: "Trophy Chance is the trophy-fish stat. Treasure Chance is a different roll, and Ghost Crab is the global one.",
        picks: [
          {
            id: "E14",
            tier: "core",
            note: "Up to +20 Trophy Chance.",
          },
          {
            id: "L38",
            tier: "core",
            note: "Up to +1 Treasure Chance, everywhere.",
          },
          {
            id: "C26",
            tier: "niche",
            note: "Up to +10 Trophy Chance in the Lotus Atoll only.",
          },
          {
            id: "U69",
            tier: "niche",
            note: "Up to +1 Treasure Chance in the Backwater Bayou.",
          },
          {
            id: "R74",
            tier: "niche",
            note: "Treasure catches are up to 10% more likely to be Great.",
          },
          {
            id: "E23",
            tier: "niche",
            note: "Treasure catches are up to 10% more likely to be Outstanding.",
          },
          {
            id: "U41",
            tier: "niche",
            note: "Trophy Frogs are up to 5% more likely to be Gold.",
          },
          {
            id: "R32",
            tier: "niche",
            note: "Trophy Frogs are up to 5% more likely to be Diamond.",
          },
        ],
      },
      {
        id: "wisdom",
        title: "Fishing XP",
        blurb: "Fishing Wisdom. Sea creature chance does not grant wisdom.",
        picks: [
          {
            id: "E20",
            tier: "core",
            note: "Up to +5 Fishing Wisdom.",
          },
          { id: "L7", tier: "amp", note: wisdom },
          { id: "L6", tier: "amp", note: tiamat },
        ],
      },
      {
        id: "chums",
        title: "Chums and bait",
        blurb: "Bucket attributes feed each other. Echo of Buckets raises that line, then Tiamat raises the echo.",
        picks: [
          {
            id: "C23",
            tier: "core",
            note: "Up to 50% chance to gain extra Chums.",
          },
          {
            id: "U56",
            tier: "core",
            note: "Chums give up to double when you dump them into a bucket.",
          },
          {
            id: "R92",
            tier: "amp",
            note: "Echo of Buckets. Bucket attributes are up to 20% stronger.",
          },
          { id: "L6", tier: "amp", note: tiamat },
          {
            id: "C32",
            tier: "niche",
            note: "Up to 10% chance to not consume bait.",
          },
        ],
      },
      {
        id: "bosses",
        title: "Sea creature bosses",
        blurb: "Tracking for the named hunts, plus magic find while you are on a fishing island.",
        picks: [
          {
            id: "U53",
            tier: "core",
            note: "Up to +5 Tracking toward the Yeti.",
          },
          {
            id: "U50",
            tier: "core",
            note: "Up to +5 Tracking toward Titanoboa.",
          },
          {
            id: "E47",
            tier: "niche",
            note: "Up to +5 Magic Find on fishing islands. Cinderbat is the same amount with no island check.",
          },
          {
            id: "U23",
            tier: "niche",
            note: "Up to +10 Tracking on Exploding Lily Pads.",
          },
          {
            id: "U72",
            tier: "niche",
            note: "Up to +5 Tracking toward Wiki Tiki.",
          },
          {
            id: "L21",
            tier: "amp",
            note: "Echo of Tracking. Tracker attributes are up to 20% stronger.",
          },
        ],
      },
    ],
  },
  {
    slug: "hunting",
    name: "Hunting",
    shardSkill: "Hunting",
    tagline: "Hunter fortune, charm chance, and how fast you actually catch.",
    goals: [
      {
        id: "fortune",
        title: "Hunter fortune",
        blurb:
          "David's Cloak is a different system: it gains hunter fortune from how many shards you have syphoned in total, up to +30 at 5,000. Cheap commons are cloak fuel. The shards below are the ones whose own effects you want.",
        picks: [
          {
            id: "L29",
            tier: "core",
            note: "Up to +10 Hunter Fortune from Hunter's Karma. The always-on hunting stat.",
          },
          {
            id: "R54",
            tier: "core",
            note: "Black Holes gain up to +10% Hunter Fortune.",
          },
          {
            id: "E32",
            tier: "amp",
            note: "Echo of Hunter. Hunter attributes, Karma included, are up to 20% stronger.",
          },
          { id: "L6", tier: "amp", note: tiamat },
          {
            id: "C35",
            tier: "core",
            note: "Up to +20 Hunter Fortune while the shard you are hunting is Common.",
          },
          {
            id: "U8",
            tier: "core",
            note: "Up to +20 Hunter Fortune against Uncommon shards.",
          },
          {
            id: "R8",
            tier: "core",
            note: "Up to +10 Hunter Fortune against Rare shards.",
          },
          {
            id: "E5",
            tier: "core",
            note: "Up to +10 Hunter Fortune against Epic shards. There is no legendary karma shard.",
          },
        ],
      },
      {
        id: "charm",
        title: "Charm chance",
        blurb: "Charm Chance is a small stat with a huge effect, because the base rate is tiny.",
        picks: [
          {
            id: "L11",
            tier: "core",
            note: "Up to +0.5 Charm Chance. The charm shard.",
          },
        ],
      },
      {
        id: "wisdom",
        title: "Hunting XP",
        blurb: "Hunting Wisdom. Fusing and syphoning also grant hunting XP on their own.",
        picks: [
          {
            id: "E35",
            tier: "core",
            note: "Up to +5 Hunting Wisdom.",
          },
          { id: "L7", tier: "amp", note: wisdom },
          { id: "L6", tier: "amp", note: tiamat },
        ],
      },
      {
        id: "capture",
        title: "Catch speed",
        blurb: "Black holes, lassos, traps, nets, and salts. These do not raise fortune. They shorten the catch.",
        picks: [
          {
            id: "R9",
            tier: "core",
            note: "Black Holes capture up to 50% faster.",
          },
          {
            id: "U21",
            tier: "core",
            note: "Huntaxes copy up to 10% more stats from the weapon stored in them.",
          },
          {
            id: "E7",
            tier: "core",
            note: "Salts last up to 10% longer.",
          },
          {
            id: "E9",
            tier: "niche",
            note: "Lassos drain stamina up to 20% faster.",
          },
          {
            id: "U11",
            tier: "niche",
            note: "Traps catch Forest shards up to 10% faster.",
          },
          {
            id: "U65",
            tier: "niche",
            note: "Traps catch Combat shards up to 10% faster.",
          },
          {
            id: "R53",
            tier: "niche",
            note: "Fishing nets gain up to +10 Pull.",
          },
        ],
      },
      {
        id: "fusion",
        title: "Fusion tools",
        blurb: "These are for crafting shards, not for stats. Chameleon cannot be syphoned at all.",
        picks: [
          {
            id: "L4",
            tier: "niche",
            note: "Fusing a Chameleon jumps you three IDs down that shard's line. It is not an attribute you level.",
          },
          {
            id: "R45",
            tier: "niche",
            note: "Up to 20% chance a reptile fusion returns double shards.",
          },
        ],
      },
    ],
  },
  {
    slug: "enchanting",
    name: "Enchanting",
    shardSkill: "Enchanting",
    tagline: "Enchanting wisdom, experiment books, and kill orbs.",
    goals: [
      {
        id: "wisdom",
        title: "Enchanting XP",
        blurb: "Only one shard is actually Enchanting Wisdom.",
        picks: [
          {
            id: "L12",
            tier: "core",
            note: "Up to +5 Enchanting Wisdom.",
          },
          { id: "L7", tier: "amp", note: wisdom },
          { id: "L6", tier: "amp", note: tiamat },
        ],
      },
      {
        id: "books",
        title: "Experiments",
        blurb: "Superpairs, not the enchanting table.",
        picks: [
          {
            id: "R15",
            tier: "core",
            note: "Up to +20% extra chance of a level 6 or higher book from Superpairs.",
          },
        ],
      },
      {
        id: "orbs",
        title: "Experience orbs",
        blurb: "The wiki files this under Enchanting. The orbs come from killing mobs, so the XP is combat XP.",
        picks: [
          {
            id: "C9",
            tier: "core",
            note: "Up to double experience orbs from mob kills.",
          },
        ],
      },
    ],
  },
  {
    slug: "taming",
    name: "Taming",
    shardSkill: "Taming",
    tagline: "Pet XP, Exp Share, and Fann's training.",
    goals: [
      {
        id: "wisdom",
        title: "Taming XP",
        blurb: "Taming Wisdom is the skill. Pet XP and Exp Share are how pets level, which is usually the thing you actually want.",
        picks: [
          {
            id: "L31",
            tier: "core",
            note: "Up to +5 Taming Wisdom.",
          },
          { id: "L7", tier: "amp", note: wisdom },
          { id: "L6", tier: "amp", note: tiamat },
        ],
      },
      {
        id: "pets",
        title: "Pet XP",
        blurb: "Exp Share and Fann are the two global pet-XP shards. Combat pet XP is separate.",
        picks: [
          {
            id: "E28",
            tier: "core",
            note: "Exp Share grants up to 10% more pet XP. One of the best pet shards in the game.",
          },
          {
            id: "C34",
            tier: "core",
            note: "Pets gain up to 20% more pet XP from Fann, the Pet Care trainer.",
          },
          {
            id: "R58",
            tier: "niche",
            note: "Pets gain up to 10% more XP from combat.",
          },
          {
            id: "U34",
            tier: "niche",
            note: "Kat finishes a pet upgrade up to 10% faster.",
          },
        ],
      },
      {
        id: "specific",
        title: "One pet only",
        blurb: "Dead stats unless that pet is out.",
        picks: [
          {
            id: "U39",
            tier: "niche",
            note: "Frog Pet gains up to +30 Strength.",
          },
          {
            id: "U45",
            tier: "niche",
            note: "Spider and Tarantula pets gain up to +20 Crit Damage.",
          },
          {
            id: "R77",
            tier: "niche",
            note: "Goblin Pet gains up to +10 Ore Fortune.",
          },
        ],
      },
    ],
  },
  {
    slug: "alchemy",
    name: "Alchemy",
    shardSkill: "Alchemy",
    tagline: "One seasonal shard. That is the whole skill.",
    goals: [
      {
        id: "witch",
        title: "Year of the Witch",
        blurb: "Alchemy has a single attribute, and it only does something during the Year of the Witch event.",
        picks: [
          {
            id: "U17",
            tier: "niche",
            note: "Up to +10% ingredient drops during Year of the Witch. Ignore it the rest of the year.",
          },
        ],
      },
    ],
  },
  {
    slug: "global",
    name: "Global",
    shardSkill: "Global",
    tagline: "Echoes, essence, magic find, and the stats that follow you everywhere.",
    goals: [
      {
        id: "echoes",
        title: "Echo chain",
        blurb:
          "Syphon the stat, then the echo that names that stat, then Tiamat. Tiamat does nothing by itself except make other echoes stronger. Starborn only helps the Elemental family. Molthorn only helps Unlimited attributes.",
        picks: [
          { id: "L6", tier: "amp", note: tiamat },
          { id: "L7", tier: "amp", note: wisdom },
          {
            id: "E10",
            tier: "amp",
            note: "Atomized attributes: mithril, gemstone, and glacite powder, plus whispers.",
          },
          {
            id: "E30",
            tier: "amp",
            note: "Ruler attributes: the +30% damage shards for each mob family.",
          },
          {
            id: "E6",
            tier: "amp",
            note: "Resistance attributes: the defense-against-a-family shards.",
          },
          {
            id: "E22",
            tier: "amp",
            note: "Essence attributes. Every '+% essence' shard.",
          },
          {
            id: "R61",
            tier: "amp",
            note: "Sharpening attributes. Fig, Mangrove, and Helix sweep.",
          },
          {
            id: "E32",
            tier: "amp",
            note: "Hunter attributes. Karma and the black-hole fortune line.",
          },
          {
            id: "R92",
            tier: "amp",
            note: "Bucket attributes. Chums.",
          },
          {
            id: "U9",
            tier: "amp",
            note: "Box attributes. Mossy Box, Catacombs Box, Kuudra's Box, and the other boxes.",
          },
          {
            id: "L21",
            tier: "amp",
            note: "Tracker attributes. Yeti, Titanoboa, burrows, and the other tracking shards.",
          },
          {
            id: "L35",
            tier: "amp",
            note: "Visitor attributes. Not visitor speed.",
          },
          {
            id: "L44",
            tier: "amp",
            note: "Other Elemental-family shards gain up to 20%. Health, intelligence, and strength lines.",
          },
          {
            id: "L42",
            tier: "amp",
            note: "Unlimited attributes gain up to 50%. Strength, crit damage, defense, intelligence.",
          },
        ],
      },
      {
        id: "stats",
        title: "Stats worth a legendary",
        blurb: "These are the global shards that still matter after your gear is real. Flat health and strength elementals are at the bottom of this page on purpose.",
        picks: [
          {
            id: "L28",
            tier: "core",
            note: "Up to +5 Magic Find, always.",
          },
          {
            id: "L25",
            tier: "core",
            note: "Up to +10 Tuning Points.",
          },
          {
            id: "R34",
            tier: "core",
            note: "Up to +10 Accessory Bag slots.",
          },
          {
            id: "L18",
            tier: "core",
            note: "RNG Meter fills up to 10% faster.",
          },
          {
            id: "L15",
            tier: "niche",
            note: "Up to +10 Vitality.",
          },
          {
            id: "L41",
            tier: "core",
            note: "Up to +10 Mining, Farming, and Foraging Fortune together.",
          },
          {
            id: "U18",
            tier: "niche",
            note: "Up to +10 Speed.",
          },
          {
            id: "E16",
            tier: "niche",
            note: "Sacks hold up to 10% more.",
          },
          {
            id: "E34",
            tier: "niche",
            note: "Mana regeneration up to 10% faster.",
          },
          {
            id: "L60",
            tier: "niche",
            note: "Up to +5 Cold Resistance for the Glacite Mineshafts.",
          },
        ],
      },
      {
        id: "essence",
        title: "Essence",
        blurb: "Each essence is its own attribute. Echo of Essence covers the whole list. Syphon the one your grind spends.",
        picks: [
          { id: "R27", tier: "core", note: "Up to +10% Undead Essence. Revenant." },
          { id: "R24", tier: "core", note: "Up to +10% Spider Essence. Tarantula." },
          { id: "R26", tier: "core", note: "Up to +10% Crimson Essence. Blaze and Kuudra." },
          { id: "R60", tier: "core", note: "Up to +10% Wither Essence." },
          { id: "R57", tier: "core", note: "Up to +10% Dragon Essence." },
          { id: "R6", tier: "niche", note: "Up to +10% Ice Essence." },
          { id: "R49", tier: "niche", note: "Up to +10% Forest Essence." },
          { id: "R86", tier: "niche", note: "Up to +10% Fossil Essence." },
          {
            id: "E22",
            tier: "amp",
            note: "Echo of Essence. All of the above, up to +20%.",
          },
          { id: "L6", tier: "amp", note: tiamat },
        ],
      },
      {
        id: "elementals",
        title: "Elemental lines",
        blurb:
          "Each rarity is a separate attribute, so the five health shards stack, and the same is true for intelligence and strength. A full line is +100 Health, +50 Intelligence, or +50 Strength. That is filler next to a percent damage shard. Echo of Elemental raises the family.",
        picks: [
          { id: "L1", tier: "niche", note: "Health line, legendary. +20, stacks with Grove, Bramble, Sylvan, and Terra." },
          { id: "E1", tier: "niche", note: "Health line, epic. Another +20." },
          { id: "R1", tier: "niche", note: "Health line, rare." },
          { id: "U1", tier: "niche", note: "Health line, uncommon." },
          { id: "C1", tier: "niche", note: "Health line, common." },
          { id: "L2", tier: "niche", note: "Intelligence line, legendary. +10, stacks down the line." },
          { id: "E2", tier: "niche", note: "Intelligence line, epic." },
          { id: "R2", tier: "niche", note: "Intelligence line, rare." },
          { id: "U2", tier: "niche", note: "Intelligence line, uncommon." },
          { id: "C2", tier: "niche", note: "Intelligence line, common." },
          { id: "L3", tier: "niche", note: "Strength line, legendary. +10, stacks down the line." },
          { id: "E3", tier: "niche", note: "Strength line, epic." },
          { id: "R3", tier: "niche", note: "Strength line, rare." },
          { id: "U3", tier: "niche", note: "Strength line, uncommon." },
          { id: "C3", tier: "niche", note: "Strength line, common." },
          {
            id: "L44",
            tier: "amp",
            note: "Echo of Elemental. Other elemental shards are up to 20% stronger.",
          },
        ],
      },
    ],
  },
];

export function guideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}
