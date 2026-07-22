import { n as getToken, t as dist_exports$1 } from "../_libs/@clerk/react+[...].mjs";
import { t as ClerkProvider } from "./ClerkProvider-DRdE6Pt9.mjs";
import { a as UserProfile$1, i as SignUp$1, n as OrganizationProfile$1, r as SignIn$1, t as OrganizationList$1 } from "./uiComponents-D4xEMHL2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dist-BPKkTeHq.js
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var dist_exports = /* @__PURE__ */ __exportAll({
	ClerkProvider: () => ClerkProvider,
	OrganizationList: () => OrganizationList$1,
	OrganizationProfile: () => OrganizationProfile$1,
	SignIn: () => SignIn$1,
	SignUp: () => SignUp$1,
	UserProfile: () => UserProfile$1,
	getToken: () => getToken
});
__reExport(dist_exports, dist_exports$1);
//#endregion
export { dist_exports as t };
