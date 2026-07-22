import { c as createServerFn } from "./createServerFn-C4XsUSXf.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DjSfRLtu.mjs";
import { i as stringType, n as numberType, r as objectType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/outages.functions-pEPm8tn4.js
function calculateDistance(lat1, lon1, lat2, lon2) {
	const R = 6371e3;
	const dLat = (lat2 - lat1) * Math.PI / 180;
	const dLon = (lon2 - lon1) * Math.PI / 180;
	const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}
function timeAgo(iso) {
	const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 6e4);
	if (mins < 60) return `${mins}m ago`;
	const h = Math.floor(mins / 60);
	if (h < 24) return `${h}h ago`;
	return `${Math.floor(h / 24)}d ago`;
}
var STATUS_STYLES = {
	REPORTED: "bg-warning/15 text-warning border-warning/30",
	CONFIRMED: "bg-destructive/15 text-destructive border-destructive/30",
	RESTORED: "bg-primary/15 text-primary border-primary/30",
	CANCELLED: "bg-muted text-muted-foreground border-border"
};
var CURRENT_POWER_WINDOW_MS = 360 * 60 * 1e3;
var POWER_PATTERN_WINDOW_MS = 720 * 60 * 60 * 1e3;
var listOutages = createServerFn({ method: "GET" }).handler(createSsrRpc("027f39d5a077c5983f1288f6878ed0eb5c8190f54be9e0dcca7b7b888fc2b5a2"));
createServerFn({ method: "GET" }).handler(createSsrRpc("8b20656891af8bf99f7bd92d9f1d9af4ba173401def4b9f1a60bd3166293f85e"));
var reportOutage = createServerFn({ method: "POST" }).validator((data) => objectType({
	area: stringType().min(2),
	discoCode: stringType().min(2),
	latitude: numberType(),
	longitude: numberType(),
	status: enumType([
		"POWER_OFF",
		"POWER_ON",
		"NOT_SURE"
	]),
	description: stringType().optional()
}).parse(data)).handler(createSsrRpc("19fd5ccf892cb5fc95f2cc80f97940917bf8717bdde15b32cfc6ee12bec44e49"));
//#endregion
export { listOutages as a, calculateDistance as i, POWER_PATTERN_WINDOW_MS as n, reportOutage as o, STATUS_STYLES as r, timeAgo as s, CURRENT_POWER_WINDOW_MS as t };
