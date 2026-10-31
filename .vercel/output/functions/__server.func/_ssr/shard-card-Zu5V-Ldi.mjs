import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Bookmark, p as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as UNSYPHONABLE, l as rarityLabel, o as cn, p as usePins, r as SHARDS_TO_MAX, t as HUNTING_LEVEL, u as shardById } from "./shell-CqVe03WQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shard-card-Zu5V-Ldi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var bar = {
	COMMON: "bg-rarity-common",
	UNCOMMON: "bg-rarity-uncommon",
	RARE: "bg-rarity-rare",
	EPIC: "bg-rarity-epic",
	LEGENDARY: "bg-rarity-legendary"
};
var rarityText = {
	COMMON: "text-rarity-common",
	UNCOMMON: "text-rarity-uncommon",
	RARE: "text-rarity-rare",
	EPIC: "text-rarity-epic",
	LEGENDARY: "text-rarity-legendary"
};
var tierLabel = {
	core: "Syphon",
	amp: "Multiplier",
	niche: "Situational"
};
var tierClass = {
	core: "text-core",
	amp: "text-gold",
	niche: "text-muted"
};
function ShardCard({ id, note, tier, rank }) {
	const shard = shardById[id];
	const pinned = usePins((s) => s.ids.includes(id));
	const toggle = usePins((s) => s.toggle);
	const [open, setOpen] = (0, import_react.useState)(false);
	if (!shard) return null;
	const locked = UNSYPHONABLE.has(shard.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex overflow-hidden rounded-card border border-line bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("w-1.5 shrink-0", bar[shard.rarity]) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-xs",
								children: [
									rank != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm text-gold",
										children: String(rank).padStart(2, "0")
									}),
									tier && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("font-medium tracking-wide", tierClass[tier]),
										children: tierLabel[tier]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("font-medium", rarityText[shard.rarity]),
										children: rarityLabel(shard.rarity)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-faint",
										children: shard.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-faint",
										children: shard.skill
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl leading-tight text-fg",
								children: shard.shard
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: shard.attribute
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": pinned,
						onClick: () => toggle(shard.id),
						className: cn("inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-card border px-3 text-sm", pinned ? "border-gold bg-gold text-ink" : "border-line bg-raised text-fg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
							className: "size-4",
							"aria-hidden": "true"
						}), pinned ? "Tracked" : "Track"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base text-fg",
					children: shard.effect
				}),
				note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: note
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap items-center gap-2 text-xs text-faint",
					children: [locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-line px-2 py-1",
						children: "Cannot be syphoned"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full border border-line px-2 py-1",
						children: [SHARDS_TO_MAX[shard.rarity], " copies to max"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full border border-line px-2 py-1",
						children: ["Hunting ", HUNTING_LEVEL[shard.rarity]]
					})] }), shard.family.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-line px-2 py-1",
						children: shard.family.join(", ")
					})]
				}),
				shard.how.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						className: "inline-flex min-h-11 items-center gap-1 text-sm text-gold",
						children: ["Where to get it", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform", open && "rotate-180") })]
					}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-1 space-y-1 text-sm text-muted",
						children: shard.how.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
					})]
				})
			]
		})]
	});
}
//#endregion
export { ShardCard as t };
