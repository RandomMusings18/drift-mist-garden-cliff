import { C as require_jsx_runtime, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1 } from "./router-rO5MSLuK.mjs";
import { c as guides, d as shards, i as Shell, n as RARITY_RANK } from "./shell-CqVe03WQ.mjs";
import { t as ShardCard } from "./shard-card-Zu5V-Ldi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-i0zKXo_a.js
var import_jsx_runtime = require_jsx_runtime();
function CatalogPage() {
	const search = Route$1.useSearch();
	const navigate = useNavigate();
	function update(next) {
		navigate({
			to: "/catalog",
			search: {
				...search,
				...next
			},
			replace: true
		});
	}
	const query = search.q.trim().toLowerCase();
	const filtered = shards.filter((shard) => {
		if (search.skill && shard.skill !== search.skill) return false;
		if (!query) return true;
		return `${shard.id} ${shard.shard} ${shard.attribute} ${shard.effect} ${shard.skill} ${shard.family.join(" ")} ${shard.how.join(" ")}`.toLowerCase().includes(query);
	});
	const groups = guides.map((guide) => ({
		name: guide.name,
		items: filtered.filter((shard) => shard.skill === guide.shardSkill).sort((a, b) => RARITY_RANK[a.rarity] - RARITY_RANK[b.rarity] || a.id.localeCompare(b.id))
	})).filter((group) => group.items.length > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-widest text-gold",
			children: "FULL LIST"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "mt-2 font-display text-5xl leading-none",
			children: [
				"All ",
				shards.length,
				" shards"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-muted",
			children: "The skill pages are the short list. This is every attribute, including the ones that are not worth a syphon unless you already know why."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-col gap-2 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Search"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: search.q,
					onChange: (event) => update({ q: event.target.value }),
					placeholder: "Name, effect, family, id",
					className: "min-h-11 w-full rounded-card border border-line bg-raised px-3 text-fg placeholder:text-faint"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Skill"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				value: search.skill,
				onChange: (event) => update({ skill: event.target.value }),
				className: "min-h-11 w-full rounded-card border border-line bg-raised px-3 text-fg sm:w-48",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: "Every skill"
				}), guides.map((guide) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: guide.shardSkill,
					children: guide.name
				}, guide.slug))]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm text-faint",
			children: [filtered.length, " shown"]
		}),
		groups.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-muted",
			children: "Nothing matches. Try fortune, wisdom, or a shard id like C37."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 space-y-10",
			children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-3xl",
				children: [group.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 text-base text-faint",
					children: group.items.length
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-3",
				children: group.items.map((shard) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShardCard, { id: shard.id }) }, shard.id))
			})] }, group.name))
		})
	] });
}
//#endregion
export { CatalogPage as component };
