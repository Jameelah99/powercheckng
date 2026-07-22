import { o as __toESM } from "../_runtime.mjs";
import { x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as UserProfile$1 } from "./uiComponents-D4xEMHL2.mjs";
import { t as Button } from "./button-kArZv4Hk.mjs";
import { X as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-security-THhDIY2p.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function AccountSecurity() {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl p-8 space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: "gap-2",
					onClick: () => navigate({ to: "/account/profile" }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to Account"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold",
					children: "Security Center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Manage your password, email addresses, authentication methods and connected accounts."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserProfile$1, { routing: "hash" })
			]
		})
	});
}
//#endregion
export { AccountSecurity as component };
