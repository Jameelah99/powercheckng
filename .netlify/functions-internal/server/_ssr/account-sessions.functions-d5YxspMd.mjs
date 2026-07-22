import { c as createServerFn } from "./createServerFn-C4XsUSXf.mjs";
import { t as createServerRpc } from "./createServerRpc-Cze4CWwo.mjs";
import { t as auth } from "./auth-E27mcwqq.mjs";
import { t as clerkClient } from "./clerkClient-C_-qCWCd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-sessions.functions-d5YxspMd.js
var getUserSessions_createServerFn_handler = createServerRpc({
	id: "789bcb33ce1a447ff34235df07d52a1ebea0376f05efa0aa22e2a3d7db82f7d1",
	name: "getUserSessions",
	filename: "src/lib/account/account-sessions.functions.ts"
}, (opts) => getUserSessions.__executeServer(opts));
var getUserSessions = createServerFn({ method: "GET" }).handler(getUserSessions_createServerFn_handler, async () => {
	const { userId } = await auth();
	if (!userId) throw new Error("Unauthorized");
	return (await (await clerkClient()).sessions.getSessionList({
		userId,
		status: "active",
		limit: 100
	})).data.map((session) => ({
		id: session.id,
		status: session.status,
		lastActiveAt: session.lastActiveAt,
		expireAt: session.expireAt,
		abandonAt: session.abandonAt,
		activity: session.latestActivity ? {
			browser: session.latestActivity.browserName,
			browserVersion: session.latestActivity.browserVersion,
			city: session.latestActivity.city,
			country: session.latestActivity.country,
			device: session.latestActivity.deviceType,
			ip: session.latestActivity.ipAddress,
			mobile: session.latestActivity.isMobile
		} : null
	}));
});
var revokeSession_createServerFn_handler = createServerRpc({
	id: "769caacc6f12fad64487d85a649747de09ae494b7618e40d7fb68b1bd20e28fb",
	name: "revokeSession",
	filename: "src/lib/account/account-sessions.functions.ts"
}, (opts) => revokeSession.__executeServer(opts));
var revokeSession = createServerFn({ method: "POST" }).validator((sessionId) => sessionId).handler(revokeSession_createServerFn_handler, async ({ data }) => {
	await (await clerkClient()).sessions.revokeSession(data);
	return { success: true };
});
var revokeAllSessions_createServerFn_handler = createServerRpc({
	id: "33eaefd7d95e927d750887a5cdf9dbfb3e618b8478a8e1ab7f9e26d7973bfc6a",
	name: "revokeAllSessions",
	filename: "src/lib/account/account-sessions.functions.ts"
}, (opts) => revokeAllSessions.__executeServer(opts));
var revokeAllSessions = createServerFn({ method: "POST" }).handler(revokeAllSessions_createServerFn_handler, async () => {
	const { userId } = await auth();
	if (!userId) throw new Error("Unauthorized");
	const client = await clerkClient();
	const result = await client.sessions.getSessionList({
		userId,
		status: "active",
		limit: 100
	});
	await Promise.all(result.data.map((session) => client.sessions.revokeSession(session.id)));
	return { success: true };
});
//#endregion
export { getUserSessions_createServerFn_handler, revokeAllSessions_createServerFn_handler, revokeSession_createServerFn_handler };
