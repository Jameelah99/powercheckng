import { o as __toESM } from "./_runtime.mjs";
import { S as require_react, x as require_jsx_runtime } from "./_libs/@clerk/react+[...].mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { B as ChevronDown, U as ChartColumn } from "./_libs/lucide-react.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-tAHr1923.mjs";
import { t as SectionHeader } from "./_ssr/SectionHeader-T1GRZ5JQ.mjs";
import { a as listOutages } from "./_ssr/outages.functions-pEPm8tn4.mjs";
import { n as queryOptions, r as useSuspenseQuery } from "./_libs/tanstack__react-query.mjs";
import { n as analyzePowerAvailability, t as OutageList } from "./_ssr/powerAvailability-B75iIbGD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.history-CkZNHIsl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function HistoryFilters({ search, onSearchChange, disco, onDiscoChange, discos, status, onStatusChange, statuses, onClearFilters, date, onDateChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sticky top-0 z-40 -mx-4 border-b border-border bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:mx-0 sm:rounded-2xl sm:border sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				placeholder: "🔍 Search by area...",
				value: search,
				onChange: (e) => onSearchChange(e.target.value),
				className: "\r\n      flex-1\r\n      rounded-2xl\r\n      border\r\n      border-border\r\n      bg-background/50\r\n      px-4\r\n      py-3\r\n      outline-none\r\n      mb-3\r\n      focus:border-primary\r\n    "
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClearFilters,
				className: "w-full rounded-2xl border border-border px-4 py-3 hover:bg-white/5 sm:w-auto mb-3",
				children: "Clear"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-3 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: status,
						onChange: (e) => onStatusChange(e.target.value),
						className: "w-full\r\n            appearance-none\r\n            rounded-2xl\r\n            border\r\n            border-border\r\n            bg-background/50\r\n            px-4\r\n            py-3\r\n            pr-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All Status"
						}), statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: s,
							children: s
						}, s))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "\r\n        pointer-events-none\r\n        absolute\r\n        right-4\r\n        top-1/2\r\n        -translate-y-1/2\r\n        size-5\r\n        text-muted-foreground\r\n    " })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: disco,
						onChange: (e) => onDiscoChange(e.target.value),
						className: "w-full\r\n            appearance-none\r\n            rounded-2xl\r\n            border\r\n            border-border\r\n            bg-background/50\r\n            px-4\r\n            py-3\r\n            pr-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "All DisCos"
						}), discos.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: d,
							children: d
						}, d))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "\r\n        pointer-events-none\r\n        absolute\r\n        right-4\r\n        top-1/2\r\n        -translate-y-1/2\r\n        size-5\r\n        text-muted-foreground\r\n    " })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						value: date,
						onChange: (e) => onDateChange(e.target.value),
						className: "w-full rounded-2xl border border-border bg-background/50 px-3 py-3 [color-scheme:dark]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Filter reports by date."
					})]
				})
			]
		})]
	});
}
function HistoricalPowerPattern({ outages }) {
	const { periods, strongestPeriod, totalReports, overallAvailability } = analyzePowerAvailability(outages);
	if (totalReports === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "text-xl font-bold",
		children: "Historical Power Pattern"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 text-sm text-muted-foreground",
		children: "There are not enough confirmed community reports to identify a historical power availability pattern yet."
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				icon: ChartColumn,
				badge: "Community Power Analytics",
				title: "Historical Power Pattern",
				description: "Based on confirmed community reports from the last 30 days."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-background/30 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wide text-muted-foreground",
						children: "Overall Availability"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-3xl font-bold",
						children: [overallAvailability, "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-background/30 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wide text-muted-foreground",
						children: "Reports Analysed"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-3xl font-bold",
						children: totalReports
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-5",
				children: periods.map((period) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 rounded-2xl border border-border bg-background/30 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: period.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: period.timeRange
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold",
									children: period.definiteReports > 0 ? `Availability: ${period.availability}%` : "No data"
								}), period.definiteReports > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [period.definiteReports, " reports"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-4 rounded-full bg-muted overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-primary origin-left transition-all duration-700",
								style: { width: `${period.availability}%` }
							})
						}),
						period.definiteReports > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["ON: ", period.powerOn] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["OFF: ", period.powerOff] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Confidence: ",
									period.confidenceScore,
									"%"
								] })
							]
						})
					]
				}, period.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-primary/20 bg-primary/5 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wide text-primary",
					children: "Community Pattern Summary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm leading-7 text-muted-foreground",
					children: [
						"Community reports from the last 30 days suggest that electricity has been most consistently available during the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: strongestPeriod?.label.toLowerCase()
						}),
						" ",
						"period. Overall reported availability across all confirmed reports is",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-foreground",
							children: [overallAvailability, "%"]
						}),
						"."
					]
				})]
			})
		]
	}) });
}
var REPORTS_PER_PAGE = 12;
var outagesQO = queryOptions({
	queryKey: ["outages"],
	queryFn: () => listOutages()
});
function HistoryPage() {
	const { data } = useSuspenseQuery(outagesQO);
	const [visibleCount, setVisibleCount] = (0, import_react.useState)(REPORTS_PER_PAGE);
	const [search, setSearch] = (0, import_react.useState)("");
	const [disco, setDisco] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("");
	const [date, setDate] = (0, import_react.useState)("");
	const clearFilters = () => {
		setSearch("");
		setDisco("");
		setStatus("");
		setDate("");
	};
	(0, import_react.useEffect)(() => {
		setVisibleCount(REPORTS_PER_PAGE);
	}, [
		search,
		disco,
		status,
		date
	]);
	const discos = Array.from(new Set(data.outages.map((outage) => outage.discoCode)));
	const statuses = Array.from(new Set(data.outages.map((outage) => outage.status)));
	const filteredReports = data.outages.filter((outage) => {
		const matchesSearch = outage.area.toLowerCase().includes(search.toLowerCase());
		const matchesDisco = !disco || outage.discoCode === disco;
		const matchesStatus = !status || outage.status === status;
		const matchesDate = !date || outage.startedAt.startsWith(date);
		return matchesSearch && matchesDisco && matchesStatus && matchesDate;
	});
	const reportsForAnalytics = filteredReports.length > 0 ? filteredReports : data.outages;
	const visibleReports = filteredReports.slice(0, visibleCount);
	const hasMoreReports = visibleCount < filteredReports.length;
	const totalReports = data.outages.length;
	const powerOffReports = data.outages.filter((outage) => outage.status === "POWER_OFF").length;
	const powerOnReports = data.outages.filter((outage) => outage.status === "POWER_ON").length;
	const notSureReports = data.outages.filter((outage) => outage.status === "NOT_SURE").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/outages",
					className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "←"
					}), "Back to Outage Tracker"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold sm:text-3xl",
						children: "Community Report History"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base",
						children: "Browse previous community reports submitted across Nigeria."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Total Reports"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl sm:text-4xl font-bold mt-2",
							children: totalReports
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Power OFF Reports"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl sm:text-4xl font-bold mt-2 text-red-500",
							children: powerOffReports
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Power ON Reports"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold mt-2 text-green-500",
							children: powerOnReports
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Not Sure Reports"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl sm:text-4xl font-bold mt-2 text-yellow-500",
							children: notSureReports
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoricalPowerPattern, { outages: reportsForAnalytics }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryFilters, {
				search,
				onSearchChange: setSearch,
				disco,
				onDiscoChange: setDisco,
				discos,
				status,
				onStatusChange: setStatus,
				statuses,
				onClearFilters: clearFilters,
				date,
				onDateChange: setDate
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutageList, {
				outages: visibleReports,
				title: "Community Report History",
				subtitle: `Showing ${visibleReports.length} of ${filteredReports.length} reports`,
				showViewAll: false
			}),
			hasMoreReports && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setVisibleCount((current) => current + REPORTS_PER_PAGE),
					className: "w-full rounded-2xl border border-primary/30 px-6 py-3 font-medium text-primary transition hover:bg-primary/10 sm:w-auto",
					children: "Load More Reports"
				})
			})
		]
	});
}
//#endregion
export { HistoryPage as component };
