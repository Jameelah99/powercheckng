//#region node_modules/.nitro/vite/services/ssr/assets/energyPlanner-4WXwCdNV.js
var DEFAULT_APPLIANCES = [
	{
		id: "fan",
		name: "Fan",
		selected: true,
		watts: 75,
		quantity: 2,
		hours: 10,
		essential: true
	},
	{
		id: "television",
		name: "Television",
		selected: true,
		watts: 120,
		quantity: 1,
		hours: 6,
		essential: false
	},
	{
		id: "refrigerator",
		name: "Refrigerator",
		selected: true,
		watts: 180,
		quantity: 1,
		hours: 24,
		essential: true
	},
	{
		id: "standing-freezer",
		name: "Standing Freezer",
		selected: true,
		watts: 450,
		quantity: 1,
		hours: 24,
		essential: true
	},
	{
		id: "led-bulbs",
		name: "LED Bulbs",
		selected: true,
		watts: 10,
		quantity: 8,
		hours: 6,
		essential: true
	},
	{
		id: "decoder",
		name: "Decoder",
		selected: true,
		watts: 25,
		quantity: 1,
		hours: 6,
		essential: false
	},
	{
		id: "wifi-router",
		name: "WiFi Router",
		selected: true,
		watts: 15,
		quantity: 1,
		hours: 24,
		essential: true
	},
	{
		id: "phone-chargers",
		name: "Phone Chargers",
		selected: true,
		watts: 15,
		quantity: 2,
		hours: 3,
		essential: false
	},
	{
		id: "water-pump",
		name: "Water Pump",
		selected: false,
		watts: 750,
		quantity: 1,
		hours: 1,
		essential: false
	}
];
var APPLIANCE_CATEGORIES = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "Cooling",
		label: "Cooling"
	},
	{
		id: "Kitchen",
		label: "Kitchen"
	},
	{
		id: "Entertainment",
		label: "Entertainment"
	},
	{
		id: "Office",
		label: "Office"
	},
	{
		id: "Laundry",
		label: "Laundry"
	},
	{
		id: "Water",
		label: "Water"
	},
	{
		id: "Security",
		label: "Security"
	},
	{
		id: "Workshop & Business",
		label: "Workshop & Business"
	}
];
var POWER_RANGES = [
	{
		id: "very-low",
		label: "Very Low (1–50W)",
		defaultWatts: 25
	},
	{
		id: "low",
		label: "Low (51–150W)",
		defaultWatts: 100
	},
	{
		id: "medium",
		label: "Medium (151–500W)",
		defaultWatts: 300
	},
	{
		id: "high",
		label: "High (501–1500W)",
		defaultWatts: 900
	},
	{
		id: "very-high",
		label: "Very High (1500W+)",
		defaultWatts: 2500
	}
];
var LOAD_FACTORS = {
	Fan: { surgeMultiplier: 1 },
	"Ceiling Fan": { surgeMultiplier: 1 },
	"Standing Fan": { surgeMultiplier: 1 },
	Television: { surgeMultiplier: 1 },
	Refrigerator: { surgeMultiplier: 3 },
	"Chest Freezer": { surgeMultiplier: 3 },
	"Air Conditioner": { surgeMultiplier: 2.5 },
	"Water Pump": { surgeMultiplier: 3 },
	"Electric Iron": { surgeMultiplier: 1 },
	"Washing Machine": { surgeMultiplier: 2 },
	Microwave: { surgeMultiplier: 1.5 },
	Blender: { surgeMultiplier: 2 },
	"Rice Cooker": { surgeMultiplier: 1 },
	"Electric Kettle": { surgeMultiplier: 1 },
	Laptop: { surgeMultiplier: 1 },
	"Desktop Computer": { surgeMultiplier: 1 },
	Printer: { surgeMultiplier: 1 },
	"Security Light": { surgeMultiplier: 1 },
	"Borehole Pump": { surgeMultiplier: 3 }
};
function analyzeEnergyPlan(appliances, budget) {
	const selectedAppliances = appliances.filter((appliance) => appliance.selected);
	const applianceCount = selectedAppliances.length;
	const totalSelectedWatts = selectedAppliances.reduce((total, appliance) => total + appliance.watts * appliance.quantity, 0);
	const essentialAppliances = selectedAppliances.filter((appliance) => appliance.essential);
	const appliancesForBackup = essentialAppliances.length > 0 ? essentialAppliances : selectedAppliances;
	const essentialApplianceCount = essentialAppliances.length;
	const peakLoad = Math.round(appliancesForBackup.reduce((total, appliance) => {
		const factor = LOAD_FACTORS[appliance.name]?.surgeMultiplier ?? 1;
		return total + appliance.watts * appliance.quantity * factor;
	}, 0));
	const dailyUsage = selectedAppliances.reduce((total, appliance) => {
		return total + appliance.watts * appliance.quantity * appliance.hours / 1e3;
	}, 0);
	const monthlyUsage = dailyUsage * 30;
	const monthlyCost = monthlyUsage * 72;
	const breakdown = selectedAppliances.map((appliance) => {
		const usage = appliance.watts * appliance.quantity * appliance.hours * 30 / 1e3;
		const cost = usage * 72;
		return {
			name: appliance.name,
			usage,
			cost,
			percentage: monthlyUsage > 0 ? usage / monthlyUsage * 100 : 0
		};
	}).sort((a, b) => b.usage - a.usage);
	const highestConsumer = breakdown[0]?.name ?? "None";
	let score = 100;
	if (budget > 0 && monthlyCost > budget) {
		const overBudgetPercentage = (monthlyCost - budget) / budget * 100;
		if (overBudgetPercentage >= 100) score -= 35;
		else if (overBudgetPercentage >= 50) score -= 25;
		else if (overBudgetPercentage >= 20) score -= 15;
		else score -= 10;
	}
	const topConsumer = breakdown[0];
	if (topConsumer) {
		if (topConsumer.percentage >= 70) score -= 15;
		else if (topConsumer.percentage >= 50) score -= 10;
	}
	const extremeUsageCount = selectedAppliances.filter((appliance) => appliance.hours > 18 && appliance.name !== "Refrigerator").length;
	score -= extremeUsageCount * 5;
	score = Math.max(40, Math.min(score, 100));
	const recommendations = [];
	if (topConsumer) recommendations.push(`${topConsumer.name} contributes approximately ${Math.round(topConsumer.percentage)}% of your estimated electricity consumption. Optimizing its usage could have the greatest impact on your energy cost.`);
	if (budget > 0 && monthlyCost > budget) {
		const budgetDifference = monthlyCost - budget;
		recommendations.push(`Your estimated monthly electricity cost exceeds your budget by approximately ₦${Math.round(budgetDifference).toLocaleString()}. Consider reducing the usage duration of your highest-consuming appliances.`);
	} else if (budget > 0) {
		const remainingBudget = budget - monthlyCost;
		recommendations.push(`Your current energy plan is within budget, leaving an estimated ₦${Math.round(remainingBudget).toLocaleString()} of your monthly electricity budget.`);
	}
	const airConditioner = selectedAppliances.find((appliance) => appliance.name === "Air Conditioner");
	if (airConditioner && airConditioner.hours > 6) {
		const estimatedSavings = airConditioner.watts * 2 * airConditioner.quantity * 30 / 1e3 * 72;
		recommendations.push(`Reducing your Air Conditioner usage by 2 hours per day could lower your estimated monthly electricity cost by about ₦${Math.round(estimatedSavings).toLocaleString()}.`);
	}
	if (selectedAppliances.find((appliance) => appliance.name === "Refrigerator")) recommendations.push("Keeping your refrigerator door closed as much as possible and maintaining proper ventilation around the appliance can help reduce unnecessary energy consumption.");
	const electricIron = selectedAppliances.find((appliance) => appliance.name === "Electric Iron");
	if (electricIron && electricIron.hours > 1) {
		const estimatedSavings = electricIron.watts * .5 * electricIron.quantity * 30 / 1e3 * 72;
		recommendations.push(`Ironing clothes in batches and reducing daily ironing time by 30 minutes could save approximately ₦${Math.round(estimatedSavings).toLocaleString()} each month.`);
	}
	const waterPump = selectedAppliances.find((appliance) => appliance.name === "Water Pump");
	if (waterPump && waterPump.hours > 2) {
		const estimatedSavings = waterPump.watts * waterPump.quantity * 30 / 1e3 * 72;
		recommendations.push(`Reducing Water Pump usage by 1 hour per day could save around ₦${Math.round(estimatedSavings).toLocaleString()} monthly.`);
	}
	if (score >= 90) recommendations.push("Your current appliance usage pattern is highly energy efficient based on your estimated consumption and budget.");
	recommendations.push("Where practical, schedule high-power appliances during periods of public electricity availability to reduce dependence on generators or battery backup systems.");
	return {
		dailyUsage,
		monthlyUsage,
		monthlyCost,
		score,
		highestConsumer,
		recommendations,
		breakdown,
		peakLoad,
		totalSelectedWatts,
		applianceCount,
		essentialApplianceCount
	};
}
//#endregion
export { analyzeEnergyPlan as i, DEFAULT_APPLIANCES as n, POWER_RANGES as r, APPLIANCE_CATEGORIES as t };
