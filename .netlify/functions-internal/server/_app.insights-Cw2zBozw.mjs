import { o as __toESM } from "./_runtime.mjs";
import { x as require_jsx_runtime } from "./_libs/@clerk/react+[...].mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { H as ChartPie, O as Lightbulb, _ as PiggyBank, a as TriangleAlert, q as BatteryCharging } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-CWGFYQBI.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-tAHr1923.mjs";
import { t as MetricCard } from "./_ssr/MetricCard-0ouLKx-0.mjs";
import { t as SectionHeader } from "./_ssr/SectionHeader-T1GRZ5JQ.mjs";
import { o as saveEnergyAnalysis } from "./_ssr/energyStorage-CoGla4sz.mjs";
import { i as analyzeEnergyPlan } from "./_ssr/energyPlanner-4WXwCdNV.mjs";
import { a as Tooltip, i as ResponsiveContainer, n as Pie, r as Cell, t as PieChart } from "./_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.insights-Cw2zBozw.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function InsightSummaryCards({ profile }) {
	const { analysis, potentialMonthlySavings, selectedApplianceCount } = profile;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
				title: "Energy Health Score",
				value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [analysis.score, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "/100"
				})] }),
				subtitle: "Based on usage and budget alignment",
				valueClassName: "text-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
				title: "Estimated Monthly Cost",
				value: `₦${Math.round(analysis.monthlyCost).toLocaleString()}`,
				subtitle: "From your saved energy plan"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
				title: "Potential Monthly Savings",
				value: potentialMonthlySavings > 0 ? `₦${Math.round(potentialMonthlySavings).toLocaleString()}` : "None",
				subtitle: potentialMonthlySavings > 0 ? "From identified usage adjustments" : "Current usage is already well optimised",
				valueClassName: potentialMonthlySavings > 0 ? "text-green-500" : void 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
				title: "Active Appliances",
				value: selectedApplianceCount,
				subtitle: "Included in your latest analysis"
			})
		]
	});
}
var riskConfig = {
	NO_BUDGET: {
		label: "No Budget Set",
		description: "Set a monthly electricity budget in the Smart Energy Planner to unlock budget risk analysis.",
		textClass: "text-muted-foreground",
		barClass: "bg-muted-foreground"
	},
	LOW: {
		label: "Low Risk",
		description: "Your projected electricity cost is comfortably within your current monthly energy budget.",
		textClass: "text-green-500",
		barClass: "bg-green-500"
	},
	MODERATE: {
		label: "Moderate Risk",
		description: "Your projected electricity cost is close to your monthly budget limit and may need monitoring.",
		textClass: "text-yellow-500",
		barClass: "bg-yellow-500"
	},
	HIGH: {
		label: "High Risk",
		description: "Your projected electricity cost significantly exceeds your planned monthly energy budget.",
		textClass: "text-orange-500",
		barClass: "bg-orange-500"
	},
	CRITICAL: {
		label: "Critical Risk",
		description: "Your current appliance usage pattern may be financially difficult to sustain within your planned budget.",
		textClass: "text-red-500",
		barClass: "bg-red-500"
	}
};
function BudgetRiskCard({ profile }) {
	const { analysis, budget, budgetRisk, budgetDifference, budgetUsagePercentage } = profile;
	const config = riskConfig[budgetRisk];
	const progressPercentage = budget <= 0 ? 0 : Math.min(budgetUsagePercentage, 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		className: "p-4 sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: TriangleAlert,
				title: "Monthly Budget Risk",
				description: "Understand how your projected electricity cost compares with your monthly budget."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mt-6 rounded-2xl border p-5 ${budgetRisk === "LOW" ? "border-green-500/20 bg-green-500/5" : budgetRisk === "MODERATE" ? "border-yellow-500/20 bg-yellow-500/5" : budgetRisk === "HIGH" ? "border-orange-500/20 bg-orange-500/5" : budgetRisk === "CRITICAL" ? "border-red-500/20 bg-red-500/5" : "border-border"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
						children: "Current Risk Level"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-2 text-xl font-bold ${config.textClass}`,
						children: config.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[13px] leading-6 text-muted-foreground sm:text-sm lg:text-base",
						children: config.description
					})
				]
			}),
			budget > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 h-3 overflow-hidden rounded-full bg-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `h-full rounded-full transition-all duration-500 ${config.barClass}`,
					style: { width: `${progressPercentage}%` }
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
					children: "Estimated Cost"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-lg font-semibold",
					children: ["₦", Math.round(analysis.monthlyCost).toLocaleString()]
				})] }), budget > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
						children: "Monthly Budget"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-lg font-semibold",
						children: ["₦", Math.round(budget).toLocaleString()]
					})]
				})]
			})] })
		]
	});
}
var severityConfig = {
	POSITIVE: {
		icon: "✓",
		label: "Positive",
		containerClass: "border-green-500/20 bg-green-500/5",
		iconClass: "bg-green-500/15 text-green-500",
		labelClass: "text-green-500"
	},
	INFO: {
		icon: "i",
		label: "Insight",
		containerClass: "border-primary/20 bg-primary/5",
		iconClass: "bg-primary/15 text-primary",
		labelClass: "text-primary"
	},
	WARNING: {
		icon: "!",
		label: "Attention",
		containerClass: "border-yellow-500/20 bg-yellow-500/5",
		iconClass: "bg-yellow-500/15 text-yellow-500",
		labelClass: "text-yellow-500"
	},
	CRITICAL: {
		icon: "!",
		label: "Critical",
		containerClass: "border-red-500/20 bg-red-500/5",
		iconClass: "bg-red-500/15 text-red-500",
		labelClass: "text-red-500"
	}
};
function SmartInsightList({ insights }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		className: "p-4 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			icon: Lightbulb,
			title: "Smart Energy Insights",
			description: "Personalized observations generated from your latest energy profile."
		}), insights.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 rounded-2xl border border-border p-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "No energy insights are available yet."
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-4",
			children: insights.map((insight) => {
				const config = severityConfig[insight.severity];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-2xl border p-4 sm:p-5 transition-all ${config.containerClass}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3 sm:gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${config.iconClass}`,
							children: config.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-w-0 flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-semibold leading-6",
									children: insight.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-2.5 py-1 text-xs font-semibold ${config.labelClass}`,
									children: config.label
								})]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[13px] leading-6 text-muted-foreground sm:ml-[52px] sm:mt-3 sm:text-sm lg:text-base",
						children: insight.message
					})]
				}, insight.id);
			})
		})]
	});
}
function SavingsOpportunities({ opportunities, potentialMonthlySavings }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		className: "p-4 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			icon: PiggyBank,
			title: "Potential Savings Opportunities",
			description: "Practical usage adjustments identified from your current energy profile.",
			action: potentialMonthlySavings > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-left sm:text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
					children: "Potential Savings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xl font-bold text-green-500",
					children: [
						"₦",
						Math.round(potentialMonthlySavings).toLocaleString(),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 text-xs font-normal text-muted-foreground",
							children: "/month"
						})
					]
				})]
			}) : void 0
		}), opportunities.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-2xl border border-border p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: "No major savings opportunities identified"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-6 text-muted-foreground",
				children: "Your current appliance usage does not trigger any of PowerCheckNG's targeted usage reduction recommendations. You can adjust your appliance hours in the Smart Energy Planner to compare different energy plans."
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-4",
			children: opportunities.map((opportunity) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border bg-background/30 p-4 transition-all hover:border-primary/30 hover:bg-primary/5 sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold leading-6",
						children: opportunity.appliance
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[13px] leading-6 text-muted-foreground sm:text-sm",
						children: opportunity.action
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
							children: "Estimated monthly saving"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xl font-bold text-green-500",
							children: ["₦", Math.round(opportunity.estimatedMonthlySavings).toLocaleString()]
						})]
					})]
				})
			}, `${opportunity.appliance}-${opportunity.action}`))
		})]
	});
}
var CHART_COLORS = [
	"#00C853",
	"#38BDF8",
	"#FACC15",
	"#A78BFA",
	"#FB7185",
	"#F97316",
	"#2DD4BF",
	"#94A3B8"
];
function EnergyBreakdownChart({ breakdown }) {
	const chartData = breakdown.filter((item) => item.usage > 0);
	if (chartData.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		className: "p-4 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			icon: ChartPie,
			title: "Energy Consumption Distribution",
			description: "See how your estimated monthly electricity usage is distributed across your appliances."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 rounded-2xl border border-border p-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "No appliance consumption data is available yet."
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "text-xl font-semibold",
		children: "Energy Consumption Distribution"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm text-muted-foreground",
		children: "Estimated share of monthly electricity usage by appliance."
	})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)] lg:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-[260px] min-w-0 sm:h-[320px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: chartData,
					dataKey: "usage",
					nameKey: "name",
					cx: "50%",
					cy: "50%",
					innerRadius: 70,
					outerRadius: 110,
					paddingAngle: 3,
					children: chartData.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: CHART_COLORS[index % CHART_COLORS.length] }, item.name))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					formatter: (value, _name, item) => {
						const rawValue = Array.isArray(value) ? value[0] : value;
						const usage = Number(rawValue ?? 0);
						const percentage = Number(item?.payload?.percentage ?? 0);
						return [`${usage.toFixed(1)} kWh (${Math.round(percentage)}%)`, "Monthly usage"];
					},
					contentStyle: {
						background: "rgba(20,28,40,0.95)",
						border: "1px solid rgba(255,255,255,0.1)",
						borderRadius: 12,
						fontSize: 12,
						color: "#ffffff"
					},
					itemStyle: { color: "#ffffff" },
					labelStyle: { color: "#ffffff" },
					cursor: { fill: "rgba(255,255,255,0.05)" }
				})] })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: chartData.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 rounded-2xl border border-border bg-background/30 p-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-3 w-3 shrink-0 rounded-full",
						style: { backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "break-words text-sm font-semibold leading-6 sm:text-base",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [item.usage.toFixed(1), " kWh/month"]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full sm:w-auto sm:shrink-0 sm:text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg font-bold",
						children: [Math.round(item.percentage), "%"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: ["₦", Math.round(item.cost).toLocaleString()]
					})]
				})]
			}, item.name))
		})]
	})] });
}
function calculateBudgetRisk(monthlyCost, budget) {
	if (budget <= 0) return "NO_BUDGET";
	const budgetUsagePercentage = monthlyCost / budget * 100;
	if (budgetUsagePercentage <= 80) return "LOW";
	if (budgetUsagePercentage <= 110) return "MODERATE";
	if (budgetUsagePercentage <= 175) return "HIGH";
	return "CRITICAL";
}
function calculateSavingsOpportunities(appliances) {
	const selectedAppliances = appliances.filter((appliance) => appliance.selected);
	const opportunities = [];
	const airConditioner = selectedAppliances.find((appliance) => appliance.name === "Air Conditioner");
	if (airConditioner && airConditioner.hours > 6) {
		const estimatedMonthlySavings = airConditioner.watts * airConditioner.quantity * 2 * 30 / 1e3 * 72;
		opportunities.push({
			appliance: airConditioner.name,
			action: "Reduce daily usage by 2 hours",
			estimatedMonthlySavings
		});
	}
	const electricIron = selectedAppliances.find((appliance) => appliance.name === "Electric Iron");
	if (electricIron && electricIron.hours > 1) {
		const estimatedMonthlySavings = electricIron.watts * electricIron.quantity * .5 * 30 / 1e3 * 72;
		opportunities.push({
			appliance: electricIron.name,
			action: "Reduce daily usage by 30 minutes",
			estimatedMonthlySavings
		});
	}
	const waterPump = selectedAppliances.find((appliance) => appliance.name === "Water Pump");
	if (waterPump && waterPump.hours > 2) {
		const estimatedMonthlySavings = waterPump.watts * waterPump.quantity * 1 * 30 / 1e3 * 72;
		opportunities.push({
			appliance: waterPump.name,
			action: "Reduce daily usage by 1 hour",
			estimatedMonthlySavings
		});
	}
	if (opportunities.length === 0) {
		const analysis = analyzeEnergyPlan(appliances, 0);
		const topConsumer = analysis.breakdown[0];
		if (topConsumer) opportunities.push({
			appliance: topConsumer.name,
			action: "Reduce daily usage or replace with a more energy-efficient model.",
			estimatedMonthlySavings: topConsumer.cost * .15
		});
		if (analysis.score < 80) opportunities.push({
			appliance: "Whole Home",
			action: "Reduce usage across your highest-consuming appliances by about 10%.",
			estimatedMonthlySavings: analysis.monthlyCost * .1
		});
	}
	return opportunities.sort((a, b) => b.estimatedMonthlySavings - a.estimatedMonthlySavings);
}
function buildSmartInsights({ budget, budgetRisk, budgetDifference, budgetUsagePercentage, topConsumerName, topConsumerPercentage, score, potentialMonthlySavings }) {
	const insights = [];
	if (budgetRisk === "NO_BUDGET") insights.push({
		id: "no-budget",
		title: "Set an Energy Budget",
		message: "Add a monthly electricity budget in the Smart Energy Planner to unlock budget risk analysis and more personalized cost insights.",
		severity: "INFO"
	});
	if (budgetRisk === "LOW") insights.push({
		id: "budget-low",
		title: "Healthy Budget Position",
		message: `Your estimated electricity cost uses approximately ${Math.round(budgetUsagePercentage)}% of your monthly energy budget, giving you a comfortable cost buffer.`,
		severity: "POSITIVE"
	});
	if (budgetRisk === "MODERATE") {
		const message = budgetDifference > 0 ? `Your projected monthly electricity cost is approximately ₦${Math.round(budgetDifference).toLocaleString()} above your current budget. Small usage adjustments could bring your plan back within target.` : `Your estimated electricity cost is approaching your monthly budget limit. Monitor high-consumption appliances to avoid exceeding your target.`;
		insights.push({
			id: "budget-moderate",
			title: "Budget Needs Attention",
			message,
			severity: "WARNING"
		});
	}
	if (budgetRisk === "HIGH") insights.push({
		id: "budget-high",
		title: "High Budget Risk",
		message: `Your projected monthly electricity cost exceeds your budget by approximately ₦${Math.round(Math.max(budgetDifference, 0)).toLocaleString()}. Prioritize reducing usage from your largest energy cost drivers.`,
		severity: "WARNING"
	});
	if (budgetRisk === "CRITICAL") insights.push({
		id: "budget-critical",
		title: "Critical Budget Risk",
		message: `Your projected electricity cost is more than 75% above your planned monthly budget. Your current appliance usage pattern may be financially difficult to sustain without major adjustments.`,
		severity: "CRITICAL"
	});
	if (topConsumerName) {
		const severity = topConsumerPercentage >= 60 ? "WARNING" : "INFO";
		insights.push({
			id: "top-consumer",
			title: "Largest Energy Cost Driver",
			message: `${topConsumerName} contributes approximately ${Math.round(topConsumerPercentage)}% of your estimated electricity consumption. Changes to this appliance may have the greatest impact on your monthly energy cost.`,
			severity
		});
	}
	if (potentialMonthlySavings > 0) insights.push({
		id: "savings-opportunity",
		title: "Potential Savings Identified",
		message: `PowerCheckNG identified usage adjustments that could reduce your estimated monthly electricity cost by approximately ₦${Math.round(potentialMonthlySavings).toLocaleString()}.`,
		severity: "POSITIVE"
	});
	if (score >= 90) insights.push({
		id: "excellent-score",
		title: "Excellent Energy Profile",
		message: `Your Energy Health Score is ${score}/100. Your current appliance usage and budget alignment indicate a highly efficient energy plan.`,
		severity: "POSITIVE"
	});
	else if (score >= 70) insights.push({
		id: "good-score",
		title: "Good Energy Profile",
		message: `Your Energy Health Score is ${score}/100. Your plan is generally healthy, although targeted adjustments could further improve efficiency and cost control.`,
		severity: "INFO"
	});
	else insights.push({
		id: "score-needs-attention",
		title: "Energy Profile Needs Attention",
		message: `Your Energy Health Score is ${score}/100. Review your highest-consuming appliances and budget position to improve the efficiency of your current energy plan.`,
		severity: "WARNING"
	});
	return insights;
}
function generateEnergyInsights(appliances, budget) {
	const analysis = analyzeEnergyPlan(appliances, budget);
	saveEnergyAnalysis(analysis);
	const selectedApplianceCount = appliances.filter((appliance) => appliance.selected).length;
	const budgetDifference = analysis.monthlyCost - budget;
	const budgetUsagePercentage = budget > 0 ? analysis.monthlyCost / budget * 100 : 0;
	const budgetRisk = calculateBudgetRisk(analysis.monthlyCost, budget);
	const topConsumer = analysis.breakdown[0] ?? null;
	const savingsOpportunities = calculateSavingsOpportunities(appliances);
	const potentialMonthlySavings = savingsOpportunities.reduce((total, opportunity) => total + opportunity.estimatedMonthlySavings, 0);
	return {
		analysis,
		budget,
		budgetRisk,
		budgetDifference,
		budgetUsagePercentage,
		topConsumer,
		selectedApplianceCount,
		potentialMonthlySavings,
		savingsOpportunities,
		insights: buildSmartInsights({
			budget,
			budgetRisk,
			budgetDifference,
			budgetUsagePercentage,
			topConsumerName: topConsumer?.name ?? null,
			topConsumerPercentage: topConsumer?.percentage ?? 0,
			score: analysis.score,
			potentialMonthlySavings
		})
	};
}
var APPLIANCES_STORAGE_KEY = "powercheckng-energy-appliances";
var BUDGET_STORAGE_KEY = "powercheckng-energy-budget";
function loadSavedAppliances() {
	if (typeof window === "undefined") return [];
	try {
		const saved = window.localStorage.getItem(APPLIANCES_STORAGE_KEY);
		if (!saved) return [];
		const parsed = JSON.parse(saved);
		return Array.isArray(parsed) ? parsed : [];
	} catch (error) {
		console.error("Failed to load saved appliances:", error);
		return [];
	}
}
function loadSavedBudget() {
	if (typeof window === "undefined") return 0;
	try {
		const saved = window.localStorage.getItem(BUDGET_STORAGE_KEY);
		if (!saved) return 0;
		const parsed = Number(saved);
		return Number.isFinite(parsed) ? parsed : 0;
	} catch (error) {
		console.error("Failed to load saved energy budget:", error);
		return 0;
	}
}
function SmartInsightsPage() {
	const appliances = loadSavedAppliances();
	const budget = loadSavedBudget();
	if (!(appliances.filter((appliance) => appliance.selected).length > 0)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-24 lg:pb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: " text-3xl font-bold",
			children: "Smart Insights"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-muted-foreground",
			children: "Understand your estimated energy usage, budget risk, cost drivers and potential savings opportunities."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rounded-2xl p-5 text-center sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl sm:h-14 sm:w-14 sm:text-2xl",
					children: "⚡"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-lg font-semibold sm:text-xl",
					children: "No energy profile available yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground",
					children: "Smart Insights uses your saved Smart Energy Planner configuration to analyse consumption, budget alignment and potential savings."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/energy",
					className: "mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto",
					children: "Build Your Energy Plan"
				})
			]
		})]
	});
	const profile = generateEnergyInsights(appliances, budget);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 px-4 pb-24 sm:px-0 lg:pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/energy",
					className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "←"
					}), "Back to Smart Energy Planner"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
					title: "Smart Insights",
					description: "Personalized analysis based on your saved Smart Energy Planner profile."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightSummaryCards, { profile }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BudgetRiskCard, { profile }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartInsightList, { insights: profile.insights }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavingsOpportunities, {
				opportunities: profile.savingsOpportunities,
				potentialMonthlySavings: profile.potentialMonthlySavings
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnergyBreakdownChart, { breakdown: profile.analysis.breakdown }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-primary/10 p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatteryCharging, { className: "h-6 w-6 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold sm:text-xl",
							children: "Need Backup Power?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-xl text-sm text-muted-foreground",
							children: "Based on your selected appliances and energy usage, PowerCheckNG can recommend the right inverter or generator for your home or business."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/backup",
						className: "inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 lg:w-auto",
						children: "Open Backup Advisor →"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-border bg-background/30 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-6 text-muted-foreground",
					children: "PowerCheckNG insights are estimates based on your configured appliance usage, selected quantities, daily runtime and the application's estimated electricity tariff. Actual electricity consumption and cost may vary."
				})
			})
		]
	});
}
//#endregion
export { SmartInsightsPage as component };
