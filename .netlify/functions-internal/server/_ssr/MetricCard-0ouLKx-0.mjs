import { o as __toESM } from "../_runtime.mjs";
import { x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { t as GlassCard } from "./GlassCard-tAHr1923.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MetricCard-0ouLKx-0.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function MetricCard({ title, value, icon: Icon, subtitle, footer, badge, action, valueClassName, className, iconSize = "md", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
		className: `p-4 sm:p-5 h-full ${className ?? ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: compact ? "space-y-3" : "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: iconSize === "sm" ? "h-5 w-5 shrink-0 text-primary" : "h-8 w-8 shrink-0 text-primary sm:h-10 sm:w-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
							children: title
						}), badge] })]
					}), action]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `${compact ? "text-lg font-bold leading-none sm:text-xl" : "text-xl font-bold leading-none sm:text-2xl"} ${valueClassName ?? ""}`,
					children: value
				}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[13px] leading-6 text-muted-foreground sm:text-sm lg:text-base",
					children: subtitle
				})] }),
				footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t pt-3",
					children: footer
				})
			]
		})
	});
}
//#endregion
export { MetricCard as t };
