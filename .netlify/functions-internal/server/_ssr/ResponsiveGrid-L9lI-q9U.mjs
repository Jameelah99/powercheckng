import { o as __toESM } from "../_runtime.mjs";
import { S as require_react, x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { t as cn } from "./geoUtils-BMyem_HF.mjs";
require_react();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var gridColumns = {
	1: "grid-cols-1",
	2: "grid-cols-1 md:grid-cols-2",
	3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
	4: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
};
function ResponsiveGrid({ columns = 2, className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid gap-6", gridColumns[columns], className),
		...props,
		children
	});
}
//#endregion
export { ResponsiveGrid as t };
