import { c as createServerFn } from "./createServerFn-C4XsUSXf.mjs";
import { t as createServerRpc } from "./createServerRpc-Cze4CWwo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clerk-config.functions-Bb1MJ7s8.js
var getClerkPublishableKey_createServerFn_handler = createServerRpc({
	id: "a17b49304000da8e4a70719c2f0151f5fc6f3ed8954dd31c2617aa7382ad9fcd",
	name: "getClerkPublishableKey",
	filename: "src/lib/clerk-config.functions.ts"
}, (opts) => getClerkPublishableKey.__executeServer(opts));
var getClerkPublishableKey = createServerFn({ method: "GET" }).handler(getClerkPublishableKey_createServerFn_handler, async () => {
	return { publishableKey: process.env.CLERK_PUBLISHABLE_KEY ?? "" };
});
//#endregion
export { getClerkPublishableKey_createServerFn_handler };
