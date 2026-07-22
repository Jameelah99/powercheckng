//#region node_modules/@clerk/ui/dist/themes/createTheme.js
var createTheme = (themeParams) => {
	return {
		...themeParams,
		__type: "prebuilt_appearance"
	};
};
//#endregion
//#region node_modules/@clerk/ui/dist/themes/dark.js
var dark = createTheme({
	name: "dark",
	variables: {
		colorBackground: "#212126",
		colorNeutral: "white",
		colorPrimary: "#ffffff",
		colorPrimaryForeground: "black",
		colorForeground: "white",
		colorInputForeground: "white",
		colorInput: "#26262B"
	},
	elements: { activeDeviceIcon: {
		"--cl-chassis-bottom": "#d2d2d2",
		"--cl-chassis-back": "#e6e6e6",
		"--cl-chassis-screen": "#e6e6e6",
		"--cl-screen": "#111111"
	} }
});
//#endregion
export { dark as t };
