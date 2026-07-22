import { o as __toESM } from "../_runtime.mjs";
import { x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { N as Clock, P as Clock3, c as ThumbsUp, w as MapPin } from "../_libs/lucide-react.mjs";
import { t as GlassCard } from "./GlassCard-tAHr1923.mjs";
import { t as SectionHeader } from "./SectionHeader-T1GRZ5JQ.mjs";
import { r as STATUS_STYLES, s as timeAgo } from "./outages.functions-pEPm8tn4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/powerAvailability-B75iIbGD.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function ConfidenceBar({ confidence }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: "Confidence"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-medium",
				children: [confidence, "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-2.5 overflow-hidden rounded-full bg-white/10",
			role: "progressbar",
			"aria-valuenow": confidence,
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `h-full origin-left rounded-full transition-all duration-500 ${confidence >= 80 ? "bg-green-500" : confidence >= 50 ? "bg-yellow-500" : "bg-red-500"}`,
				style: { width: `${confidence}%` }
			})
		})]
	});
}
function OutageCard({ outage }) {
	const cardConfidence = Math.min(100, 40 + outage.confirmations * 10);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		className: "p-4 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 break-words font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 shrink-0 text-primary" }), outage.area]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-0.5",
				children: outage.discoCode
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-xs font-medium uppercase tracking-wide ${STATUS_STYLES[outage.status]}`,
				children: outage.status.replace("_", " ")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 space-y-3 border-t border-border pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3" }), timeAgo(outage.startedAt)]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "size-3" }),
						outage.confirmations,
						" confirmed"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceBar, { confidence: cardConfidence })]
		})]
	});
}
function OutageList({ outages, title = "Recent Community Activity", subtitle = "Showing recent community reports", limit, showViewAll = true }) {
	const reports = typeof limit === "number" ? outages.slice(0, limit) : outages;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
		icon: Clock3,
		title,
		description: subtitle
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3",
		children: reports.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutageCard, { outage: o }, o.id))
	})] });
}
var periods = [
	{
		key: "overnight",
		label: "Overnight",
		timeRange: "12 AM – 5:59 AM",
		startHour: 0,
		endHour: 5
	},
	{
		key: "morning",
		label: "Morning",
		timeRange: "6 AM – 11:59 AM",
		startHour: 6,
		endHour: 11
	},
	{
		key: "afternoon",
		label: "Afternoon",
		timeRange: "12 PM – 5:59 PM",
		startHour: 12,
		endHour: 17
	},
	{
		key: "evening",
		label: "Evening",
		timeRange: "6 PM – 11:59 PM",
		startHour: 18,
		endHour: 23
	}
];
function analyzePowerAvailability(outages) {
	const analyticsPeriods = periods.map((period) => {
		const periodReports = outages.filter((outage) => {
			const reportDate = new Date(outage.startedAt);
			if (Number.isNaN(reportDate.getTime())) return false;
			const hour = reportDate.getHours();
			return hour >= period.startHour && hour <= period.endHour;
		});
		const powerOn = periodReports.filter((outage) => outage.status === "POWER_ON").length;
		const powerOff = periodReports.filter((outage) => outage.status === "POWER_OFF").length;
		const definiteReports = powerOn + powerOff;
		const availability = definiteReports === 0 ? 0 : Math.round(powerOn / definiteReports * 100);
		const sampleWeight = Math.min(definiteReports / 5, 1);
		const confidenceScore = Math.round(sampleWeight * 100);
		const weightedScore = Math.round(availability * sampleWeight);
		return {
			key: period.key,
			label: period.label,
			timeRange: period.timeRange,
			powerOn,
			powerOff,
			definiteReports,
			availability,
			confidenceScore,
			weightedScore
		};
	});
	const periodsWithData = analyticsPeriods.filter((period) => period.definiteReports > 0);
	const totalReports = analyticsPeriods.reduce((total, period) => total + period.definiteReports, 0);
	const strongestPeriod = periodsWithData.length > 0 ? periodsWithData.reduce((best, current) => current.weightedScore > best.weightedScore ? current : best) : null;
	const weakestPeriod = periodsWithData.length > 0 ? periodsWithData.reduce((worst, current) => current.weightedScore < worst.weightedScore ? current : worst) : null;
	const totalPowerOn = analyticsPeriods.reduce((total, period) => total + period.powerOn, 0);
	return {
		periods: analyticsPeriods,
		strongestPeriod,
		weakestPeriod,
		overallAvailability: totalReports > 0 ? Math.round(totalPowerOn / totalReports * 100) : 0,
		totalReports
	};
}
//#endregion
export { analyzePowerAvailability as n, OutageList as t };
