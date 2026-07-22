import { o as __toESM } from "../_runtime.mjs";
import { S as require_react, x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as dist_exports } from "./dist-BPKkTeHq.mjs";
import { t as cn } from "./geoUtils-BMyem_HF.mjs";
import { n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-kArZv4Hk.mjs";
import { E as LogOut, T as Mail, W as Camera, b as Monitor, u as Shield, z as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as GlassCard } from "./GlassCard-tAHr1923.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-DXeCVV5n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
function AccountAvatar({ imageUrl, name, size = 120, className }) {
	const initials = name?.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "PC";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: `group relative transition-transform duration-300 hover:scale-105 ${className ?? ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar, {
				style: {
					width: size,
					height: size
				},
				className: "border-4 border-background shadow-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, { src: imageUrl ?? void 0 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
					className: "text-3xl font-bold",
					children: initials
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center rounded-full bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium",
						children: "Change Photo"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-5 w-5" })
			})
		]
	});
}
function AccountPage() {
	const clerk = (0, dist_exports.useClerk)();
	const { user } = (0, dist_exports.useUser)();
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold",
				children: "Account"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Manage your PowerCheckNG account."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
				className: "group cursor-pointer rounded-2xl p-6 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountAvatar, {
							imageUrl: user?.imageUrl,
							name: user?.fullName,
							size: 80
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-bold",
									children: user?.fullName ?? "PowerCheck User"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: user?.primaryEmailAddress?.emailAddress
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary",
										children: "Verified"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-primary/20 px-3 py-1 text-xs",
										children: "PowerCheckNG Member"
									})]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => navigate({ to: "/account/profile" }),
						variant: "default",
						children: "Edit Profile"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
						onClick: () => navigate({ to: "/account/profile" }),
						className: "cursor-pointer p-6 transition hover:border-primary/30 hover:bg-primary/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: "Email Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Manage your email addresses."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-muted-foreground" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
						onClick: () => navigate({ to: "/account/profile" }),
						className: "cursor-pointer p-6 transition hover:border-primary/30 hover:bg-primary/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: "Password & Security"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Update your password."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-muted-foreground" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
						onClick: () => navigate({ to: "/account/sessions" }),
						className: "cursor-pointer p-6 transition hover:border-primary/30 hover:bg-primary/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: "Active Sessions"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "View signed-in devices."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-muted-foreground" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
						onClick: () => clerk.signOut(),
						className: "group cursor-pointerrounded-2xl border border-red-500/20 p-6 transition-all hover:bg-red-500/10 hover:border-red-500",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "text-red-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: "Sign Out"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "End your current session."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-muted-foreground" })]
						})
					})
				]
			})
		]
	});
}
//#endregion
export { AccountPage as component };
