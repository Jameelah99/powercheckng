import { o as __toESM } from "../_runtime.mjs";
import { x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeader-T1GRZ5JQ.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function SectionHeader({ title, description, icon: Icon, badge, action, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [
				badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-primary",
					children: badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-background/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold leading-tight sm:text-2xl",
						children: title
					})]
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-3xl text-[13px] leading-6 text-muted-foreground sm:text-sm lg:text-base",
					children: description
				})
			]
		}), action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full sm:w-auto",
			children: action
		})]
	});
}
//#endregion
export { SectionHeader as t };
