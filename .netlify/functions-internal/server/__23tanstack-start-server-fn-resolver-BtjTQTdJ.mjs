//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BtjTQTdJ.js
var manifest = {
	"027f39d5a077c5983f1288f6878ed0eb5c8190f54be9e0dcca7b7b888fc2b5a2": {
		functionName: "listOutages_createServerFn_handler",
		importer: () => import("./_ssr/outages.functions-BoWM0yDO.mjs")
	},
	"19fd5ccf892cb5fc95f2cc80f97940917bf8717bdde15b32cfc6ee12bec44e49": {
		functionName: "reportOutage_createServerFn_handler",
		importer: () => import("./_ssr/outages.functions-BoWM0yDO.mjs")
	},
	"33eaefd7d95e927d750887a5cdf9dbfb3e618b8478a8e1ab7f9e26d7973bfc6a": {
		functionName: "revokeAllSessions_createServerFn_handler",
		importer: () => import("./_ssr/account-sessions.functions-d5YxspMd.mjs")
	},
	"769caacc6f12fad64487d85a649747de09ae494b7618e40d7fb68b1bd20e28fb": {
		functionName: "revokeSession_createServerFn_handler",
		importer: () => import("./_ssr/account-sessions.functions-d5YxspMd.mjs")
	},
	"789bcb33ce1a447ff34235df07d52a1ebea0376f05efa0aa22e2a3d7db82f7d1": {
		functionName: "getUserSessions_createServerFn_handler",
		importer: () => import("./_ssr/account-sessions.functions-d5YxspMd.mjs")
	},
	"8b20656891af8bf99f7bd92d9f1d9af4ba173401def4b9f1a60bd3166293f85e": {
		functionName: "listOutageHistory_createServerFn_handler",
		importer: () => import("./_ssr/outages.functions-BoWM0yDO.mjs")
	},
	"a17b49304000da8e4a70719c2f0151f5fc6f3ed8954dd31c2617aa7382ad9fcd": {
		functionName: "getClerkPublishableKey_createServerFn_handler",
		importer: () => import("./_ssr/clerk-config.functions-Bb1MJ7s8.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
