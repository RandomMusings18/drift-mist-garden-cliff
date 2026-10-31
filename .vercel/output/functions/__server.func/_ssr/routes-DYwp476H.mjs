import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ArrowRight, o as Search } from "../_libs/lucide-react.mjs";
import { c as guides, d as shards, f as skillIcons, i as Shell, l as rarityLabel, r as SHARDS_TO_MAX, t as HUNTING_LEVEL } from "./shell-CqVe03WQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DYwp476H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var jumps = [
	{
		skill: "mining",
		hash: "hotm",
		label: "HOTM XP",
		detail: "Treasure Hoarder and commissions"
	},
	{
		skill: "mining",
		hash: "fortune",
		label: "Mining fortune",
		detail: "Flitter, then the ore line"
	},
	{
		skill: "combat",
		hash: "xp",
		label: "Combat XP",
		detail: "Wisdom plus kill orbs"
	},
	{
		skill: "combat",
		hash: "slayer",
		label: "Slayer",
		detail: "Quest progress, then the family"
	},
	{
		skill: "foraging",
		hash: "hotf",
		label: "HOTF XP",
		detail: "Ember, not foraging wisdom"
	},
	{
		skill: "fishing",
		hash: "scc",
		label: "Sea creatures",
		detail: "Bogged, then fishing speed"
	}
];
var rarities = [
	"COMMON",
	"UNCOMMON",
	"RARE",
	"EPIC",
	"LEGENDARY"
];
function Home() {
	const navigate = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	const cores = guides.reduce((sum, guide) => sum + guide.goals.reduce((n, goal) => n + goal.picks.filter((p) => p.tier === "core").length, 0), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-widest text-gold",
			children: "HYPIXEL SKYBLOCK"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 max-w-3xl font-display text-5xl leading-none text-fg sm:text-6xl",
			children: "The shards worth syphoning."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-lg text-muted",
			children: "Every attribute you syphon stays on. This is the short list for each skill, split by the stat you are actually grinding: HOTM XP, powder, fortune, combat, slayer, Heart of the Forest, sea creatures, and the echoes that raise them."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-6 flex max-w-xl flex-col gap-2 sm:flex-row",
			onSubmit: (event) => {
				event.preventDefault();
				navigate({
					to: "/catalog",
					search: {
						q: q.trim(),
						skill: ""
					}
				});
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "relative min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Search shards"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-faint" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (event) => setQ(event.target.value),
						placeholder: "Search fortune, HOTM, slayer, sweep...",
						className: "min-h-11 w-full rounded-card border border-line bg-raised pr-3 pl-10 text-fg placeholder:text-faint"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "min-h-11 rounded-card bg-gold px-5 font-medium text-ink",
				children: "Search"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "mt-8 grid grid-cols-3 gap-3 border-y border-line py-4 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-faint",
					children: "Shards"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-display text-2xl text-fg",
					children: shards.length
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-faint",
					children: "Skills"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-display text-2xl text-fg",
					children: guides.length
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-faint",
					children: "Syphon first"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-display text-2xl text-fg",
					children: cores
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-10 font-display text-3xl",
			children: "Start with the grind"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: jumps.map((jump) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/skill/$skill",
				params: { skill: jump.skill },
				hash: jump.hash,
				className: "flex min-h-11 items-center justify-between gap-3 rounded-card border border-line bg-surface px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-fg",
					children: jump.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: jump.detail
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "size-4 shrink-0 text-gold",
					"aria-hidden": "true"
				})]
			}) }, jump.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-12 font-display text-3xl",
			children: "By skill"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 grid gap-3 sm:grid-cols-2",
			children: guides.map((guide) => {
				const Icon = skillIcons[guide.slug];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/skill/$skill",
					params: { skill: guide.slug },
					className: "block h-full rounded-card border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4 text-gold",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl text-fg",
								children: guide.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-muted",
							children: guide.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-3 flex flex-wrap gap-2",
							children: guide.goals.map((goal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-line px-2 py-1 text-xs text-muted",
								children: goal.title
							}, goal.id))
						})
					]
				}) }, guide.slug);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12 grid gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "How a shard becomes a stat"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-4 space-y-4 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg text-fg",
						children: "1. You don't equip it."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block",
						children: "Syphon copies into the attribute. Level I through X stays on your profile, all the time. There is no loadout to swap."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg text-fg",
						children: "2. Rarity is the cost, not the power."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block",
						children: "A common can be the best shard in a skill. Legendary just means fewer copies to max, and a higher hunting level before you can syphon it."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg text-fg",
						children: "3. Echoes go last."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block",
						children: "Wyvern raises wisdom. Caiman raises ruler damage. Iguana raises powder. Tiamat raises those echoes. Syphon the stat before the multiplier."
					})] })
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Copies to max"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "mt-4 w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-faint",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 font-medium",
								children: "Rarity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 font-medium",
								children: "To level X"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 font-medium",
								children: "Hunting"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rarities.map((rarity) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-fg",
							children: rarityLabel(rarity)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2",
							children: SHARDS_TO_MAX[rarity]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2",
							children: HUNTING_LEVEL[rarity] === 0 ? "None" : HUNTING_LEVEL[rarity]
						})
					]
				}, rarity)) })]
			})] })]
		})
	] });
}
//#endregion
export { Home as component };
