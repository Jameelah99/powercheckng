//#region node_modules/.nitro/vite/services/ssr/assets/energyStorage-CoGla4sz.js
var APPLIANCES_STORAGE_KEY = "powercheckng-energy-appliances";
var BUDGET_STORAGE_KEY = "powercheckng-energy-budget";
var ANALYSIS_STORAGE_KEY = "powercheckng-energy-analysis";
function loadSavedAppliances() {
	if (typeof window === "undefined") return null;
	try {
		const saved = window.localStorage.getItem(APPLIANCES_STORAGE_KEY);
		if (!saved) return null;
		const parsed = JSON.parse(saved);
		if (!Array.isArray(parsed)) return null;
		return parsed;
	} catch (error) {
		console.error("Failed to load saved appliances:", error);
		return null;
	}
}
function saveAppliances(appliances) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(APPLIANCES_STORAGE_KEY, JSON.stringify(appliances));
	} catch (error) {
		console.error("Failed to save appliances:", error);
	}
}
function loadSavedBudget() {
	if (typeof window === "undefined") return null;
	try {
		return window.localStorage.getItem(BUDGET_STORAGE_KEY);
	} catch (error) {
		console.error("Failed to load saved budget:", error);
		return null;
	}
}
function saveBudget(budget) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(BUDGET_STORAGE_KEY, budget);
	} catch (error) {
		console.error("Failed to save budget:", error);
	}
}
function saveEnergyAnalysis(analysis) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(ANALYSIS_STORAGE_KEY, JSON.stringify({
			analysis,
			savedAt: Date.now()
		}));
	} catch (error) {
		console.error("Failed to save analysis:", error);
	}
}
function loadEnergyAnalysis() {
	if (typeof window === "undefined") return null;
	try {
		const saved = window.localStorage.getItem(ANALYSIS_STORAGE_KEY);
		if (!saved) return null;
		const parsed = JSON.parse(saved);
		if (Date.now() - parsed.savedAt > 1800 * 1e3) {
			window.localStorage.removeItem(ANALYSIS_STORAGE_KEY);
			return null;
		}
		return parsed.analysis;
	} catch (error) {
		console.error("Failed to load analysis:", error);
		return null;
	}
}
//#endregion
export { saveBudget as a, saveAppliances as i, loadSavedAppliances as n, saveEnergyAnalysis as o, loadSavedBudget as r, loadEnergyAnalysis as t };
