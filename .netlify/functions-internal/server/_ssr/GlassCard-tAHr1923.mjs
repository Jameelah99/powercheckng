import { o as __toESM } from "../_runtime.mjs";
import { x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { t as cn } from "./geoUtils-BMyem_HF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GlassCard-tAHr1923.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function GlassCard({ children, className, variant = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(variant === "strong" ? "glass-strong" : "glass", "rounded-2xl p-6", className),
		...props,
		children
	});
}
//#endregion
export { GlassCard as t };
