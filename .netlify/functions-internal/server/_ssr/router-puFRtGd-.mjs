import { o as __toESM } from "../_runtime.mjs";
import { u as QueryClient, x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { _ as createRootRouteWithContext, c as HeadContent, f as createRouter, g as createFileRoute, h as lazyRouteComponent, p as Outlet, s as Scripts, v as Link, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ClerkProvider } from "./ClerkProvider-DRdE6Pt9.mjs";
import { c as createServerFn } from "./createServerFn-C4XsUSXf.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DjSfRLtu.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as dark } from "../_libs/clerk__ui.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-puFRtGd-.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var styles_default = "/assets/styles-BHEbOvpG.css";
var getClerkPublishableKey = createServerFn({ method: "GET" }).handler(createSsrRpc("a17b49304000da8e4a70719c2f0151f5fc6f3ed8954dd31c2617aa7382ad9fcd"));
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center grid-bg px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass max-w-md text-center rounded-2xl p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "That circuit isn't wired up. Head back to base."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 glow-primary",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center grid-bg px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass max-w-md text-center rounded-2xl p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something tripped the breaker. Try again or head home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 glow-primary",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent/20",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$16 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "theme-color",
				content: "#00C853"
			},
			{ title: "PowerCheckNG — Power, in your hands." },
			{
				name: "description",
				content: "Track outages, and monitor your consumption in real-time -all in one place."
			},
			{
				property: "og:title",
				content: "PowerCheckNG"
			},
			{
				property: "og:description",
				content: "Track outages, and monitor your consumption in real-time -all in one place."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	loader: () => getClerkPublishableKey(),
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "dark",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$16.useRouteContext();
	const { publishableKey } = Route$16.useLoaderData();
	const tree = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-center",
			richColors: true,
			duration: 5e3,
			closeButton: true
		})]
	});
	if (!publishableKey) return tree;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClerkProvider, {
		publishableKey,
		appearance: {
			theme: dark,
			variables: {
				colorPrimary: "#00C853",
				borderRadius: "0.9rem"
			},
			options: { unsafe_disableDevelopmentModeWarnings: true }
		},
		children: tree
	});
}
var $$splitComponentImporter$15 = () => import("./routes-BBZc_tF9.mjs");
var Route$15 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "PowerCheckNG — Power, in your hands." },
		{
			name: "description",
			content: "Track outages, and monitor your consumption in real-time -all in one place."
		},
		{
			property: "og:title",
			content: "PowerCheckNG — Power, in your hands."
		},
		{
			property: "og:description",
			content: "Track outages, and monitor your consumption in real-time -all in one place."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("../_app-BebRz_4i.mjs");
var Route$14 = createFileRoute("/_app")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./account-security-THhDIY2p.mjs");
var Route$13 = createFileRoute("/account-security")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./account-D0xs5A5U.mjs");
var Route$12 = createFileRoute("/_app/account")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("../_app.backup-CvVZfKhG.mjs");
var Route$11 = createFileRoute("/_app/backup")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("../_app.dashboard-BdL4PvQO.mjs");
var Route$10 = createFileRoute("/_app/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — PowerCheckNG" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("../_app.energy-BYNo8_hC.mjs");
var Route$9 = createFileRoute("/_app/energy")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("../_app.history-CkZNHIsl.mjs");
var Route$8 = createFileRoute("/_app/history")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("../_app.insights-Cw2zBozw.mjs");
var Route$7 = createFileRoute("/_app/insights")({
	head: () => ({ meta: [{ title: "Smart Insights — PowerCheckNG" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("../_app.outages-o84F5fdE.mjs");
var Route$6 = createFileRoute("/_app/outages")({
	head: () => ({ meta: [{ title: "Outage Tracker — PowerCheckNG" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./sign-in._-Dk0ikdLX.mjs");
var Route$5 = createFileRoute("/sign-in/$")({
	head: () => ({ meta: [{ title: "Sign in — PowerCheckNG" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./sign-up._-nbpyI6JV.mjs");
var Route$4 = createFileRoute("/sign-up/$")({
	head: () => ({ meta: [{ title: "Create account — PowerCheckNG" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./account-DXeCVV5n.mjs");
var Route$3 = createFileRoute("/_app/account/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./preferences-_MJs6Hk4.mjs");
var Route$2 = createFileRoute("/_app/account/preferences")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./profile-DUtb0WoV.mjs");
var Route$1 = createFileRoute("/_app/account/profile")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./sessions-V5cqUzT5.mjs");
var Route = createFileRoute("/_app/account/sessions")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$15.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$16
});
var AppRoute = Route$14.update({
	id: "/_app",
	getParentRoute: () => Route$16
});
var AccountSecurityRoute = Route$13.update({
	id: "/account-security",
	path: "/account-security",
	getParentRoute: () => Route$16
});
var AppAccountRoute = Route$12.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => AppRoute
});
var AppBackupRoute = Route$11.update({
	id: "/backup",
	path: "/backup",
	getParentRoute: () => AppRoute
});
var AppDashboardRoute = Route$10.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AppRoute
});
var AppEnergyRoute = Route$9.update({
	id: "/energy",
	path: "/energy",
	getParentRoute: () => AppRoute
});
var AppHistoryRoute = Route$8.update({
	id: "/history",
	path: "/history",
	getParentRoute: () => AppRoute
});
var AppInsightsRoute = Route$7.update({
	id: "/insights",
	path: "/insights",
	getParentRoute: () => AppRoute
});
var AppOutagesRoute = Route$6.update({
	id: "/outages",
	path: "/outages",
	getParentRoute: () => AppRoute
});
var SignInSplatRoute = Route$5.update({
	id: "/sign-in/$",
	path: "/sign-in/$",
	getParentRoute: () => Route$16
});
var SignUpSplatRoute = Route$4.update({
	id: "/sign-up/$",
	path: "/sign-up/$",
	getParentRoute: () => Route$16
});
var AppAccountIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppAccountRoute
});
var AppAccountRouteChildren = {
	AppAccountPreferencesRoute: Route$2.update({
		id: "/preferences",
		path: "/preferences",
		getParentRoute: () => AppAccountRoute
	}),
	AppAccountProfileRoute: Route$1.update({
		id: "/profile",
		path: "/profile",
		getParentRoute: () => AppAccountRoute
	}),
	AppAccountSessionsRoute: Route.update({
		id: "/sessions",
		path: "/sessions",
		getParentRoute: () => AppAccountRoute
	}),
	AppAccountIndexRoute
};
var AppRouteChildren = {
	AppAccountRoute: AppAccountRoute._addFileChildren(AppAccountRouteChildren),
	AppBackupRoute,
	AppDashboardRoute,
	AppEnergyRoute,
	AppHistoryRoute,
	AppInsightsRoute,
	AppOutagesRoute
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren),
	AccountSecurityRoute,
	SignInSplatRoute,
	SignUpSplatRoute
};
var routeTree = Route$16._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
