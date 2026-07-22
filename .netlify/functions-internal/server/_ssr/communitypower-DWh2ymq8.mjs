import { o as __toESM } from "../_runtime.mjs";
import { S as require_react } from "../_libs/@clerk/react+[...].mjs";
import { i as calculateDistance, t as CURRENT_POWER_WINDOW_MS } from "./outages.functions-pEPm8tn4.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/communitypower-DWh2ymq8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var KNOWN_AREAS = [
	{
		area: "Lugbe",
		state: "Federal Capital Territory",
		latitude: 8.9796,
		longitude: 7.3678,
		radiusKm: 5,
		discoCode: "AEDC"
	},
	{
		area: "Wuse",
		state: "Federal Capital Territory",
		latitude: 9.0765,
		longitude: 7.4677,
		radiusKm: 4,
		discoCode: "AEDC"
	},
	{
		area: "Gwarinpa",
		state: "Federal Capital Territory",
		latitude: 9.1099,
		longitude: 7.4042,
		radiusKm: 5,
		discoCode: "AEDC"
	},
	{
		area: "Kubwa",
		state: "Federal Capital Territory",
		latitude: 9.1538,
		longitude: 7.322,
		radiusKm: 5,
		discoCode: "AEDC"
	},
	{
		area: "Ikeja",
		state: "Lagos State",
		latitude: 6.6018,
		longitude: 3.3515,
		radiusKm: 4,
		discoCode: "IKEDC"
	},
	{
		area: "Lekki",
		state: "Lagos State",
		latitude: 6.4698,
		longitude: 3.5852,
		radiusKm: 5,
		discoCode: "EKEDC"
	},
	{
		area: "Yaba",
		state: "Lagos State",
		latitude: 6.5158,
		longitude: 3.3707,
		radiusKm: 3,
		discoCode: "EKEDC"
	},
	{
		area: "Surulere",
		state: "Lagos State",
		latitude: 6.4969,
		longitude: 3.3531,
		radiusKm: 4,
		discoCode: "EKEDC"
	},
	{
		area: "Ikorodu",
		state: "Lagos State",
		latitude: 6.6194,
		longitude: 3.5105,
		radiusKm: 5,
		discoCode: "IKEDC"
	},
	{
		area: "Ajah",
		state: "Lagos State",
		latitude: 6.4692,
		longitude: 3.5615,
		radiusKm: 4,
		discoCode: "EKEDC"
	},
	{
		area: "Victoria Island",
		state: "Lagos State",
		latitude: 6.4281,
		longitude: 3.4219,
		radiusKm: 4,
		discoCode: "EKEDC"
	},
	{
		area: "Ikoyi",
		state: "Lagos State",
		latitude: 6.4541,
		longitude: 3.4346,
		radiusKm: 4,
		discoCode: "EKEDC"
	},
	{
		area: "Epe",
		state: "Lagos State",
		latitude: 6.5841,
		longitude: 3.9834,
		radiusKm: 6,
		discoCode: "EKEDC"
	},
	{
		area: "Ajegunle",
		state: "Lagos State",
		latitude: 6.4553,
		longitude: 3.3374,
		radiusKm: 4,
		discoCode: "EKEDC"
	},
	{
		area: "Mushin",
		state: "Lagos State",
		latitude: 6.5273,
		longitude: 3.3414,
		radiusKm: 4,
		discoCode: "EKEDC"
	},
	{
		area: "Oshodi",
		state: "Lagos State",
		latitude: 6.555,
		longitude: 3.3433,
		radiusKm: 4,
		discoCode: "IKEDC"
	},
	{
		area: "Bodija",
		state: "Oyo State",
		latitude: 7.4351,
		longitude: 3.9085,
		radiusKm: 5,
		discoCode: "IBEDC"
	},
	{
		area: "Challenge",
		state: "Oyo State",
		discoCode: "IBEDC",
		latitude: 7.3476,
		longitude: 3.8754,
		radiusKm: 5
	},
	{
		area: "Akobo",
		state: "Oyo State",
		discoCode: "IBEDC",
		latitude: 7.4426,
		longitude: 3.9478,
		radiusKm: 5
	},
	{
		area: "Beere",
		state: "Oyo State",
		discoCode: "IBEDC",
		latitude: 7.3872,
		longitude: 3.8967,
		radiusKm: 6
	},
	{
		area: "Oluyole",
		state: "Oyo State",
		discoCode: "IBEDC",
		latitude: 7.3227,
		longitude: 3.8624,
		radiusKm: 6
	},
	{
		area: "Agodi",
		state: "Oyo State",
		discoCode: "IBEDC",
		latitude: 7.4095,
		longitude: 3.9019,
		radiusKm: 6
	},
	{
		area: "Dugbe",
		state: "Oyo State",
		discoCode: "IBEDC",
		latitude: 7.3877,
		longitude: 3.8797,
		radiusKm: 6
	},
	{
		area: "University of Ibadan",
		state: "Oyo State",
		discoCode: "IBEDC",
		latitude: 7.4417,
		longitude: 3.9003,
		radiusKm: 6
	},
	{
		area: "Abeokuta",
		state: "Ogun State",
		discoCode: "IBEDC",
		latitude: 7.1475,
		longitude: 3.3619,
		radiusKm: 6
	},
	{
		area: "Ota",
		state: "Ogun State",
		discoCode: "IBEDC",
		latitude: 6.6833,
		longitude: 3.2,
		radiusKm: 5
	},
	{
		area: "Sagamu",
		state: "Ogun State",
		discoCode: "IBEDC",
		latitude: 6.8485,
		longitude: 3.6463,
		radiusKm: 5
	},
	{
		area: "Ijebu-Ode",
		state: "Ogun State",
		discoCode: "IBEDC",
		latitude: 6.8206,
		longitude: 3.9173,
		radiusKm: 5
	},
	{
		area: "Ilaro",
		state: "Ogun State",
		discoCode: "IBEDC",
		latitude: 6.889,
		longitude: 3.0142,
		radiusKm: 5
	},
	{
		area: "Osogbo",
		state: "Osun State",
		discoCode: "IBEDC",
		latitude: 7.7827,
		longitude: 4.5418,
		radiusKm: 6
	},
	{
		area: "Ile-Ife",
		state: "Osun State",
		discoCode: "IBEDC",
		latitude: 7.4905,
		longitude: 4.5521,
		radiusKm: 6
	},
	{
		area: "Ilesa",
		state: "Osun State",
		discoCode: "IBEDC",
		latitude: 7.6167,
		longitude: 4.7333,
		radiusKm: 5
	},
	{
		area: "Iwo",
		state: "Osun State",
		discoCode: "IBEDC",
		latitude: 7.6292,
		longitude: 4.1872,
		radiusKm: 6
	},
	{
		area: "Ede",
		state: "Osun State",
		discoCode: "IBEDC",
		latitude: 7.7363,
		longitude: 4.4354,
		radiusKm: 6
	},
	{
		area: "Ejigbo",
		state: "Osun State",
		discoCode: "IBEDC",
		latitude: 7.9029,
		longitude: 4.3142,
		radiusKm: 6
	},
	{
		area: "Akure",
		state: "Ondo State",
		discoCode: "BEDC",
		latitude: 7.2571,
		longitude: 5.2058,
		radiusKm: 6
	},
	{
		area: "Ondo Town",
		state: "Ondo State",
		discoCode: "BEDC",
		latitude: 7.1,
		longitude: 4.8333,
		radiusKm: 6
	},
	{
		area: "Ore",
		state: "Ondo State",
		discoCode: "BEDC",
		latitude: 6.7472,
		longitude: 4.8761,
		radiusKm: 6
	},
	{
		area: "Owo",
		state: "Ondo State",
		discoCode: "BEDC",
		latitude: 7.1962,
		longitude: 5.5868,
		radiusKm: 6
	},
	{
		area: "Okitipupa",
		state: "Ondo State",
		discoCode: "BEDC",
		latitude: 6.5049,
		longitude: 4.7795,
		radiusKm: 6
	},
	{
		area: "Ikare-Akoko",
		state: "Ondo State",
		discoCode: "BEDC",
		latitude: 7.5259,
		longitude: 5.7534,
		radiusKm: 6
	},
	{
		area: "Akungba-Akoko",
		state: "Ondo State",
		discoCode: "BEDC",
		latitude: 7.4744,
		longitude: 5.7356,
		radiusKm: 6
	},
	{
		area: "Idanre",
		state: "Ondo State",
		discoCode: "BEDC",
		latitude: 7.1127,
		longitude: 5.1159,
		radiusKm: 6
	},
	{
		area: "Ado-Ekiti",
		state: "Ekiti State",
		discoCode: "BEDC",
		latitude: 7.6233,
		longitude: 5.2209,
		radiusKm: 6
	},
	{
		area: "Ikere-Ekiti",
		state: "Ekiti State",
		discoCode: "BEDC",
		latitude: 7.4975,
		longitude: 5.2304,
		radiusKm: 6
	},
	{
		area: "Ikogosi-Ekiti",
		state: "Ekiti State",
		discoCode: "BEDC",
		latitude: 7.5904,
		longitude: 4.9795,
		radiusKm: 6
	},
	{
		area: "Ikole-Ekiti",
		state: "Ekiti State",
		discoCode: "BEDC",
		latitude: 7.7983,
		longitude: 5.5145,
		radiusKm: 6
	},
	{
		area: "Omuo-Ekiti",
		state: "Ekiti State",
		discoCode: "BEDC",
		latitude: 7.7583,
		longitude: 5.7223,
		radiusKm: 6
	}
];
var LOCATION_TOLERANCE_KM = 2;
function resolveLocation(latitude, longitude) {
	const closestMatch = KNOWN_AREAS.map((area) => {
		return {
			area,
			distanceKm: calculateDistance(latitude, longitude, area.latitude, area.longitude) / 1e3
		};
	}).filter(({ area, distanceKm }) => {
		return distanceKm <= area.radiusKm + LOCATION_TOLERANCE_KM;
	}).sort((a, b) => a.distanceKm - b.distanceKm)[0];
	if (!closestMatch) return null;
	const matchedArea = closestMatch.area;
	return {
		area: matchedArea.area,
		state: matchedArea.state,
		lga: "",
		discoCode: matchedArea.discoCode,
		communityLatitude: matchedArea.latitude,
		communityLongitude: matchedArea.longitude,
		radiusKm: matchedArea.radiusKm
	};
}
var LOCATION_STORAGE_KEY = "powercheckng:last-location";
function loadSavedPowerLocation() {
	if (typeof window === "undefined") return null;
	try {
		const saved = window.localStorage.getItem(LOCATION_STORAGE_KEY);
		if (!saved) return null;
		return JSON.parse(saved);
	} catch {
		return null;
	}
}
function savePowerLocation(location) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(location));
	} catch {}
}
function useCurrentLocation() {
	const [showPowerModal, setShowPowerModal] = (0, import_react.useState)(false);
	const [isLocating, setIsLocating] = (0, import_react.useState)(false);
	const [location, setLocation] = (0, import_react.useState)(() => {
		return loadSavedPowerLocation() ?? {
			latitude: 0,
			longitude: 0,
			state: "",
			lga: "",
			area: "",
			discoCode: "UNKNOWN"
		};
	});
	const reverseGeocode = async (latitude, longitude) => {
		try {
			const data = await (await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)).json();
			return {
				state: data.address?.state || "",
				lga: data.address?.county || data.address?.city_district || "",
				area: data.address?.suburb || data.address?.neighbourhood || data.address?.village || data.address?.town || data.address?.city || "Unknown Area"
			};
		} catch (error) {
			console.error(error);
			return {
				state: "",
				lga: "",
				area: "Unknown Area"
			};
		}
	};
	const getCurrentLocation = () => {
		if (!navigator.geolocation) {
			toast.error("Geolocation is not supported.");
			return;
		}
		if (isLocating) return;
		setIsLocating(true);
		const locationToast = toast.loading("Getting your current location...");
		navigator.geolocation.getCurrentPosition(async (position) => {
			try {
				const { latitude, longitude } = position.coords;
				const resolved = resolveLocation(latitude, longitude);
				if (resolved) {
					const nextLocation = {
						rawLatitude: latitude,
						rawLongitude: longitude,
						latitude: resolved.communityLatitude,
						longitude: resolved.communityLongitude,
						state: resolved.state,
						lga: resolved.lga,
						area: resolved.area,
						discoCode: resolved.discoCode
					};
					setLocation(nextLocation);
					savePowerLocation(nextLocation);
					toast.dismiss(locationToast);
					setShowPowerModal(true);
					return;
				}
				const address = await reverseGeocode(latitude, longitude);
				const fallbackLocation = {
					rawLatitude: latitude,
					rawLongitude: longitude,
					latitude,
					longitude,
					state: address.state,
					lga: address.lga,
					area: address.area,
					discoCode: "UNKNOWN"
				};
				setLocation(fallbackLocation);
				savePowerLocation(fallbackLocation);
				toast.dismiss(locationToast);
				setShowPowerModal(true);
			} catch (error) {
				console.error("Location resolution error:", error);
				toast.error("Unable to resolve your current location.", { id: locationToast });
			} finally {
				setIsLocating(false);
			}
		}, (error) => {
			console.error("Geolocation error:", error);
			setIsLocating(false);
			const message = error.code === error.PERMISSION_DENIED ? "Location permission was denied." : error.code === error.POSITION_UNAVAILABLE ? "Your location is currently unavailable." : error.code === error.TIMEOUT ? "Location request timed out. Please try again." : "Unable to retrieve your location.";
			toast.error(message, { id: locationToast });
		}, {
			enableHighAccuracy: false,
			timeout: 15e3,
			maximumAge: 300 * 1e3
		});
	};
	return {
		location,
		setLocation,
		showPowerModal,
		setShowPowerModal,
		getCurrentLocation,
		isLocating
	};
}
function calculateCommunityPower(location, outages) {
	const nearbyReports = outages.filter((outage) => {
		const distance = calculateDistance(location.latitude, location.longitude, outage.latitude, outage.longitude);
		const isRecent = Date.now() - new Date(outage.startedAt).getTime() <= CURRENT_POWER_WINDOW_MS;
		return distance <= 500 && isRecent;
	}).sort((a, b) => new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime());
	const reportCount = nearbyReports.length;
	const powerOnReports = nearbyReports.filter((outage) => outage.status === "POWER_ON").length;
	const powerOffReports = nearbyReports.filter((outage) => outage.status === "POWER_OFF").length;
	const notSureReports = nearbyReports.filter((outage) => outage.status === "NOT_SURE").length;
	const definiteReportCount = powerOnReports + powerOffReports;
	let majorityStatus;
	if (definiteReportCount === 0 || powerOnReports === powerOffReports) majorityStatus = "Needs Confirmation";
	else if (powerOnReports > powerOffReports) majorityStatus = "Power ON";
	else majorityStatus = "Power OFF";
	const confidence = definiteReportCount === 0 ? 0 : Math.round(Math.max(powerOnReports, powerOffReports) / definiteReportCount * 100);
	return {
		nearbyReports,
		reportCount,
		powerOnReports,
		powerOffReports,
		notSureReports,
		majorityStatus,
		confidence,
		currentStatus: reportCount === 0 ? "Unknown" : definiteReportCount === 0 ? "Needs Confirmation" : majorityStatus
	};
}
//#endregion
export { resolveLocation as n, useCurrentLocation as r, calculateCommunityPower as t };
