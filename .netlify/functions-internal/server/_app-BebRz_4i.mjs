import { o as __toESM } from "./_runtime.mjs";
import { S as require_react, x as require_jsx_runtime } from "./_libs/@clerk/react+[...].mjs";
import { p as Outlet, u as useRouterState, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as dist_exports } from "./_ssr/dist-BPKkTeHq.mjs";
import { t as cn } from "./_ssr/geoUtils-BMyem_HF.mjs";
import { t as Button } from "./_ssr/button-kArZv4Hk.mjs";
import { G as Brain, K as Battery, i as UserRound, k as LayoutDashboard, p as RadioTower, t as Zap, v as PanelLeftOpen, x as Menu, y as PanelLeftClose } from "./_libs/lucide-react.mjs";
import { n as SheetContent, r as SheetTrigger, t as Sheet } from "./_ssr/sheet-BNeXIAkF.mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "./_libs/@radix-ui/react-tooltip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app-BebRz_4i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
function SidebarNavItem({ to, label, icon: Icon, active = false, collapsed = false }) {
	const link = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("flex rounded-2xl transition-all duration-200", collapsed ? "justify-center px-2 py-3 hover:scale-[1.03]" : "items-center gap-3 px-4 py-3 hover:translate-x-1", active ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate font-medium",
			children: label
		})]
	});
	if (!collapsed) return link;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: true,
		children: link
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "right",
		children: label
	})] });
}
var NAV = [
	{
		to: "/dashboard",
		label: "Dashboard",
		mobileLabel: "Home",
		icon: LayoutDashboard
	},
	{
		to: "/energy",
		label: "Smart Energy Planner",
		mobileLabel: "Planner",
		icon: Brain
	},
	{
		to: "/outages",
		label: "Outage Tracker",
		mobileLabel: "Outages",
		icon: Zap
	},
	{
		to: "/backup",
		label: "Power Backup Advisor",
		mobileLabel: "Backup",
		icon: Battery
	}
];
var SIDEBAR_NAV = NAV;
var MOBILE_MENU_NAV = [...SIDEBAR_NAV, {
	to: "/account/profile",
	label: "Account",
	mobileLabel: "Account",
	icon: UserRound
}];
function isNavItemActive(pathname, route) {
	if (pathname === route || pathname.startsWith(`${route}/`)) return true;
	if (route === "/energy" && pathname.startsWith("/insights")) return true;
	if (route === "/outages" && pathname.startsWith("/history")) return true;
	return false;
}
function AppShell({ children }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen grid-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1600px] gap-4 p-4 lg:gap-6 lg:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: cn("sticky top-6 hidden h-[calc(100vh-3rem)] shrink-0 rounded-2xl glass transition-all duration-300 lg:flex lg:flex-col", collapsed ? "w-20 p-3" : "w-60 p-4"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, {
					delayDuration: 150,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard",
							className: cn("flex items-center rounded-xl transition-all", collapsed ? "justify-center py-3" : "gap-3 px-2 py-3"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-9 items-center justify-center rounded-xl bg-primary glow-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-primary-foreground" })
							}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-semibold",
								children: "PowerCheckNG"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "mt-6 flex-1 space-y-2",
							children: SIDEBAR_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarNavItem, {
								to: item.to,
								label: item.label,
								icon: item.icon,
								active: isNavItemActive(pathname, item.to),
								collapsed
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 border-t border-border pt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
									delayDuration: 150,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											className: cn("h-11 w-full rounded-2xl shadow-sm transition-all", collapsed ? "px-0" : "justify-start gap-3 px-4"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/outages",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioTower, { className: "size-5 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Report Power Status" })]
											})
										})
									}), collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
										side: "right",
										children: "Report Power Status"
									})] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/account",
									className: cn("flex items-center rounded-2xl bg-white/5 transition hover:bg-white/10", collapsed ? "justify-center p-3" : "justify-between p-3"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(dist_exports.UserButton, {}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: "Account"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => setCollapsed(!collapsed),
									className: "h-11 w-full rounded-2xl",
									children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftOpen, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftClose, { className: "size-5" })
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0 flex-1 pb-24 lg:pb-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "mb-5 flex items-center justify-between rounded-2xl glass px-4 py-2 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-8 items-center justify-center rounded-lg bg-primary glow-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-primary-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-semibold",
								children: "PowerCheckNG"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "ghost",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
								side: "right",
								className: "h-fit rounded-l-2xl pb-20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 space-y-6",
									children: MOBILE_MENU_NAV.map((item) => {
										const Icon = item.icon;
										const active = isNavItemActive(pathname, item.to);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: item.to,
											className: cn("flex items-center gap-3 rounded-xl px-4 py-2", active ? "bg-primary/10 text-primary" : "hover:bg-muted"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), item.label]
										}, item.to);
									})
								})
							})] })
						})]
					}),
					children,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "fixed inset-x-3 bottom-3 z-50 flex items-center justify-around rounded-2xl glass-strong py-2 shadow-xl lg:hidden",
						children: NAV.map((item) => {
							const Icon = item.icon;
							const active = isNavItemActive(pathname, item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex min-w-0 flex-col items-center gap-1 px-2 py-1 text-[10px] transition-colors", active ? "text-primary" : "text-muted-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.mobileLabel })]
							}, item.to);
						})
					})
				]
			})]
		})
	});
}
function AppLayout() {
	const { isSignedIn } = (0, dist_exports.useAuth)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(dist_exports.ClerkLoading, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen grid-bg flex items-center justify-center text-sm text-muted-foreground",
		children: "Loading…"
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dist_exports.ClerkLoaded, { children: isSignedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dist_exports.RedirectToSignIn, {}) })] });
}
//#endregion
export { AppLayout as component };
