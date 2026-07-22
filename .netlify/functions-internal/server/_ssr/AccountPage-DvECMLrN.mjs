import { o as __toESM } from "../_runtime.mjs";
import { x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { u as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Monitor, i as UserRound, l as SlidersHorizontal } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AccountPage-DvECMLrN.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var items = [
	{
		title: "Personal & Security",
		to: "/account/profile",
		icon: UserRound
	},
	{
		title: "Sessions",
		to: "/account/sessions",
		icon: Monitor
	},
	{
		title: "Preferences",
		to: "/account/preferences",
		icon: SlidersHorizontal
	}
];
function AccountNavigation() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "mb-6 flex w-full flex-wrap gap-2 rounded-2xl border bg-card p-2 shadow-sm sm:mb-8 sm:w-fit",
		children: items.map((item) => {
			const Icon = item.icon;
			const active = pathname === item.to;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: item.to,
				className: ["flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium whitespace-nowrap transition-all sm:flex-none sm:px-5", active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-accent hover:text-foreground"].join(" "),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), item.title]
			}, item.to);
		})
	});
}
function AccountPage({ title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-5xl space-y-6 px-4 sm:space-y-8 sm:px-0 ",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold tracking-tight sm:text-3xl",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-sm text-muted-foreground sm:text-base",
				children: description
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountNavigation, {}),
			children
		]
	});
}
//#endregion
export { AccountPage as t };
