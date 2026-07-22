import { c as createServerFn } from "./createServerFn-C4XsUSXf.mjs";
import { i as stringType, n as numberType, r as objectType, t as enumType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-Cze4CWwo.mjs";
import { t as auth } from "./auth-E27mcwqq.mjs";
import { t as clerkClient } from "./clerkClient-C_-qCWCd.mjs";
import { PrismaClient } from "@prisma/client";
//#region node_modules/.nitro/vite/services/ssr/assets/outages.functions-BoWM0yDO.js
var prisma = globalThis.__prisma ?? new PrismaClient({ log: ["error"] });
async function requireUserId() {
	const { userId } = await auth();
	if (!userId) throw new Response("Unauthorized", { status: 401 });
	return userId;
}
/**
* Ensure a `User` row exists for the current Clerk user. Foreign keys on
* OutageReport / ConsumptionReading / Invoice etc. require this row to exist
* before inserts.
*/
async function ensureUser(userId) {
	const existing = await prisma.user.findUnique({ where: { id: userId } });
	if (existing) return existing;
	const u = await (await clerkClient()).users.getUser(userId);
	const email = u.primaryEmailAddress?.emailAddress ?? u.emailAddresses[0]?.emailAddress ?? `${userId}@clerk.local`;
	const fullName = [u.firstName, u.lastName].filter(Boolean).join(" ").trim() || null;
	return prisma.user.upsert({
		where: { id: userId },
		update: {},
		create: {
			id: userId,
			email,
			fullName,
			avatarUrl: u.imageUrl ?? null
		}
	});
}
function serializeOutage(o) {
	return {
		id: o.id,
		area: o.area,
		discoCode: o.discoCode,
		latitude: o.latitude,
		longitude: o.longitude,
		status: o.status,
		startedAt: o.startedAt.toISOString(),
		confirmations: o.confirmations
	};
}
var listOutages_createServerFn_handler = createServerRpc({
	id: "027f39d5a077c5983f1288f6878ed0eb5c8190f54be9e0dcca7b7b888fc2b5a2",
	name: "listOutages",
	filename: "src/lib/outage/outages.functions.ts"
}, (opts) => listOutages.__executeServer(opts));
var listOutages = createServerFn({ method: "GET" }).handler(listOutages_createServerFn_handler, async () => {
	return { outages: (await prisma.outageReport.findMany({
		orderBy: { startedAt: "desc" },
		take: 100
	})).map(serializeOutage) };
});
var listOutageHistory_createServerFn_handler = createServerRpc({
	id: "8b20656891af8bf99f7bd92d9f1d9af4ba173401def4b9f1a60bd3166293f85e",
	name: "listOutageHistory",
	filename: "src/lib/outage/outages.functions.ts"
}, (opts) => listOutageHistory.__executeServer(opts));
var listOutageHistory = createServerFn({ method: "GET" }).handler(listOutageHistory_createServerFn_handler, async () => {
	return {
		outages: (await prisma.outageReport.findMany({
			orderBy: { startedAt: "desc" },
			take: 50
		})).map(serializeOutage),
		fetchedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
});
var reportOutage_createServerFn_handler = createServerRpc({
	id: "19fd5ccf892cb5fc95f2cc80f97940917bf8717bdde15b32cfc6ee12bec44e49",
	name: "reportOutage",
	filename: "src/lib/outage/outages.functions.ts"
}, (opts) => reportOutage.__executeServer(opts));
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
}).parse(data)).handler(reportOutage_createServerFn_handler, async ({ data }) => {
	const userId = await requireUserId();
	await ensureUser(userId);
	const fiveMinutesAgo = /* @__PURE__ */ new Date(Date.now() - 300 * 1e3);
	if (await prisma.outageReport.findFirst({
		where: {
			userId,
			area: data.area,
			startedAt: { gte: fiveMinutesAgo }
		},
		orderBy: { startedAt: "desc" }
	})) return {
		success: false,
		message: "You already submitted a report for this area within the last 5 minutes.",
		outage: void 0
	};
	return {
		success: true,
		message: "Power status reported successfully.",
		outage: serializeOutage(await prisma.outageReport.create({ data: {
			userId,
			area: data.area,
			discoCode: data.discoCode,
			latitude: data.latitude,
			longitude: data.longitude,
			status: data.status,
			description: data.description
		} }))
	};
});
//#endregion
export { listOutageHistory_createServerFn_handler, listOutages_createServerFn_handler, reportOutage_createServerFn_handler };
