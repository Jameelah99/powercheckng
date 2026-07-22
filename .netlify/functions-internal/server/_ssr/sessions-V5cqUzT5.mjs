import { o as __toESM } from "../_runtime.mjs";
import { x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { t as dist_exports } from "./dist-BPKkTeHq.mjs";
import { t as Button } from "./button-kArZv4Hk.mjs";
import { E as LogOut } from "../_libs/lucide-react.mjs";
import { t as GlassCard } from "./GlassCard-tAHr1923.mjs";
import { c as createServerFn } from "./createServerFn-C4XsUSXf.mjs";
import { t as createSsrRpc } from "./createSsrRpc-DjSfRLtu.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as useQuery, o as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as AccountPage } from "./AccountPage-DvECMLrN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sessions-V5cqUzT5.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var getUserSessions = createServerFn({ method: "GET" }).handler(createSsrRpc("789bcb33ce1a447ff34235df07d52a1ebea0376f05efa0aa22e2a3d7db82f7d1"));
var revokeSession = createServerFn({ method: "POST" }).validator((sessionId) => sessionId).handler(createSsrRpc("769caacc6f12fad64487d85a649747de09ae494b7618e40d7fb68b1bd20e28fb"));
var revokeAllSessions = createServerFn({ method: "POST" }).handler(createSsrRpc("33eaefd7d95e927d750887a5cdf9dbfb3e618b8478a8e1ab7f9e26d7973bfc6a"));
function SessionsPage() {
	const { data, isLoading } = useQuery({
		queryKey: ["account-sessions"],
		queryFn: () => getUserSessions()
	});
	useQueryClient();
	const clerk = (0, dist_exports.useClerk)();
	const revokeOne = useMutation({
		mutationFn: revokeSession,
		onSuccess: async () => {
			toast.success("Signed out successfully.");
			await new Promise((resolve) => setTimeout(resolve, 800));
			await clerk.signOut();
		}
	});
	const revokeAll = useMutation({
		mutationFn: revokeAllSessions,
		onSuccess: async () => {
			toast.success("Signed out from all devices.");
			await new Promise((resolve) => setTimeout(resolve, 800));
			await clerk.signOut();
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccountPage, {
		title: "Active Sessions",
		description: "Devices currently signed into your account.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
			className: "rounded-2xl p-6",
			children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Loading sessions..." }) : data?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-5",
				children: data.map((session, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5 rounded-2xl border border-border/50 bg-background/40 p-5 transition hover:border-primary/30 hover:bg-primary/5 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: session.activity?.device ?? "Unknown Device"
								}), index === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-400",
									children: "Current Device"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [session.activity?.browser ?? "Unknown Browser", session.activity?.browserVersion ? ` ${session.activity.browserVersion}` : ""]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									session.activity?.city,
									", ",
									session.activity?.country
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-primary",
								children: ["Last active ", new Date(session.lastActiveAt).toLocaleString()]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "w-full sm:w-auto",
						variant: "outline",
						size: "sm",
						disabled: revokeOne.isPending,
						onClick: () => revokeOne.mutate({ data: session.id }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }), "Sign Out"]
					})]
				}, session.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "No active sessions found."
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-stretch pt-6 sm:justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "w-full sm:w-auto",
				variant: "destructive",
				disabled: revokeAll.isPending,
				onClick: () => revokeAll.mutate({ data: void 0 }),
				children: "Sign Out All Devices"
			})
		})]
	});
}
//#endregion
export { SessionsPage as component };
