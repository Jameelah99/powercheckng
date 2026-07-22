import { o as __toESM } from "../_runtime.mjs";
import { S as require_react, x as require_jsx_runtime } from "../_libs/@clerk/react+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./geoUtils-BMyem_HF.mjs";
import { t as GlassCard } from "./GlassCard-tAHr1923.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AccountPage } from "./AccountPage-DvECMLrN.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/preferences-_MJs6Hk4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var DEFAULT_PREFERENCES = {
	appearance: "system",
	notifications: {
		email: true,
		outageAlerts: true,
		weeklySummary: true
	},
	privacy: {
		anonymousReports: true,
		analytics: true
	}
};
var PREFERENCES_STORAGE_KEY = "powercheckng-user-preferences";
function loadPreferences() {
	if (typeof window === "undefined") return null;
	try {
		const saved = window.localStorage.getItem(PREFERENCES_STORAGE_KEY);
		if (!saved) return null;
		return JSON.parse(saved);
	} catch (error) {
		console.error("Failed to load preferences:", error);
		return null;
	}
}
function savePreferences(preferences) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(preferences));
	} catch (error) {
		console.error("Failed to save preferences:", error);
	}
}
function getPreferences() {
	return loadPreferences() ?? DEFAULT_PREFERENCES;
}
function PreferencesPage() {
	const [preferences, setPreferences] = import_react.useState(getPreferences());
	function updateNotification(key, value) {
		setPreferences((prev) => {
			const updated = {
				...prev,
				notifications: {
					...prev.notifications,
					[key]: value
				}
			};
			savePreferences(updated);
			toast.success("Preferences saved", { id: "preferences-saved" });
			return updated;
		});
	}
	function updatePrivacy(key, value) {
		setPreferences((prev) => {
			const updated = {
				...prev,
				privacy: {
					...prev.privacy,
					[key]: value
				}
			};
			savePreferences(updated);
			toast.success("Preferences saved", { id: "preferences-saved" });
			return updated;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountPage, {
		title: "Preferences",
		description: "Customize your PowerCheckNG experience.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "space-y-8 p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold",
						children: "Notifications"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preference, {
						title: "Email Notifications",
						description: "Receive important account updates by email.",
						checked: preferences.notifications.email,
						onCheckedChange: (checked) => updateNotification("email", checked)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preference, {
						title: "Outage Alerts",
						description: "Notify me whenever an outage is reported near my location.",
						checked: preferences.notifications.outageAlerts,
						onCheckedChange: (checked) => updateNotification("outageAlerts", checked)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preference, {
						title: "Weekly Summary",
						description: "Receive a weekly summary of your energy usage.",
						checked: preferences.notifications.weeklySummary,
						onCheckedChange: (checked) => updateNotification("weeklySummary", checked)
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t pt-8 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold",
						children: "Privacy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preference, {
						title: "Anonymous Outage Reports",
						description: "Hide your identity when submitting outage reports.",
						checked: preferences.privacy.anonymousReports,
						onCheckedChange: (checked) => updatePrivacy("anonymousReports", checked)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preference, {
						title: "Usage Analytics",
						description: "Help improve PowerCheckNG by sharing anonymous usage analytics.",
						checked: preferences.privacy.analytics,
						onCheckedChange: (checked) => updatePrivacy("analytics", checked)
					})
				]
			})]
		})
	});
}
function Preference({ title, description, checked, onCheckedChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 space-y-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "font-medium",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: description
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked,
			onCheckedChange
		})]
	});
}
//#endregion
export { PreferencesPage as component };
