//#region node_modules/.nitro/vite/services/ssr/assets/backupAdvisor-C9obCMo6.js
function calculateBackupReadiness(peakLoad, essentialCount) {
	let score = 100;
	if (peakLoad > 2500) score -= 35;
	else if (peakLoad > 1800) score -= 20;
	else if (peakLoad > 1e3) score -= 10;
	if (essentialCount > 8) score -= 15;
	return Math.max(score, 40);
}
var BACKUP_SYSTEMS = [
	{
		inverter: "850VA Inverter",
		maxLoad: 500,
		battery: "100Ah",
		runtimeFactor: .8,
		estimatedCost: 32e4
	},
	{
		inverter: "1.5kVA Inverter",
		maxLoad: 1e3,
		battery: "200Ah",
		runtimeFactor: 1,
		estimatedCost: 78e4
	},
	{
		inverter: "2.5kVA Inverter",
		maxLoad: 1800,
		battery: "200Ah x2",
		runtimeFactor: 1.4,
		estimatedCost: 145e4
	},
	{
		inverter: "3.5kVA Inverter",
		maxLoad: 2800,
		battery: "220Ah x4",
		runtimeFactor: 2,
		estimatedCost: 235e4
	}
];
var GENERATOR_SYSTEMS = [
	{
		name: "2.5kVA Petrol Generator",
		maxLoad: 1800,
		estimatedCost: 26e4,
		fuelCost: "Low",
		maintenance: "Moderate"
	},
	{
		name: "3.5kVA Petrol Generator",
		maxLoad: 2800,
		estimatedCost: 43e4,
		fuelCost: "Moderate",
		maintenance: "Moderate"
	},
	{
		name: "5.5kVA Petrol Generator",
		maxLoad: 4500,
		estimatedCost: 72e4,
		fuelCost: "High",
		maintenance: "Moderate"
	},
	{
		name: "7.5kVA Petrol Generator",
		maxLoad: 6500,
		estimatedCost: 12e5,
		fuelCost: "High",
		maintenance: "High"
	}
];
function recommendBackupSystem(peakLoad, dailyEnergy) {
	const recommendedLoad = Math.round(peakLoad * 1.25);
	const system = BACKUP_SYSTEMS.find((system) => recommendedLoad <= system.maxLoad) ?? BACKUP_SYSTEMS[BACKUP_SYSTEMS.length - 1];
	const estimatedRuntime = Number((dailyEnergy * system.runtimeFactor / 2).toFixed(1));
	let suitability;
	if (recommendedLoad > BACKUP_SYSTEMS[BACKUP_SYSTEMS.length - 1].maxLoad) suitability = 65;
	else {
		const loadScore = Math.max(70, 100 - Math.abs(system.maxLoad - recommendedLoad) / 20);
		suitability = Math.round(loadScore);
	}
	let reason;
	if (system.maxLoad <= 500) reason = "An inverter is the most practical choice for your selected appliances because their combined outage load is relatively low. It provides quiet operation, lower running costs, and sufficient backup capacity for your essential appliances while leaving room for modest future expansion.";
	else if (system.maxLoad <= 1800) reason = "Your energy needs are well suited to an inverter system. It provides reliable backup for your essential appliances while maintaining good efficiency and lower operating costs compared to fuel-powered alternatives.";
	else reason = "Your energy demand is approaching the upper range for residential inverter systems. This recommendation provides enough capacity for your current essential appliances while allowing room for future expansion if your energy needs grow.";
	return {
		type: "INVERTER",
		title: "Recommended Inverter System",
		inverter: system.inverter,
		battery: system.battery,
		estimatedCost: system.estimatedCost,
		estimatedRuntime,
		suitability,
		maxLoad: system.maxLoad,
		reason
	};
}
function recommendGenerator(peakLoad) {
	const system = GENERATOR_SYSTEMS.find((generator) => peakLoad <= generator.maxLoad) ?? GENERATOR_SYSTEMS[GENERATOR_SYSTEMS.length - 1];
	let suitability;
	if (peakLoad > GENERATOR_SYSTEMS[GENERATOR_SYSTEMS.length - 1].maxLoad) suitability = 65;
	else {
		const loadScore = Math.max(70, 100 - Math.abs(system.maxLoad - peakLoad) / 30);
		suitability = Math.round(loadScore);
	}
	return {
		type: "GENERATOR",
		title: "Recommended Generator",
		suitability,
		...system,
		reason: "A generator is recommended because your outage power demand is relatively high and may need to be sustained for extended periods. It can comfortably support heavier appliances and avoids the runtime limitations associated with battery-only backup systems."
	};
}
function buildBackupAdvisor(analysis) {
	const inverterRecommendation = recommendBackupSystem(analysis.peakLoad, analysis.dailyUsage);
	const generatorRecommendation = recommendGenerator(analysis.peakLoad);
	const readinessScore = calculateBackupReadiness(analysis.peakLoad, analysis.essentialApplianceCount);
	let bestTechnology;
	if (analysis.peakLoad <= 1800) bestTechnology = "INVERTER";
	else if (analysis.peakLoad <= 3e3) bestTechnology = analysis.essentialApplianceCount >= 4 ? "HYBRID" : "GENERATOR";
	else bestTechnology = "GENERATOR";
	return {
		readinessScore,
		bestTechnology,
		recommendation: inverterRecommendation,
		generatorRecommendation
	};
}
//#endregion
export { GENERATOR_SYSTEMS as n, buildBackupAdvisor as r, BACKUP_SYSTEMS as t };
