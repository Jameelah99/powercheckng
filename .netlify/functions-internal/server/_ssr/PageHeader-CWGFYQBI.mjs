import { o as __toESM } from "../_runtime.mjs";
import { x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-CWGFYQBI.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function PageHeader({ title, description, action, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8 shrink-0 text-primary sm:h-10 sm:w-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl",
					children: title
				})]
			}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-3xl text-[13px] leading-6 text-muted-foreground sm:text-sm lg:text-base",
				children: description
			})]
		}), action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full lg:w-auto",
			children: action
		})]
	});
}
//#endregion
export { PageHeader as t };
