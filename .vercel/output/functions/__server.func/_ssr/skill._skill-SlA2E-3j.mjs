import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Search } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-rO5MSLuK.mjs";
import { c as guides, d as shards, i as Shell, l as rarityLabel, n as RARITY_RANK, o as cn, s as guideBySlug, u as shardById } from "./shell-CqVe03WQ.mjs";
import { t as ShardCard } from "./shard-card-Zu5V-Ldi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skill._skill-SlA2E-3j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SLAYERS = [
	{
		name: "Revenant",
		family: "Undead",
		note: "Zombie slayer. Riftstalker vampires use this same line."
	},
	{
		name: "Tarantula",
		family: "Arthropod",
		note: "Spider slayer."
	},
	{
		name: "Sven",
		family: "Animal",
		note: "Wolf slayer."
	},
	{
		name: "Voidgloom",
		family: "Ender",
		note: "Enderman slayer."
	},
	{
		name: "Inferno",
		family: "Infernal",
		note: "Blaze slayer. Magmatic is the Crimson Isle around it, not the boss."
	}
];
var EXTRA = [
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
	"Critter"
];
function roleOf(shard, family) {
	const blob = `${shard.attribute} ${shard.effect}`;
	if (!new RegExp(`\\b${family}\\b`, "i").test(blob)) return null;
	const attr = shard.attribute.toLowerCase();
	const effect = shard.effect.toLowerCase();
	if (attr.includes("ruler") || effect.includes("more damage") || effect.includes("increase damage")) return "damage";
	if (attr.includes("resistance") || effect.includes("defense")) return "defense";
	if (attr.includes("fortune") || effect.includes("magic find")) return "magic";
	return "other";
}
function rows(family, role) {
	return shards.filter((s) => roleOf(s, family) === role);
}
function Cell({ items }) {
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-faint",
		children: "None"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2",
		children: items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: s.shard
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-faint",
					children: [
						" ",
						s.id,
						" · ",
						rarityLabel(s.rarity)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 block text-muted",
					children: s.effect
				})
			]
		}, s.id))
	});
}
function FamilyBlock({ title, note, family }) {
	const damage = rows(family, "damage");
	const magic = rows(family, "magic");
	const defense = rows(family, "defense");
	const other = rows(family, "other");
	if (damage.length + magic.length + defense.length + other.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-t border-line py-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl text-fg",
				children: title
			}),
			note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-medium tracking-widest text-gold",
						children: "DAMAGE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { items: damage })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-medium tracking-widest text-gold",
						children: "MAGIC FIND"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { items: magic })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-medium tracking-widest text-gold",
						children: "DEFENSE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { items: defense })] })
				]
			}),
			other.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-medium tracking-widest text-muted",
					children: "ALSO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { items: other })]
			})
		]
	});
}
function FamilyBoard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-10 rounded-card border border-line bg-raised p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-gold",
				children: "BY MOB"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-3xl text-fg",
				children: "Slayer families"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted",
				children: [
					"Ruler is damage. Fortune is magic find on that family only, and it caps at the same +5 as Cinderbat's global magic find. Resistance is defense. Caiman (",
					shardById.E30?.shard,
					") raises every Ruler. Alligator (",
					shardById.E6?.shard,
					") raises every Resistance."
				]
			}),
			SLAYERS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyBlock, {
				title: s.name,
				note: s.note,
				family: s.family
			}, s.name)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "mt-4 border-t border-line pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "min-h-11 cursor-pointer text-sm text-gold",
					children: "Other mob families"
				}), EXTRA.map((family) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyBlock, {
					title: family,
					family
				}, family))]
			})
		]
	});
}
var tierOrder = [
	"core",
	"amp",
	"niche"
];
var tierHeading = {
	core: "Syphon these",
	amp: "Then the multiplier",
	niche: "Only if this is your grind"
};
function SkillPage() {
	const { skill } = Route.useParams();
	const guide = guideBySlug(skill);
	const [q, setQ] = (0, import_react.useState)("");
	const query = q.trim().toLowerCase();
	const rest = (0, import_react.useMemo)(() => {
		if (!guide) return [];
		const used = new Set(guide.goals.flatMap((goal) => goal.picks.map((pick) => pick.id)));
		return shards.filter((shard) => shard.skill === guide.shardSkill && !used.has(shard.id)).filter((shard) => {
			if (!query) return true;
			return `${shard.id} ${shard.shard} ${shard.attribute} ${shard.effect}`.toLowerCase().includes(query);
		}).sort((a, b) => RARITY_RANK[a.rarity] - RARITY_RANK[b.rarity] || a.id.localeCompare(b.id));
	}, [guide, query]);
	if (!guide) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl",
		children: "That skill isn't in the guide."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: "mt-4 inline-flex min-h-11 items-center text-gold",
		children: "Back to all skills"
	})] });
	const index = guides.findIndex((item) => item.slug === guide.slug);
	function hit(id, note) {
		if (!query) return true;
		const shard = shardById[id];
		if (!shard) return false;
		return `${shard.id} ${shard.shard} ${shard.attribute} ${shard.effect} ${note}`.toLowerCase().includes(query);
	}
	const subnav = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2",
			children: guide.goals.map((goal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `#${goal.id}`,
				className: "inline-flex min-h-11 shrink-0 items-center px-3 text-sm text-muted",
				children: goal.title
			}, goal.id))
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		subnav,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-medium tracking-widest text-gold",
				children: [
					String(index + 1).padStart(2, "0"),
					" / ",
					guide.name.toUpperCase()
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl leading-none",
				children: guide.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-lg text-muted",
				children: guide.tagline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm text-faint",
				children: "Order inside a stat is the syphon order. Multipliers do nothing until the stat they raise is already on you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "relative mt-6 block max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Filter this skill"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-faint" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (event) => setQ(event.target.value),
						placeholder: `Filter ${guide.name.toLowerCase()} shards`,
						className: "min-h-11 w-full rounded-card border border-line bg-raised pr-3 pl-10 placeholder:text-faint"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-14",
				children: guide.goals.map((goal) => {
					const visible = goal.picks.filter((pick) => hit(pick.id, pick.note));
					if (visible.length === 0) return null;
					let coreRank = 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: goal.id,
						className: "scroll-mt-40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl",
								children: goal.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-sm text-muted",
								children: goal.blurb
							}),
							tierOrder.map((tier) => {
								const picks = visible.filter((pick) => pick.tier === tier);
								if (picks.length === 0) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: cn("text-xs font-medium tracking-widest", tier === "amp" ? "text-gold" : tier === "core" ? "text-core" : "text-faint"),
										children: tierHeading[tier]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 space-y-3",
										children: picks.map((pick) => {
											const rank = tier === "core" ? ++coreRank : void 0;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShardCard, {
												id: pick.id,
												note: pick.note,
												tier: pick.tier,
												rank
											}) }, pick.id);
										})
									})]
								}, tier);
							}),
							guide.slug === "combat" && goal.id === "slayer" && !query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FamilyBoard, {})
						]
					}, goal.id);
				})
			}),
			rest.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14 border-t border-line pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl",
						children: ["Everything else filed under ", guide.name]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: "Still real attributes. They didn't win a stat above. Open one if the effect is the thing you came for."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: rest.map((shard) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShardCard, { id: shard.id }) }, shard.id))
					})
				]
			})
		]
	});
}
//#endregion
export { SkillPage as component };
