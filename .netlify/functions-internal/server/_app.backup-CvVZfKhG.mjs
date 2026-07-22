import { o as __toESM } from "./_runtime.mjs";
import { S as require_react, x as require_jsx_runtime } from "./_libs/@clerk/react+[...].mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./_ssr/button-kArZv4Hk.mjs";
import { A as Info, B as ChevronDown, F as CircleX, G as Brain, J as ArrowUpRight, L as CircleCheck, X as ArrowLeft, d as ShieldCheck, g as PlugZap, j as Fuel, o as TrendingUp, q as BatteryCharging, r as Wallet } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-CWGFYQBI.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-tAHr1923.mjs";
import { t as MetricCard } from "./_ssr/MetricCard-0ouLKx-0.mjs";
import { t as SectionHeader } from "./_ssr/SectionHeader-T1GRZ5JQ.mjs";
import { n as GENERATOR_SYSTEMS, r as buildBackupAdvisor, t as BACKUP_SYSTEMS } from "./_ssr/backupAdvisor-C9obCMo6.mjs";
import { n as loadSavedAppliances, t as loadEnergyAnalysis } from "./_ssr/energyStorage-CoGla4sz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.backup-CvVZfKhG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function BackupHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		icon: BatteryCharging,
		title: "Power Backup Advisor",
		description: "Based on your Smart Energy Plan, PowerCheckNG review your backup readiness, estimates your backup power requirements,\r\n            and recommends an inverter system, battery configuration, and estimated investment range tailored\r\n            to your household's energy profile."
	}) });
}
function buildBackupDisplayModel(technology, inverter, generator) {
	const hybridSuitability = Math.round((inverter.suitability + generator.suitability) / 2);
	const hybridConfidence = hybridSuitability >= 90 ? "High" : hybridSuitability >= 75 ? "Good" : hybridSuitability >= 60 ? "Limited" : "Low";
	switch (technology) {
		case "GENERATOR": return {
			system: generator.name,
			runtime: "Unlimited (Fuel Dependent)",
			cost: generator.estimatedCost,
			capacity: generator.maxLoad,
			confidence: generator.suitability >= 90 ? "High" : generator.suitability >= 75 ? "Good" : generator.suitability >= 60 ? "Limited" : "Low",
			suitability: generator.suitability,
			reason: generator.reason,
			upgradeAdvice: "If your power demand increases in the future, consider moving to a higher-capacity generator or a hybrid backup system for greater flexibility and longer-term reliability.",
			items: [
				"✓ Generator",
				"✓ Initial fuel",
				"✓ Basic installation materials",
				"✓ Standard electrical accessories"
			],
			note: "Actual costs depend on generator brand, fuel type, installation requirements, and current market prices."
		};
		case "HYBRID": return {
			system: "Hybrid Backup System",
			runtime: `${inverter.estimatedRuntime} Hours + Generator`,
			cost: inverter.estimatedCost + generator.estimatedCost,
			capacity: Math.max(inverter.maxLoad, generator.maxLoad),
			confidence: hybridConfidence,
			suitability: hybridSuitability,
			reason: "A hybrid backup system offers the best balance for your energy needs. The inverter efficiently powers your everyday essential appliances during shorter outages, while the generator provides additional support whenever higher loads or prolonged outages occur.",
			upgradeAdvice: "This configuration already provides excellent flexibility. Future upgrades can focus on increasing battery storage or integrating renewable energy such as solar panels.",
			items: [
				"✓ Inverter",
				"✓ Battery configuration",
				"✓ Generator",
				"✓ Installation materials"
			],
			note: "Hybrid systems combine inverter and generator costs, providing greater flexibility and reliability."
		};
		default: return {
			system: inverter.inverter,
			runtime: `${inverter.estimatedRuntime} Hours`,
			cost: inverter.estimatedCost,
			capacity: inverter.maxLoad,
			confidence: inverter.suitability >= 90 ? "High" : inverter.suitability >= 75 ? "Good" : inverter.suitability >= 60 ? "Limited" : "Low",
			suitability: inverter.suitability,
			reason: inverter.reason,
			upgradeAdvice: inverter.maxLoad < 1500 ? "If you expect to add more appliances in the future, consider upgrading to a larger inverter system when your electricity demand increases." : inverter.maxLoad < 2500 ? "This system provides some room for expansion. If you later add heavy appliances such as an Air Conditioner or Chest Freezer, consider moving to the next inverter size." : "This recommendation already provides substantial capacity for future expansion based on your current energy profile.",
			items: [
				"✓ Inverter",
				"✓ Recommended battery configuration",
				"✓ Basic installation materials",
				"✓ Standard electrical accessories"
			],
			note: "Actual costs depend on inverter brand, battery technology, installation complexity, and current market prices."
		};
	}
}
function BackupSummary({ bestTechnology, inverter, generator }) {
	const display = buildBackupDisplayModel(bestTechnology, inverter, generator);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
				title: "Recommended System",
				value: display.system,
				valueClassName: "mt-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
				title: "Estimated Backup",
				value: display.runtime,
				valueClassName: "mt-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
				title: "Estimated Cost",
				value: `₦${display.cost.toLocaleString()}`,
				valueClassName: "mt-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
				title: "Estimated Capacity",
				value: `${display.capacity}W`,
				valueClassName: "text-primary mt-3"
			})
		]
	});
}
function BackupReadinessCard({ score }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: BatteryCharging,
				title: "Backup Readiness"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xl font-bold leading-none sm:text-2xl",
					children: [score, "%"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-lg font-bold leading-6 sm:text-xl ${score >= 90 ? "text-green-500" : score >= 75 ? "text-primary" : score >= 60 ? "text-yellow-500" : "text-red-500"}`,
					children: score >= 90 ? "Excellent" : score >= 75 ? "Good" : score >= 60 ? "Fair" : "Needs Improvement"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[13px] leading-6 text-muted-foreground sm:text-sm",
				children: "Overall preparedness for power outages."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-3 overflow-hidden rounded-full bg-muted/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-primary transition-all duration-700",
					style: { width: `${score}%` }
				})
			})
		]
	}) });
}
function BackupRecommendation({ bestTechnology, inverter, generator, readinessScore }) {
	const display = buildBackupDisplayModel(bestTechnology, inverter, generator);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: Brain,
				title: "PowerCheckNG Recommendation",
				description: "An explanation of why this backup system was recommended."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] leading-6 text-muted-foreground sm:text-sm lg:text-base",
					children: display.reason
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 lg:grid-cols-2 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					icon: ShieldCheck,
					iconSize: "sm",
					compact: true,
					title: "Recommendation Confidence",
					value: display.confidence,
					subtitle: `Suitability Score: ${display.suitability}%`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					icon: TrendingUp,
					iconSize: "sm",
					compact: true,
					title: "Backup Readiness",
					value: `${readinessScore}/100`,
					subtitle: "Based on your selected essential appliances."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border p-4 sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
					children: "Future Upgrade Advice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[13px] leading-6 text-muted-foreground sm:text-sm lg:text-base",
					children: display.upgradeAdvice
				})]
			})
		]
	}) });
}
function BackupCostBreakdown({ bestTechnology, inverter, generator }) {
	const display = buildBackupDisplayModel(bestTechnology, inverter, generator);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: Wallet,
				title: "Estimated Investment",
				description: "An approximate cost for the recommended backup system."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
						children: "Estimated System Cost"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mt-2 break-words text-xl font-bold leading-tight text-primary sm:text-2xl",
						children: ["₦", display.cost.toLocaleString()]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[13px] leading-6 text-muted-foreground sm:text-sm",
						children: "This estimate is intended as a planning guide rather than a fixed quotation."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
					children: "This estimate typically includes:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-3 text-[13px] leading-6 text-muted-foreground sm:text-sm",
					children: display.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })
					}, item))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border p-4 sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base font-semibold",
						children: "Final price may vary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[13px] leading-6 text-muted-foreground sm:text-sm",
						children: display.note
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-5 text-muted-foreground",
				children: "PowerCheckNG provides an estimated investment to help with planning. Obtain quotations from qualified installers before making a purchase."
			})
		]
	}) });
}
function CanItPowerCard({ appliances, bestTechnology, inverter, generator }) {
	const maxLoad = bestTechnology === "GENERATOR" ? generator.maxLoad : bestTechnology === "HYBRID" ? Math.max(inverter.maxLoad, generator.maxLoad) : inverter.maxLoad;
	const selected = appliances.filter((appliance) => appliance.selected);
	const supported = [];
	const unsupported = [];
	let runningLoad = 0;
	for (const appliance of selected) {
		const load = appliance.watts * appliance.quantity;
		if (runningLoad + load <= maxLoad) {
			supported.push(appliance);
			runningLoad += load;
		} else unsupported.push(appliance);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: PlugZap,
				title: "Can This Backup Power My Appliances?",
				description: "Based on your selected appliances and the recommended backup system."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[13px] leading-6 text-muted-foreground sm:text-sm lg:text-base",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: supported.length
						}),
						" appliance",
						supported.length !== 1 ? "s" : "",
						" can run safely, while",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: unsupported.length
						}),
						" may overload the recommended backup system."
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-background/40 p-4 sm:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-muted/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 shrink-0 text-green-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-medium uppercase tracking-wide text-green-500",
								children: "Supported"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-500",
							children: supported.length
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: supported.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] leading-6 text-muted-foreground sm:text-sm",
							children: "No appliances."
						}) : supported.map((appliance) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0 text-green-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium leading-6",
								children: appliance.name
							})]
						}, appliance.id))
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-background/40 p-4 sm:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-muted/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-5 w-5 shrink-0 text-red-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-medium uppercase tracking-wide text-red-500",
								children: "May Overload"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-semibold text-red-500",
							children: unsupported.length
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: unsupported.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] leading-6 text-muted-foreground sm:text-sm",
							children: "None"
						}) : unsupported.map((appliance) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4 shrink-0 text-red-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium leading-6",
								children: appliance.name
							})]
						}, appliance.id))
					})]
				}) })]
			})
		]
	}) });
}
function BackupOptionCard({ title, subtitle, cost, maxLoad, recommended = false, recommendation }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-2xl border p-4 transition-all duration-200 sm:p-5 ${recommended ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-border hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base font-semibold leading-6",
						children: title
					}), recommended && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground",
						children: "✓ Recommended"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[13px] leading-6 text-muted-foreground sm:text-sm",
					children: subtitle
				})]
			}), (cost || maxLoad) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:text-right",
				children: [cost && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-lg font-bold leading-none sm:text-xl",
					children: ["₦", cost.toLocaleString()]
				}), maxLoad && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs leading-5 text-muted-foreground",
					children: [
						"Max Load ",
						maxLoad,
						"W"
					]
				})]
			})]
		}), !recommended && recommendation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex items-start gap-2 text-[13px] leading-6 text-muted-foreground sm:text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: recommendation })]
		})]
	});
}
function BackupOptionSection({ title, open, onToggle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden rounded-2xl border border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onToggle,
			className: "flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-200 hover:bg-muted/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold uppercase tracking-wide text-muted-foreground",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-primary" : "text-muted-foreground"}` })]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4 border-t border-border p-4",
			children
		})]
	});
}
function AlternativeBackupOptions({ bestTechnology, inverter, generator }) {
	const [openSection, setOpenSection] = (0, import_react.useState)(bestTechnology === "GENERATOR" ? "generator" : bestTechnology === "HYBRID" ? "hybrid" : "inverter");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: "Alternative Backup Solutions",
				description: "Explore alternative backup solutions for different power needs and budgets."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupOptionSection, {
				title: `Inverter Backup Options (${BACKUP_SYSTEMS.length})`,
				open: openSection === "inverter",
				onToggle: () => setOpenSection(openSection === "inverter" ? null : "inverter"),
				children: BACKUP_SYSTEMS.map((system) => {
					const recommended = bestTechnology !== "GENERATOR" && system.inverter === inverter.inverter;
					const recommendation = system.maxLoad <= 500 ? "Ideal for lighting, fans and basic entertainment." : system.maxLoad <= 1e3 ? "Suitable for small homes and essential appliances." : system.maxLoad <= 1800 ? "Recommended for medium households with moderate power demand." : "Designed for larger homes with higher backup requirements.";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupOptionCard, {
						title: system.inverter,
						subtitle: `Battery: ${system.battery}`,
						cost: system.estimatedCost,
						maxLoad: system.maxLoad,
						recommended,
						recommendation
					}, system.inverter);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupOptionSection, {
				title: `Generator Backup Options (${GENERATOR_SYSTEMS.length})`,
				open: openSection === "generator",
				onToggle: () => setOpenSection(openSection === "generator" ? null : "generator"),
				children: GENERATOR_SYSTEMS.map((system) => {
					const recommended = bestTechnology === "GENERATOR" && system.name === generator.name;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupOptionCard, {
						title: system.name,
						subtitle: `Fuel: ${system.fuelCost}`,
						cost: system.estimatedCost,
						maxLoad: system.maxLoad,
						recommended,
						recommendation: "Suitable for longer outages and heavier electrical loads."
					}, system.name);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupOptionSection, {
				title: "Hybrid Backup System (1)",
				open: openSection === "hybrid",
				onToggle: () => setOpenSection(openSection === "hybrid" ? null : "hybrid"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupOptionCard, {
					title: "Inverter + Generator",
					subtitle: "Combines an inverter for efficient daily backup with a generator for extended outages and higher electrical demand.",
					recommended: bestTechnology === "HYBRID"
				})
			})
		]
	}) });
}
function BestBackupSolutionCard({ technology, inverter, generator, essentialApplianceCount }) {
	const isGenerator = technology === "GENERATOR";
	const isHybrid = technology === "HYBRID";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: isGenerator ? Fuel : BatteryCharging,
				title: "Recommended Backup Solution"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "break-words text-xl font-bold leading-tight sm:text-2xl",
				children: isGenerator ? generator.name : isHybrid ? "Hybrid Backup System" : inverter.inverter
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[13px] leading-6 text-muted-foreground sm:text-sm lg:text-base",
					children: [
						isGenerator && "Based on your energy profile, a generator offers the best balance between purchase cost, starting power and long-duration backup.",
						technology === "INVERTER" && "Your energy demand is well suited to an inverter system, providing quiet operation and low running costs.",
						isHybrid && "A hybrid solution combines the efficiency of an inverter with the reliability of a generator for heavy appliances and extended outages."
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-background/40 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 text-xs font-medium uppercase tracking-wide text-muted-foreground",
					children: "System Specifications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-background p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
								children: "Battery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-lg font-bold leading-none sm:text-xl",
								children: isGenerator ? "Not Required" : isHybrid ? `${inverter.battery} + Generator` : inverter.battery
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-background p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase text-muted-foreground",
								children: "Runtime"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-lg font-bold leading-none sm:text-xl",
								children: isGenerator ? "Unlimited (with fuel)" : `${inverter.estimatedRuntime} hrs`
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-background p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase text-muted-foreground",
								children: "Suitability"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-lg font-bold leading-none sm:text-xl text-green-500",
								children: isGenerator ? "100%" : `${inverter.suitability}%`
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-background/40 p-4 sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
					children: "Backup sizing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[13px] leading-6 text-muted-foreground sm:text-sm lg:text-base",
					children: essentialApplianceCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"This recommendation is based on",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: essentialApplianceCount
						}),
						" ",
						"appliance",
						essentialApplianceCount === 1 ? "" : "s",
						" marked for use during power outages."
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "No appliances were marked for use during power outages, so PowerCheckNG assumed you want to back up all selected appliances." })
				})]
			})
		]
	}) });
}
function BackupPage() {
	const analysis = loadEnergyAnalysis();
	const appliances = loadSavedAppliances() ?? [];
	if (!analysis) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-24 lg:space-y-10 lg:pb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/insights",
				className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: "←"
				}), "Back to Smart Insights"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 text-center sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold sm:text-3xl",
						children: "No Energy Plan Found"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base",
						children: "Build your Smart Energy Plan first before requesting a backup recommendation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/energy",
						className: "mt-6 inline-flex w-full justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:opacity-90 sm:w-auto",
						children: "Open Energy Planner"
					})
				]
			})
		})]
	});
	const advisor = buildBackupAdvisor(analysis);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 px-4 pb-24 sm:px-0 lg:pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupSummary, {
				bestTechnology: advisor.bestTechnology,
				inverter: advisor.recommendation,
				generator: advisor.generatorRecommendation
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupReadinessCard, { score: advisor.readinessScore }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BestBackupSolutionCard, {
				technology: advisor.bestTechnology,
				inverter: advisor.recommendation,
				generator: advisor.generatorRecommendation,
				essentialApplianceCount: analysis.essentialApplianceCount
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupRecommendation, {
				bestTechnology: advisor.bestTechnology,
				inverter: advisor.recommendation,
				generator: advisor.generatorRecommendation,
				readinessScore: advisor.readinessScore
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CanItPowerCard, {
				appliances,
				bestTechnology: advisor.bestTechnology,
				inverter: advisor.recommendation,
				generator: advisor.generatorRecommendation
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackupCostBreakdown, {
				bestTechnology: advisor.bestTechnology,
				inverter: advisor.recommendation,
				generator: advisor.generatorRecommendation
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlternativeBackupOptions, {
				bestTechnology: advisor.bestTechnology,
				inverter: advisor.recommendation,
				generator: advisor.generatorRecommendation
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/energy",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						className: "w-full max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Back to Smart Energy Planner"]
					})
				})
			})
		]
	});
}
//#endregion
export { BackupPage as component };
