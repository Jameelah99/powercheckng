import { o as __toESM } from "../_runtime.mjs";
import { x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { a as UserProfile$1 } from "./uiComponents-D4xEMHL2.mjs";
import { t as AccountPage } from "./AccountPage-DvECMLrN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-DUtb0WoV.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function ProfilePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountPage, {
		title: "Personal & Security",
		description: "Manage your profile, security settings and connected accounts.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-3xl border bg-card shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserProfile$1, { routing: "hash" })
		})
	});
}
//#endregion
export { ProfilePage as component };
