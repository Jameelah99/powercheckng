import { o as __toESM } from "../_runtime.mjs";
import { S as require_react, x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cn } from "./geoUtils-BMyem_HF.mjs";
import { t as Button } from "./button-kArZv4Hk.mjs";
import { C as MapPinned, O as Lightbulb, R as CircleCheckBig, U as ChartColumn, Y as ArrowRight, d as ShieldCheck, q as BatteryCharging, t as Zap, x as Menu } from "../_libs/lucide-react.mjs";
import { n as SheetContent, r as SheetTrigger, t as Sheet } from "./sheet-BNeXIAkF.mjs";
import { t as GlassCard } from "./GlassCard-tAHr1923.mjs";
import { t as ResponsiveGrid } from "./ResponsiveGrid-L9lI-q9U.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
require_react();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function PageContainer({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className),
		...props,
		children
	});
}
function LandingNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex h-20 items-center justify-between",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-9 items-center justify-center rounded-2xl bg-primary glow-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-5 text-primary-foreground" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl font-semibold",
					children: "PowerCheckNG"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden items-center gap-8 text-lg font-medium text-muted-foreground lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#features",
						className: "transition hover:text-foreground",
						children: "Features"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#how",
						className: "transition hover:text-foreground",
						children: "How It Works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#dashboard",
						className: "transition hover:text-foreground",
						children: "Dashboard"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden items-center gap-3 lg:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/sign-in/$",
					params: { _splat: "" },
					className: "text-base font-medium text-muted-foreground transition hover:text-foreground",
					children: "Sign in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/sign-up/$",
					params: { _splat: "" },
					className: "rounded-2xl bg-primary px-4 py-2 text-base font-medium text-primary-foreground transition hover:bg-primary/90 glow-primary",
					children: "Get Started"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
					side: "right",
					className: "w-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#features",
								className: "text-base font-medium transition hover:text-primary",
								children: "Features"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#how",
								className: "text-base font-medium transition hover:text-primary",
								children: "How It Works"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#dashboard",
								className: "text-base font-medium transition hover:text-primary",
								children: "Dashboard"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sign-in/$",
									params: { _splat: "" },
									className: "rounded-lg border px-4 py-2 text-center font-medium",
									children: "Sign In"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sign-up/$",
									params: { _splat: "" },
									className: "rounded-lg bg-primary px-4 py-2 text-center font-medium text-primary-foreground",
									children: "Get Started"
								})]
							})
						]
					})
				})] })
			})
		]
	}) });
}
function Section({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("py-16 sm:py-20 lg:py-24", className),
		...props,
		children
	});
}
var previewCards = [
	{
		title: "Energy Health",
		value: "Good",
		subtitle: "Energy Profile Ready",
		subtitleClass: "text-green-500",
		valueClass: ""
	},
	{
		title: "Monthly Cost",
		value: "Estimated",
		subtitle: "Usage Analysis",
		subtitleClass: "text-primary",
		valueClass: ""
	},
	{
		title: "Community Power",
		value: "Reports Available",
		subtitle: "Nearby Updates",
		subtitleClass: "text-muted-foreground",
		valueClass: "text-red-500"
	},
	{
		title: "Backup Advisor",
		value: "Recommendations",
		subtitle: "Personalised",
		subtitleClass: "text-muted-foreground",
		valueClass: ""
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "pt-8 sm:pt-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .6 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 ...",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 animate-pulse rounded-full bg-primary" }), "⚡ Smarter Energy Planning for Nigeria"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl",
						children: [
							"Good Energy Decisions,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Start With Better Insights"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg lg:text-xl lg:leading-8",
						children: "PowerCheckNG helps Nigerian homes and businesses understand electricity usage, estimate monthly costs, choose the right backup solution and stay informed about power outages in their community."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/sign-up/$",
							params: { _splat: "" },
							className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto glow-primary",
							children: ["Get Started", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#features",
							className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card/40 px-5 py-3 text-sm font-medium transition hover:bg-card/70 sm:w-auto",
							children: "Explore Features"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .95
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .7,
					delay: .1
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
					className: "overflow-hidden p-4 sm:p-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-between",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Product Preview"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-xl font-semibold",
									children: "Your Energy Workspace"
								})] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: previewCards.map((card, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { delay: .25 + index * .15 },
									className: "rounded-2xl border border-border bg-background/30 p-5 transition-all hover:border-primary/30",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: card.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `mt-2 text-xl font-bold ${card.valueClass}`,
											children: card.value
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `mt-2 text-xs ${card.subtitleClass}`,
											children: card.subtitle
										})
									]
								}, card.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 25
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .95 },
								className: "mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-wide text-primary",
									children: "Smart Recommendations"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-7 text-muted-foreground",
									children: "Receive personalised energy recommendations, backup guidance and consumption insights based on your household or business energy profile."
								})]
							})
						]
					})
				})
			})]
		}) })
	});
}
var challenges = [
	{
		icon: "💸",
		title: "High Electricity Bills",
		description: "Many homes and businesses spend more than necessary because they don't know what consumes the most electricity."
	},
	{
		icon: "🔋",
		title: "Choosing the Right Backup",
		description: "Buying the wrong generator, inverter or battery can lead to unnecessary costs and poor performance."
	},
	{
		icon: "📍",
		title: "Uncertain Power Outages",
		description: "Community outage reporting helps you understand power availability in your area and stay informed."
	}
];
function WhyPowerCheck() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-semibold uppercase tracking-wider text-primary",
				children: "Why PowerCheckNG?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
				children: [
					"Managing Electricity",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Shouldn't Be Guesswork."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
				children: "Whether you're trying to reduce electricity costs, choose the right backup solution or understand energy usage, PowerCheckNG gives you the insights needed to make informed decisions."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveGrid, {
		columns: 3,
		className: "mt-20 gap-6 lg:gap-8",
		children: challenges.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 40
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			transition: {
				duration: .45,
				delay: index * .15
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "h-full p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl sm:h-14 sm:w-14 sm:text-3xl",
						children: item.icon
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-xl font-semibold sm:text-2xl",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8",
						children: item.description
					})
				]
			})
		}, item.title))
	})] }) });
}
var features = [
	{
		icon: Lightbulb,
		title: "Smart Energy Planner",
		description: "Build your energy profile by selecting appliances, estimating daily usage and understanding your expected monthly electricity consumption."
	},
	{
		icon: ChartColumn,
		title: "Smart Insights",
		description: "View your energy health score, monthly usage estimates, electricity costs, highest energy consumers and practical recommendations."
	},
	{
		icon: BatteryCharging,
		title: "Backup Advisor",
		description: "Receive tailored generator and inverter recommendations based on your estimated energy needs and essential appliances."
	},
	{
		icon: MapPinned,
		title: "Community Power",
		description: "View and contribute community outage reports to stay informed about power availability in your neighbourhood."
	}
];
function CoreFeatures() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "features",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold uppercase tracking-wider text-primary",
					children: "Core Features"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
					children: [
						"Everything You Need",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"To Make Better Energy Decisions"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
					children: "PowerCheckNG combines energy planning, consumption insights, backup recommendations and community outage reporting in one simple platform."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveGrid, {
			columns: 2,
			className: "mt-20 gap-6 lg:gap-8",
			children: features.map((feature, index) => {
				const Icon = feature.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .45,
						delay: index * .12
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "group h-full p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary sm:h-14 sm:w-14",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground sm:h-7 sm:w-7" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-xl font-semibold sm:text-2xl",
								children: feature.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8",
								children: feature.description
							})
						]
					})
				}, feature.title);
			})
		})] })
	});
}
var steps = [
	{
		number: "01",
		icon: Lightbulb,
		title: "Add Your Appliances",
		description: "Select the appliances you use, specify quantities and estimated daily usage to create your personalised energy profile."
	},
	{
		number: "02",
		icon: ChartColumn,
		title: "Review Your Analysis",
		description: "Instantly see your estimated monthly usage, electricity cost, energy health score and appliance breakdown."
	},
	{
		number: "03",
		icon: CircleCheckBig,
		title: "Make Better Decisions",
		description: "Use personalised recommendations, backup advice and community outage reports to plan with confidence."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "how",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold uppercase tracking-wider text-primary",
					children: "How It Works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
					children: "Three Simple Steps"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
					children: "Set up your energy profile once, then let PowerCheckNG help you make smarter electricity decisions every day."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-16 lg:mt-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" }), steps.map((step, index) => {
				const Icon = step.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .45,
						delay: index * .15
					},
					className: `mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-center lg:gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
								className: "group h-full p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4 sm:items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground sm:h-14 sm:w-14 sm:text-lg",
										children: step.number
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-semibold sm:text-2xl",
											children: step.title
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8",
									children: step.description
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden w-20 justify-center lg:flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-5 rounded-full border-4 border-primary bg-background" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden flex-1 lg:block" })
					]
				}, step.number);
			})]
		})] })
	});
}
var summary = [
	{
		title: "Health",
		value: "Good",
		icon: ShieldCheck
	},
	{
		title: "Usage",
		value: "Estimated",
		icon: ChartColumn
	},
	{
		title: "Cost",
		value: "Monthly",
		icon: Zap
	},
	{
		title: "Backup",
		value: "Ready",
		icon: BatteryCharging
	}
];
var tools = [
	"Smart Planner",
	"Smart Insights",
	"Backup Advisor",
	"Community Power"
];
function DashboardPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "dashboard",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageContainer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold uppercase tracking-wider text-primary",
					children: "Dashboard Preview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
					children: "Everything In One Place"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
					children: "Monitor your energy profile, review recommendations, explore community reports and access every PowerCheckNG tool from one clean dashboard."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 40
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			className: "mt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "overflow-hidden p-5 sm:p-6 lg:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold sm:text-xl",
						children: "Today's Summary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveGrid, {
						columns: 4,
						className: "mt-6 gap-4",
						children: summary.map((item) => {
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-background/30 p-4 sm:p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mb-3 h-5 w-5 text-primary sm:h-6 sm:w-6" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-lg font-semibold sm:text-xl",
										children: item.value
									})
								]
							}, item.title);
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-6 lg:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "p-5 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinned, { className: "h-6 w-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold",
										children: "Community Power"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-2xl font-bold sm:text-3xl",
									children: "Reports Available"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-7 text-muted-foreground",
									children: "Stay informed about power availability around you."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "p-5 sm:p-6 lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-6 w-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold",
									children: "PowerCheck Tools"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-3 sm:grid-cols-2",
								children: tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-2xl border border-border bg-background/30 px-4 py-3 text-sm font-medium sm:text-base",
									children: tool
								}, tool))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "mt-8 border-primary/20 bg-primary/5 p-5 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wide text-primary",
								children: "Today's Recommendation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg font-medium sm:text-xl",
								children: "Your estimated monthly energy profile is ready."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-7 text-muted-foreground sm:text-base",
								children: "Review your energy analysis to understand your highest energy consumers, estimated monthly cost and the most suitable backup solution for your home or business."
							})
						]
					})
				]
			})
		})] })
	});
}
function CTASection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 40
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		transition: { duration: .5 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "relative overflow-hidden p-6 sm:p-10 lg:p-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg sm:h-16 sm:w-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-7 w-7 sm:h-8 sm:w-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-8 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
						children: [
							"Start Making",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Better Energy Decisions Today"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
						children: "Build your energy profile, estimate electricity costs, receive personalised recommendations and discover the best backup solution—all in one place."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/sign-up/$",
							params: { _splat: "" },
							className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:w-auto glow-primary",
							children: ["Get Started", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#features",
							className: "inline-flex w-full items-center justify-center rounded-xl border border-border bg-background/40 px-6 py-3 text-sm font-semibold transition hover:bg-background sm:w-auto",
							children: "Explore Features"
						})]
					})
				]
			})]
		})
	}) }) });
}
function LandingFooter() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60 bg-background/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl font-semibold",
							children: "PowerCheckNG"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:text-base",
						children: "Helping Nigerian homes and businesses understand electricity usage, plan smarter and make better energy decisions."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold",
						children: "Product"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-sm text-muted-foreground sm:text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#features",
								className: "transition hover:text-foreground",
								children: "Features"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#how",
								className: "transition hover:text-foreground",
								children: "How It Works"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#dashboard",
								className: "transition hover:text-foreground",
								children: "Dashboard"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: "Get Started"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-7 text-muted-foreground sm:text-base",
							children: "Create your free account and begin building your personalised energy profile."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sign-up/$",
							params: { _splat: "" },
							className: "mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto",
							children: "Create Account"
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col gap-4 border-t border-border pt-8 text-center text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					year,
					" PowerCheckNG. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Designed to help Nigerians make smarter energy decisions." })]
			})]
		}) })
	});
}
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen grid-bg relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyPowerCheck, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreFeatures, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPreview, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingFooter, {})
		]
	});
}
//#endregion
export { Landing as component };
