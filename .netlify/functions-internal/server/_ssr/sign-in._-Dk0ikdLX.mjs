import { o as __toESM } from "../_runtime.mjs";
import { x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { r as SignIn$1 } from "./uiComponents-D4xEMHL2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sign-in._-Dk0ikdLX.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "min-h-screen grid-bg flex items-center justify-center p-6",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignIn$1, {
		routing: "path",
		path: "/sign-in",
		signUpUrl: "/sign-up",
		forceRedirectUrl: "/dashboard"
	})
});
//#endregion
export { SplitComponent as component };
