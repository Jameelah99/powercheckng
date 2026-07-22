import { o as __toESM } from "./_runtime.mjs";
import { x as require_jsx_runtime } from "./_libs/@clerk/react+[...].mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { K as Battery, M as CreditCard, Z as Activity, a as TriangleAlert, k as LayoutDashboard, o as TrendingUp, t as Zap } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-CWGFYQBI.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-tAHr1923.mjs";
import { t as MetricCard } from "./_ssr/MetricCard-0ouLKx-0.mjs";
import { t as SectionHeader } from "./_ssr/SectionHeader-T1GRZ5JQ.mjs";
import { r as buildBackupAdvisor } from "./_ssr/backupAdvisor-C9obCMo6.mjs";
import { r as loadSavedBudget, t as loadEnergyAnalysis } from "./_ssr/energyStorage-CoGla4sz.mjs";
import { a as listOutages } from "./_ssr/outages.functions-pEPm8tn4.mjs";
import { r as useCurrentLocation, t as calculateCommunityPower } from "./_ssr/communitypower-DWh2ymq8.mjs";
import { t as ResponsiveGrid } from "./_ssr/ResponsiveGrid-L9lI-q9U.mjs";
import { i as useQuery, n as queryOptions } from "./_libs/tanstack__react-query.mjs";
import { t as motion } from "./_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.dashboard-BdL4PvQO.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function StatItem({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2",
			children: value
		})]
	});
}
function CommunityPowerCard({ location, currentStatus, confidence, reportCount, isPending }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { delay: .1 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "p-5 sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: "Community Power",
				description: "Live community power status from nearby reports.",
				className: "mb-6",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/outages",
					className: "inline-flex w-full items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 px-5 py-3 text-sm font-medium text-primary transition hover:bg-primary/10 sm:w-auto",
					children: "Open Outage Tracker"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveGrid, {
				columns: 4,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
						label: "Status",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `inline-flex rounded-full px-4 py-2 text-sm font-semibold ${reportCount === 0 ? "bg-muted text-muted-foreground" : currentStatus === "Power ON" ? "bg-green-500/10 text-green-500" : currentStatus === "Power OFF" ? "bg-red-500/10 text-red-500" : "bg-yellow-500/10 text-yellow-500"}`,
							children: isPending ? "Loading..." : reportCount === 0 ? "No Reports Yet" : currentStatus
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
						label: "Area",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-semibold",
							children: location.area
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
						label: "Distribution Company",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-semibold",
							children: location.discoCode
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
						label: "Community Confidence",
						value: reportCount === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Awaiting the first report from your area."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/outages",
								className: "inline-flex items-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90",
								children: "Report Power Status"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg font-semibold",
							children: [confidence, "% confidence"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								"Based on ",
								reportCount,
								" report",
								reportCount > 1 ? "s" : ""
							]
						})] })
					})
				]
			})]
		})
	});
}
function ProfileMetric({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-xl font-bold leading-none sm:text-2xl",
			children: value
		})]
	});
}
function EnergyProfileCard({ analysis }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { delay: .2 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "p-4 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: "Energy Profile",
				description: "Your current energy setup.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/energy",
					className: "text-[13px] font-semibold text-primary rounded-2xl border border-primary/40 bg-primary/5 px-5 py-3 transition-colors hover:underline sm:text-sm",
					children: "Update"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileMetric, {
						label: "Selected",
						value: analysis.applianceCount
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileMetric, {
						label: "Essential",
						value: analysis.essentialApplianceCount
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileMetric, {
						label: "Peak Load",
						value: `${analysis.peakLoad.toLocaleString()}W`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileMetric, {
						label: "Highest Consumer",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold leading-6 sm:text-base",
							children: analysis.highestConsumer
						})
					})
				]
			})]
		})
	});
}
function DashboardHeader({ monthlyCost, budget, currentStatus, area }) {
	const difference = Math.abs(budget - monthlyCost);
	const greeting = (/* @__PURE__ */ new Date()).getHours() < 12 ? "Morning" : (/* @__PURE__ */ new Date()).getHours() < 17 ? "Afternoon" : "Evening";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { duration: .35 },
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Dashboard",
				description: "Monitor your energy usage, backup readiness, outage status, and personalised recommendations in one place."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-medium text-muted-foreground",
				children: [
					"Good ",
					greeting,
					" 👋"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Today's Summary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "leading-7 text-muted-foreground",
						children: [
							"Your estimated monthly electricity cost is",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-foreground",
								children: ["₦", monthlyCost.toLocaleString()]
							}),
							" ",
							"which is",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-primary",
								children: ["₦", difference.toLocaleString()]
							}),
							monthlyCost <= budget ? " below your planned budget." : " above your planned budget."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "leading-7 text-muted-foreground",
						children: [
							"Community reports currently indicate",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: currentStatus === "Power ON" ? "font-semibold text-green-500" : "font-semibold text-red-500",
								children: currentStatus
							}),
							" ",
							"around",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: area
							}),
							"."
						]
					})]
				})]
			})
		]
	});
}
function DashboardStats({ analysis, budget, advisor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { delay: .05 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResponsiveGrid, {
			columns: 4,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					title: "Energy Health Score",
					value: `${analysis.score}/100`,
					subtitle: analysis.score >= 80 ? "Excellent" : analysis.score >= 60 ? "Good" : "Needs Improvement",
					icon: Zap
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					title: "Monthly Usage",
					value: `${analysis.monthlyUsage.toFixed(1)} kWh`,
					subtitle: "Estimated consumption",
					icon: Activity
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					title: "Monthly Cost",
					value: analysis.monthlyCost > 0 ? `₦${analysis.monthlyCost.toLocaleString()}` : "—",
					subtitle: analysis.monthlyCost > 0 ? analysis.monthlyCost <= budget ? `₦${(budget - analysis.monthlyCost).toLocaleString()} below budget` : `₦${(analysis.monthlyCost - budget).toLocaleString()} above budget` : "Run Energy Planner to estimate your cost",
					icon: CreditCard
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					title: "Backup Ready",
					value: advisor ? `${advisor.readinessScore}%` : "—",
					subtitle: advisor ? advisor.bestTechnology === "INVERTER" ? "Inverter Recommended" : advisor.bestTechnology === "GENERATOR" ? "Generator Recommended" : "Hybrid Recommended" : "Complete Energy Planner",
					icon: Battery
				})
			]
		})
	});
}
var tools = [
	{
		title: "Planner",
		to: "/energy",
		icon: Zap
	},
	{
		title: "Insights",
		to: "/insights",
		icon: TrendingUp
	},
	{
		title: "Backup",
		to: "/backup",
		icon: Battery
	},
	{
		title: "Outages",
		to: "/outages",
		icon: TriangleAlert
	}
];
function DashboardTools() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { delay: .15 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "p-4 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: "PowerCheck Tools",
				description: "Quick access to all PowerCheckNG tools."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveGrid, {
					columns: 4,
					children: tools.map((tool) => {
						const Icon = tool.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: tool.to,
							className: "\r\n  group\r\n  flex\r\n  h-full\r\n  flex-col\r\n  items-center\r\n  justify-center\r\n  rounded-2xl\r\n  border\r\n  border-border\r\n  bg-background/40\r\n  p-5\r\n  text-center\r\n  transition-all\r\n  duration-300\r\n  hover:-translate-y-1\r\n  hover:border-primary\r\n  hover:bg-primary/5\r\n  hover:shadow-lg\r\n  sm:p-6\r\n",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-4 text-sm font-semibold sm:text-base",
								children: tool.title
							})]
						}, tool.title);
					})
				})
			})]
		})
	});
}
function RecommendationCard({ analysis }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { delay: .25 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					title: "Energy Recommendation",
					description: "Personalised guidance based on your current energy profile."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
						children: "TODAY'S RECOMMENDATION"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[13px] leading-6 sm:text-sm lg:text-base",
						children: analysis.recommendations[0]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/insights",
						className: "inline-flex items-center text-[13px] font-semibold text-primary rounded-2xl border border-primary/40 bg-primary/5 px-5 py-3 transition-colors hover:underline sm:text-sm",
						children: "View Smart Insights →"
					})
				})
			]
		})
	});
}
var outagesQO = queryOptions({
	queryKey: ["outages"],
	queryFn: () => listOutages(),
	staleTime: 3e4,
	refetchInterval: 6e4
});
function Dashboard() {
	const analysis = loadEnergyAnalysis();
	const { data, isPending } = useQuery(outagesQO);
	const outages = data?.outages ?? [];
	const { location } = useCurrentLocation();
	const { reportCount, confidence, currentStatus } = calculateCommunityPower(location, outages);
	const budget = Number(loadSavedBudget() ?? 0);
	const hasEnergyProfile = analysis !== null;
	const advisor = analysis ? buildBackupAdvisor(analysis) : null;
	if (!hasEnergyProfile) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 px-4 pb-24 sm:px-0 lg:pb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			icon: LayoutDashboard,
			title: "Dashboard",
			description: "Start by creating your Smart Energy Plan to unlock your personalised dashboard."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "p-5 text-center sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl sm:h-14 sm:w-14 sm:text-2xl",
					children: "⚡"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-lg font-semibold sm:text-xl",
					children: "No Energy Profile Yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-6 text-muted-foreground",
					children: "Build your Smart Energy Plan to see your energy summary, recommendations, backup solution and community power information."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/energy",
					className: "mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto sm:px-5",
					children: "Build Your Energy Plan"
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 px-4 pb-24 sm:px-0 lg:pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardHeader, {
				monthlyCost: analysis.monthlyCost,
				budget,
				currentStatus,
				area: location.area
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardStats, {
				analysis,
				advisor,
				budget
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityPowerCard, {
					location,
					currentStatus,
					confidence,
					reportCount,
					isPending
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardTools, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnergyProfileCard, { analysis }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecommendationCard, { analysis })]
			})
		]
	});
}
//#endregion
export { Dashboard as component };
