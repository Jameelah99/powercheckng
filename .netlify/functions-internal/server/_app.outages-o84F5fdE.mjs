import { o as __toESM } from "./_runtime.mjs";
import { S as require_react, x as require_jsx_runtime } from "./_libs/@clerk/react+[...].mjs";
import { j as isRedirect, v as Link, x as useRouter } from "./_libs/@tanstack/react-router+[...].mjs";
import { D as LoaderCircle, I as CircleQuestionMark, N as Clock, O as Lightbulb, S as Map$1, Z as Activity, f as RefreshCcw, h as Plus, m as Power, n as X, o as TrendingUp, t as Zap, w as MapPin } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-CWGFYQBI.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-tAHr1923.mjs";
import { t as MetricCard } from "./_ssr/MetricCard-0ouLKx-0.mjs";
import { t as SectionHeader } from "./_ssr/SectionHeader-T1GRZ5JQ.mjs";
import { a as listOutages, n as POWER_PATTERN_WINDOW_MS, o as reportOutage } from "./_ssr/outages.functions-pEPm8tn4.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { n as resolveLocation, r as useCurrentLocation, t as calculateCommunityPower } from "./_ssr/communitypower-DWh2ymq8.mjs";
import { i as useQuery, n as queryOptions, o as useQueryClient, t as useMutation } from "./_libs/tanstack__react-query.mjs";
import { n as analyzePowerAvailability, t as OutageList } from "./_ssr/powerAvailability-B75iIbGD.mjs";
import { t as require_leaflet_src } from "./_libs/leaflet.mjs";
import { a as useMap, i as MapContainer, n as Popup, r as Marker, t as TileLayer } from "./_libs/react-leaflet.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.outages-o84F5fdE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var import_leaflet_src = /* @__PURE__ */ __toESM(require_leaflet_src());
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
function createMarker(status) {
	const markerClass = status === "POWER_ON" ? "community-marker community-marker-on" : status === "POWER_OFF" ? "community-marker community-marker-off" : "community-marker community-marker-unknown";
	return import_leaflet_src.default.divIcon({
		className: "",
		html: `
      <div class="${markerClass}">
        ⚡
      </div>
    `,
		iconSize: [44, 44],
		iconAnchor: [22, 22],
		popupAnchor: [0, -22]
	});
}
function buildCommunities(outages) {
	const communities = /* @__PURE__ */ new Map();
	const recentOutages = outages.filter((outage) => {
		const reportTime = new Date(outage.startedAt).getTime();
		if (Number.isNaN(reportTime)) return false;
		const reportAge = Date.now() - reportTime;
		return reportAge >= 0 && reportAge <= 216e5;
	});
	for (const outage of recentOutages) {
		const resolvedLocation = resolveLocation(outage.latitude, outage.longitude);
		const canonicalArea = resolvedLocation?.area ?? outage.area;
		const canonicalState = resolvedLocation?.state ?? "";
		const canonicalLatitude = resolvedLocation?.communityLatitude ?? outage.latitude;
		const canonicalLongitude = resolvedLocation?.communityLongitude ?? outage.longitude;
		const key = `${canonicalState}:${canonicalArea}`.trim().toLowerCase();
		if (!communities.has(key)) communities.set(key, {
			area: canonicalArea,
			state: canonicalState,
			latitude: canonicalLatitude,
			longitude: canonicalLongitude,
			reports: 0,
			powerOn: 0,
			powerOff: 0,
			notSure: 0,
			confidence: 0,
			status: "Needs Confirmation",
			lastUpdated: outage.startedAt
		});
		const community = communities.get(key);
		community.reports++;
		if (outage.status === "POWER_ON") community.powerOn++;
		if (outage.status === "POWER_OFF") community.powerOff++;
		if (outage.status === "NOT_SURE") community.notSure++;
		if (new Date(outage.startedAt).getTime() > new Date(community.lastUpdated).getTime()) community.lastUpdated = outage.startedAt;
	}
	for (const community of communities.values()) {
		const definiteReports = community.powerOn + community.powerOff;
		if (definiteReports === 0 || community.powerOn === community.powerOff) community.status = "Needs Confirmation";
		else if (community.powerOn > community.powerOff) community.status = "Power ON";
		else community.status = "Power OFF";
		const majority = Math.max(community.powerOn, community.powerOff);
		community.confidence = definiteReports > 0 ? Math.round(majority / definiteReports * 100) : 0;
	}
	return Array.from(communities.values()).sort((a, b) => b.reports - a.reports);
}
function timeAgo(iso) {
	if (!iso) return "recently";
	const timestamp = new Date(iso).getTime();
	if (Number.isNaN(timestamp)) return "recently";
	const mins = Math.floor((Date.now() - timestamp) / 6e4);
	if (mins < 1) return "just now";
	if (mins < 60) return `${mins} min${mins !== 1 ? "s" : ""} ago`;
	const hrs = Math.floor(mins / 60);
	if (hrs < 24) return `${hrs} hr${hrs !== 1 ? "s" : ""} ago`;
	const days = Math.floor(hrs / 24);
	return `${days} day${days !== 1 ? "s" : ""} ago`;
}
function CommunityMapPopup({ community }) {
	const statusColor = community.status === "Power ON" ? "text-green-600" : community.status === "Power OFF" ? "text-red-600" : "text-yellow-600";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-[240px] space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "text-base font-bold leading-tight",
				children: ["⚡ ", community.area]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusColor}`,
				children: community.status
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "Confidence"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium",
					children: [community.confidence, "%"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-2.5 overflow-hidden rounded-full bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-primary transition-all duration-500",
					style: { width: `${community.confidence}%` }
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"👥 ",
						community.reports,
						" report",
						community.reports !== 1 ? "s" : ""
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["🟢 ON: ", community.powerOn] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["🔴 OFF: ", community.powerOff] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["🟡 NOT SURE: ", community.notSure] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-xs text-muted-foreground",
				children: ["Updated ", timeAgo(community.lastUpdated)]
			})
		]
	});
}
function FitBounds({ communities }) {
	const map = useMap();
	(0, import_react.useEffect)(() => {
		if (communities.length === 0) return;
		const validCommunities = communities.filter((c) => typeof c.latitude === "number" && typeof c.longitude === "number" && !Number.isNaN(c.latitude) && !Number.isNaN(c.longitude));
		if (validCommunities.length === 0) return;
		if (validCommunities.length === 1) {
			map.setView([validCommunities[0].latitude, validCommunities[0].longitude], 13, { animate: true });
			return;
		}
		const bounds = import_leaflet_src.default.latLngBounds(validCommunities.map((c) => [c.latitude, c.longitude]));
		map.fitBounds(bounds, {
			padding: [40, 40],
			animate: true
		});
	}, [map, communities]);
	return null;
}
function CommunityPowerMap({ outages }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const communities = (0, import_react.useMemo)(() => buildCommunities(outages), [outages]);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-[320px] w-full items-center justify-center rounded-2xl bg-muted animate-pulse sm:h-[420px] lg:h-[520px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Loading community map..."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative z-0 overflow-hidden rounded-2xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MapContainer, {
			center: [9.082, 8.6753],
			zoom: 6,
			className: "h-[280px] sm:h-[380px] lg:h-[520px] w-full z-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileLayer, {
					attribution: "© OpenStreetMap contributors",
					url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FitBounds, { communities }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: communities.map((community) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marker, {
					position: [community.latitude, community.longitude],
					icon: createMarker(community.status === "Power ON" ? "POWER_ON" : community.status === "Power OFF" ? "POWER_OFF" : "NOT_SURE"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityMapPopup, { community }) })
				}, `${community.state}-${community.area}`)) })
			]
		})
	});
}
function LiveOutageMap({ outages }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		className: "overflow-hidden p-4 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			icon: Map$1,
			title: "Live Community Power Map",
			description: "Explore real-time community electricity reports across nearby areas."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 overflow-hidden rounded-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityPowerMap, { outages })
		})]
	});
}
function PowerStatusModal({ open, area, state, onClose, onSelect }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0D171B] p-5 shadow-2xl sm:rounded-3xl sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
						className: "text-primary",
						size: 22
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold leading-tight sm:text-xl",
						children: "Help Keep Your Community Informed"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6 text-muted-foreground",
					children: "PowerCheckNG relies on community reports to provide live electricity updates."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "rounded-lg p-2 transition-colors hover:bg-white/10",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-sm font-medium",
						children: "What is the current electricity status where you are?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onSelect("ON"),
								className: "w-full rounded-2xl min-h-[52px] bg-green-600 hover:bg-green-700 px-4 py-3 text-left transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Power ON"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onSelect("OFF"),
								className: "w-full rounded-2xl min-h-[52px] bg-red-600 hover:bg-red-700 py-3 px-4 text-left transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Power OFF"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onSelect("NOT_SURE"),
								className: "w-full rounded-2xl min-h-[52px] border border-border hover:border-primary py-3 px-4 text-left transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Not Sure"
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "mt-0.5 shrink-0 text-primary",
								size: 18
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold leading-tight",
								children: area || "Detecting area..."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: state || ""
							})] })]
						})
					})
				]
			})]
		})
	});
}
function OutageHeader({ onUpdateLocation, onRefresh, isRefreshing, isLocating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			icon: Zap,
			title: "Outage Tracker",
			description: "Live outage reports from your area. Confirm, report and stay informed\r\n          about your community's power status."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onUpdateLocation,
					disabled: isLocating,
					className: "inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 h-11 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto glow-primary",
					children: [isLocating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), isLocating ? "Getting Location..." : "Update My Power Status"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/history",
					className: "inline-flex w-full items-center justify-center rounded-2xl border border-border px-4 h-11 text-sm font-medium transition hover:bg-accent/20 sm:w-auto",
					children: "Report History"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onRefresh,
					disabled: isRefreshing,
					title: "Refresh reports",
					className: "inline-flex h-11 w-full items-center justify-center rounded-2xl border border-border transition hover:bg-accent/20 disabled:opacity-70 sm:h-11 sm:w-11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, {
						size: 18,
						className: isRefreshing ? "animate-spin" : ""
					})
				})
			]
		})]
	});
}
function CommunityStats({ outages }) {
	const today = (/* @__PURE__ */ new Date()).toDateString();
	const reportsToday = outages.filter((outage) => new Date(outage.startedAt).toDateString() === today);
	const powerOffToday = reportsToday.filter((outage) => outage.status === "POWER_OFF").length;
	const powerOnToday = reportsToday.filter((outage) => outage.status === "POWER_ON").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		className: "p-4 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			icon: Activity,
			title: "Today's Community Reports",
			description: "A quick overview of electricity reports submitted by the community today."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					title: "Reports Today",
					value: reportsToday.length
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					title: "Power OFF",
					value: powerOffToday,
					valueClassName: "text-red-500"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					title: "Power ON",
					value: powerOnToday,
					valueClassName: "text-green-500"
				})
			]
		})]
	});
}
function useOutageReporting({ onSuccess } = {}) {
	const router = useRouter();
	const queryClient = useQueryClient();
	const submitFn = useServerFn(reportOutage);
	const mutation = useMutation({
		mutationFn: async (values) => {
			return await submitFn({ data: values });
		},
		onSuccess: async (result) => {
			if (!result) {
				toast.error("Server returned no response.");
				return;
			}
			if (!result.success) {
				toast.warning(result.message);
				return;
			}
			if (!result.outage) {
				toast.error("No outage information returned.");
				return;
			}
			toast.success(`Power status reported for ${result.outage.area}`);
			await queryClient.invalidateQueries({
				queryKey: ["outages"],
				refetchType: "all"
			});
			await router.invalidate();
			onSuccess?.();
		},
		onError: (err) => {
			console.error("Failed to submit outage report", err);
			const message = err instanceof Error ? err.message : "Failed to submit power status";
			toast.error(message);
		}
	});
	return {
		submit: mutation.mutate,
		submitAsync: mutation.mutateAsync,
		isSubmitting: mutation.isPending
	};
}
function PowerAvailabilityOutlook({ outages, area }) {
	if (!area) return null;
	const windowStart = Date.now() - POWER_PATTERN_WINDOW_MS;
	const { strongestPeriod, overallAvailability, totalReports } = analyzePowerAvailability(outages.filter((outage) => {
		const startedAt = new Date(outage.startedAt).getTime();
		if (Number.isNaN(startedAt)) return false;
		return outage.area.trim().toLowerCase() === area.trim().toLowerCase() && startedAt >= windowStart;
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			icon: TrendingUp,
			badge: "Community Power Outlook",
			title: "30-Day Power Outlook",
			description: `A community-supported view of recent electricity availability patterns in ${area}.`
		}), !strongestPeriod ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl border border-border bg-muted/30 p-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Not enough confirmed reports yet"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm leading-6 text-muted-foreground",
					children: [
						"PowerCheckNG needs more Power ON or Power OFF reports from ",
						area,
						" ",
						"",
						"before a recent availability outlook can be generated."
					]
				})] })]
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-primary/20 bg-primary/5 p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Strongest community-supported period"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-2xl font-bold sm:text-3xl",
							children: strongestPeriod.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: [
								"Community reports indicate",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-foreground",
									children: [strongestPeriod.availability, "% reported availability"]
								}),
								" ",
								"during the",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: strongestPeriod.label.toLowerCase()
								}),
								" ",
								"period over the last 30 days."
							]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-background/30 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Confirmed Reports"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-3xl font-bold",
							children: totalReports
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: ["Overall availability:", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium text-foreground",
								children: [
									" ",
									overallAvailability,
									"%"
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-background/30 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: [strongestPeriod.label, " Reports"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-3xl font-bold",
							children: strongestPeriod.definiteReports
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [
								strongestPeriod.powerOn,
								" ON • ",
								strongestPeriod.powerOff,
								" OFF"
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 rounded-2xl border border-border bg-background/30 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "PowerCheckNG Insight"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm leading-6 text-muted-foreground",
					children: [
						"Based on community reports collected over the last 30 days, electricity has been reported most consistently during the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: strongestPeriod.label.toLowerCase()
						}),
						" ",
						"period."
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-dashed border-border/60 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-6 text-muted-foreground",
					children: "This outlook is generated from community-submitted Power ON and Power OFF reports over the last 30 days. It reflects historical reporting trends and should be used as guidance rather than a guaranteed electricity forecast."
				})
			})
		] })]
	}) });
}
var outagesQO = queryOptions({
	queryKey: ["outages"],
	queryFn: () => listOutages(),
	staleTime: 3e4,
	refetchInterval: 6e4
});
function OutagesPage() {
	const { data, refetch, isFetching, isPending } = useQuery(outagesQO);
	const outages = data?.outages ?? [];
	const { location, showPowerModal, setShowPowerModal, getCurrentLocation, isLocating } = useCurrentLocation();
	const reportPower = useOutageReporting();
	const { reportCount, confidence, currentStatus } = calculateCommunityPower(location, outages);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 px-4 pb-24 sm:px-0 lg:pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutageHeader, {
				onUpdateLocation: getCurrentLocation,
				onRefresh: refetch,
				isRefreshing: isFetching,
				isLocating
			}),
			isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-border bg-card/40 px-4 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Loading community power reports..."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Your Area"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold mt-1",
						children: location.area
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: location.state
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `font-bold text-lg ${currentStatus === "Power ON" ? "text-green-500" : currentStatus === "Power OFF" ? "text-red-500" : "text-yellow-500"}`,
						children: currentStatus
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-semibold",
							children: [
								"Confidence: ",
								confidence,
								"%"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								reportCount,
								" recent community ",
								reportCount === 1 ? "report" : "reports"
							]
						})]
					})]
				})]
			}) }),
			!isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityStats, { outages }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveOutageMap, { outages }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerAvailabilityOutlook, {
					outages,
					area: location.area
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutageList, {
					outages,
					limit: 10
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/history",
						className: "inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90",
						children: "View Full Report History →"
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerStatusModal, {
				open: showPowerModal,
				area: location.area,
				state: location.state,
				onClose: () => setShowPowerModal(false),
				onSelect: (status) => {
					reportPower.submit({
						area: location.area,
						discoCode: location.discoCode,
						latitude: location.latitude,
						longitude: location.longitude,
						rawLatitude: location.latitude,
						rawLongitude: location.longitude,
						status: status === "OFF" ? "POWER_OFF" : status === "ON" ? "POWER_ON" : "NOT_SURE",
						description: `Community reported: ${status}`
					});
					setShowPowerModal(false);
				}
			})
		]
	});
}
//#endregion
export { OutagesPage as component };
