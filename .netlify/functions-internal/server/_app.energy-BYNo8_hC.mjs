import { o as __toESM } from "./_runtime.mjs";
import { S as require_react, x as require_jsx_runtime } from "./_libs/@clerk/react+[...].mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { G as Brain, V as Check, h as Plus, s as Trash2 } from "./_libs/lucide-react.mjs";
import { t as PageHeader } from "./_ssr/PageHeader-CWGFYQBI.mjs";
import { t as GlassCard } from "./_ssr/GlassCard-tAHr1923.mjs";
import { a as saveBudget, i as saveAppliances, n as loadSavedAppliances, o as saveEnergyAnalysis, r as loadSavedBudget } from "./_ssr/energyStorage-CoGla4sz.mjs";
import { i as analyzeEnergyPlan, n as DEFAULT_APPLIANCES, r as POWER_RANGES, t as APPLIANCE_CATEGORIES } from "./_ssr/energyPlanner-4WXwCdNV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.energy-BYNo8_hC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function CustomApplianceForm({ onAdd, onCancel }) {
	const [name, setName] = (0, import_react.useState)("");
	const [powerRange, setPowerRange] = (0, import_react.useState)(POWER_RANGES[2].id);
	const [watts, setWatts] = (0, import_react.useState)(POWER_RANGES[2].defaultWatts.toString());
	const [quantity, setQuantity] = (0, import_react.useState)("1");
	const [hours, setHours] = (0, import_react.useState)("1");
	const nameValue = name.trim();
	const wattsValue = Number(watts);
	const quantityValue = Number(quantity);
	const hoursValue = Number(hours);
	const isValid = nameValue.length >= 2 && Number.isFinite(wattsValue) && wattsValue > 0 && Number.isFinite(quantityValue) && quantityValue >= 1 && Number.isFinite(hoursValue) && hoursValue > 0 && hoursValue <= 24;
	const handleSubmit = () => {
		if (!isValid) return;
		onAdd({
			id: `custom-${Date.now()}`,
			name: nameValue,
			selected: true,
			watts: wattsValue,
			quantity: quantityValue,
			hours: hoursValue,
			essential: false
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 mb-4 rounded-xl border border-primary/30 bg-primary/5 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold",
				children: "Add Custom Appliance"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "Give your appliance a name, choose an estimated power range, and adjust the values if you know the exact specifications."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: "Appliance Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: name,
						onChange: (event) => setName(event.target.value),
						placeholder: "e.g. Deep Freezer",
						className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "Estimated Power"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: powerRange,
								onChange: (event) => {
									const selected = POWER_RANGES.find((range) => range.id === event.target.value);
									setPowerRange(event.target.value);
									if (selected) setWatts(selected.defaultWatts.toString());
								},
								className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary",
								children: POWER_RANGES.map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: range.id,
									children: range.label
								}, range.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "Power (Watts)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "1",
								value: watts,
								onChange: (event) => setWatts(event.target.value),
								className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "Quantity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "1",
								step: "1",
								value: quantity,
								onChange: (event) => setQuantity(event.target.value),
								className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "Hours/day"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "0.5",
								max: "24",
								step: "0.5",
								value: hours,
								onChange: (event) => setHours(event.target.value),
								className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "rounded-lg border border-border px-4 py-2 text-sm font-medium transition hover:bg-background/60",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleSubmit,
					disabled: !isValid,
					className: "rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50",
					children: "Add Appliance"
				})]
			})
		]
	});
}
var APPLIANCE_CATALOGUE = [
	{
		id: "air-conditioner",
		name: "Air Conditioner",
		category: "Cooling",
		watts: 1500,
		defaultHours: 8
	},
	{
		id: "ceiling-fan",
		name: "Ceiling Fan",
		category: "Cooling",
		watts: 80,
		defaultHours: 10
	},
	{
		id: "standing-fan",
		name: "Standing Fan",
		category: "Cooling",
		watts: 70,
		defaultHours: 10
	},
	{
		id: "chest-freezer",
		name: "Chest Freezer",
		category: "Cooling",
		watts: 350,
		defaultHours: 24
	},
	{
		id: "home-theatre",
		name: "Home Theatre",
		category: "Entertainment",
		watts: 150,
		defaultHours: 4
	},
	{
		id: "microwave",
		name: "Microwave",
		category: "Kitchen",
		watts: 1200,
		defaultHours: .5
	},
	{
		id: "electric-kettle",
		name: "Electric Kettle",
		category: "Kitchen",
		watts: 1800,
		defaultHours: .5
	},
	{
		id: "blender",
		name: "Blender",
		category: "Kitchen",
		watts: 350,
		defaultHours: .25
	},
	{
		id: "laptop",
		name: "Laptop",
		category: "Office",
		watts: 65,
		defaultHours: 6
	},
	{
		id: "desktop",
		name: "Desktop Computer",
		category: "Office",
		watts: 250,
		defaultHours: 6
	},
	{
		id: "printer",
		name: "Printer",
		category: "Office",
		watts: 100,
		defaultHours: 1
	},
	{
		id: "washing-machine",
		name: "Washing Machine",
		category: "Laundry",
		watts: 500,
		defaultHours: 1
	},
	{
		id: "electric-iron",
		name: "Electric Iron",
		category: "Laundry",
		watts: 1e3,
		defaultHours: 1
	},
	{
		id: "borehole-pump",
		name: "Borehole Pump",
		category: "Water",
		watts: 1100,
		defaultHours: 1
	},
	{
		id: "cctv-camera",
		name: "CCTV Camera",
		category: "Security",
		watts: 15,
		defaultHours: 24
	},
	{
		id: "pos-terminal",
		name: "POS Terminal",
		category: "Workshop & Business",
		watts: 15,
		defaultHours: 10
	},
	{
		id: "photocopier",
		name: "Photocopier",
		category: "Workshop & Business",
		watts: 900,
		defaultHours: 2
	},
	{
		id: "hair-clipper",
		name: "Hair Clipper",
		category: "Workshop & Business",
		watts: 20,
		defaultHours: 4
	},
	{
		id: "hair-dryer",
		name: "Hair Dryer",
		category: "Workshop & Business",
		watts: 1800,
		defaultHours: 1
	}
];
function ApplianceSelector({ appliances, onToggle, onUpdate, onAddAppliance, onRemoveAppliance, onToggleEssential, onContinueToBudget }) {
	const [showCustomForm, setShowCustomForm] = (0, import_react.useState)(false);
	const [showCatalogue, setShowCatalogue] = (0, import_react.useState)(false);
	const [search, setSearch] = (0, import_react.useState)("");
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All");
	const existingAppliances = new Set(appliances.map((a) => a.name.toLowerCase()));
	const filteredCatalogue = APPLIANCE_CATALOGUE.filter((item) => {
		const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
		const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
		const alreadyAdded = existingAppliances.has(item.name.toLowerCase());
		return matchesSearch && matchesCategory && !alreadyAdded;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-wrap items-start justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 lg:space-y-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold sm:text-xl",
						children: "Select Your Appliances"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Choose the appliances you use and adjust their daily usage."
					})]
				}),
				showCatalogue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-background p-4 shadow-2xl sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold",
									children: "Add an Appliance"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Choose from our appliance library or create your own."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setSearch("");
										setSelectedCategory("All");
										setShowCatalogue(false);
									},
									className: "rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground",
									children: "✕"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Search appliances...",
								value: search,
								onChange: (e) => setSearch(e.target.value),
								className: "mt-5 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary mb-3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex w-full flex-col gap-2 sm:w-auto sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSelectedCategory("All"),
									className: `rounded-full px-3 py-1 text-sm transition ${selectedCategory === "All" ? "bg-primary text-primary-foreground" : "border border-border hover:border-primary"}`,
									children: "All"
								}), APPLIANCE_CATEGORIES.filter((category) => category.id !== "all").map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSelectedCategory(category.id),
									className: `rounded-full px-3 py-1 text-sm transition ${selectedCategory === category.id ? "bg-primary text-primary-foreground" : "border border-border hover:border-primary"}`,
									children: category.label
								}, category.id))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
								children: filteredCatalogue.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										onAddAppliance({
											id: item.id,
											name: item.name,
											selected: true,
											watts: item.watts,
											quantity: 1,
											hours: item.defaultHours,
											essential: false
										});
										setSearch("");
										setSelectedCategory("All");
										setShowCatalogue(false);
									},
									className: "rounded-xl border border-border bg-background p-4 text-left transition hover:border-primary hover:bg-primary/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											item.category,
											" • ",
											item.watts,
											"W"
										]
									})]
								}, item.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 border-t border-border pt-5 display flex flex-col items-center justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Can't find your appliance?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setSearch("");
										setSelectedCategory("All");
										setShowCatalogue(false);
										setShowCustomForm(true);
									},
									className: "mt-3 w-full rounded-lg border border-primary bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto",
									children: "+ Create Custom Appliance"
								})]
							})
						]
					})
				}),
				!showCustomForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: setShowCatalogue.bind(null, true),
						className: "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "Add Appliance"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onContinueToBudget,
						className: "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10 sm:w-auto",
						children: "Set Monthly Budget"
					})]
				})
			]
		}),
		showCustomForm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomApplianceForm, {
			onAdd: (appliance) => {
				onAddAppliance(appliance);
				setShowCustomForm(false);
			},
			onCancel: () => setShowCustomForm(false)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: appliances.map((appliance) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-2xl border border-border bg-background/30 px-5 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onToggle(appliance.name),
						className: "flex min-w-0 items-center gap-3 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition ${appliance.selected ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background"}`,
							children: appliance.selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold sm:text-base",
								children: appliance.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-muted-foreground sm:text-xs",
								children: [appliance.watts, "W"]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: (event) => {
							event.stopPropagation();
							onRemoveAppliance(appliance.id);
						},
						"aria-label": `Remove ${appliance.name}`,
						title: `Remove ${appliance.name}`,
						className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-red-500/10 hover:text-red-500",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "\r\nabsolute\r\nright-1\r\ntop-1\r\nsm:right-4 top-4\r\nh-4\r\nw-4\r\nsm:h-7 w-7 \r\ntext-muted-foreground\r\nhover:text-destructive\r\n" })
					})]
				}), appliance.selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "Watts"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "1",
								value: appliance.watts,
								onChange: (event) => onUpdate(appliance.name, "watts", Number(event.target.value)),
								className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "Quantity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "1",
								value: appliance.quantity,
								onChange: (event) => onUpdate(appliance.name, "quantity", Number(event.target.value)),
								className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "Hours/day"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: "0",
								max: "24",
								step: "0.5",
								value: appliance.hours,
								onChange: (event) => onUpdate(appliance.name, "hours", Number(event.target.value)),
								className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 transition hover:bg-background/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: appliance.essential,
									onChange: () => onToggleEssential(appliance.name),
									className: "h-4 w-4 accent-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Power during outage"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Include this appliance when sizing your backup system."
								})] })]
							})
						})
					]
				})]
			}, appliance.id))
		})
	] });
}
function EnergyBudgetInput({ budget, onBudgetChange, onAnalyze, isAnalyzing }) {
	const budgetValue = Number(budget);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg font-bold sm:text-xl",
			children: "Monthly Electricity Budget"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-6 text-muted-foreground",
			children: "Enter how much you plan to spend on electricity each month."
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-sm font-medium text-foreground",
				children: "Monthly Budget"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground",
					children: "₦"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					min: "1",
					value: budget,
					onChange: (event) => onBudgetChange(event.target.value),
					placeholder: "25000",
					className: "w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-base outline-none transition focus:border-primary"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onAnalyze,
			disabled: !(Number.isFinite(budgetValue) && budgetValue > 0 && !isAnalyzing),
			className: "mt-6 w-full rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50",
			children: isAnalyzing ? "Analyzing Your Energy Plan..." : "Analyze My Energy Plan"
		})
	] });
}
function EnergyAnalysisResults({ analysis, budget }) {
	const isOverBudget = analysis.monthlyCost > budget;
	const budgetProgress = budget > 0 ? Math.min(analysis.monthlyCost / budget * 100, 100) : 0;
	const budgetDifference = Math.abs(analysis.monthlyCost - budget);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-5 text-lg font-semibold sm:text-xl",
				children: "Analysis Results"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border p-4 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Daily Usage"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xl font-bold leading-none sm:text-2xl",
							children: [analysis.dailyUsage.toFixed(1), " kWh"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Monthly Usage"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xl font-bold leading-none sm:text-2xl",
							children: [analysis.monthlyUsage.toFixed(1), " kWh"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Estimated Monthly Bill"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xl font-bold leading-none sm:text-2xl",
							children: ["₦", analysis.monthlyCost.toLocaleString()]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Energy Health Score"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xl font-bold leading-none sm:text-2xl text-primary",
							children: [analysis.score, "/100"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Highest Consuming Appliance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-lg font-semibold leading-none sm:text-xl",
							children: analysis.highestConsumer
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: "Budget Progress"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-medium",
							children: [
								"₦",
								analysis.monthlyCost.toLocaleString(),
								" / ₦",
								budget.toLocaleString()
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-3 overflow-hidden rounded-full bg-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `h-full ${isOverBudget ? "bg-red-500" : "bg-primary"}`,
							style: { width: `${budgetProgress}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-6 text-muted-foreground",
						children: isOverBudget ? `⚠ You're over budget by ₦${budgetDifference.toLocaleString()}` : "✅ You're within your monthly electricity budget."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 font-semibold",
					children: "Appliance Cost Breakdown"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: analysis.breakdown.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 rounded-2xl border border-border p-4 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pr-3 text-sm font-semibold leading-6 sm:text-base",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "shrink-0 text-sm font-bold text-primary sm:text-base",
							children: ["₦", item.cost.toLocaleString()]
						})]
					}, item.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-8 mb-4 text-lg font-semibold",
				children: "⚡ Smart Planner Recommendations"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: analysis.recommendations.map((tip, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl border border-border bg-background/40 p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-7",
						children: ["💡 ", tip]
					})
				}, `${index}-${tip}`))
			})
		]
	});
}
var ANALYSIS_SESSION_KEY = "powercheckng-energy-analysis-timestamp";
var ANALYSIS_EXPIRY_MS = 1800 * 1e3;
function SmartEnergyPlanner() {
	const [hasLoadedSavedPlan, setHasLoadedSavedPlan] = (0, import_react.useState)(false);
	const [appliances, setAppliances] = (0, import_react.useState)(() => DEFAULT_APPLIANCES.map((appliance) => ({ ...appliance })));
	const [budget, setBudget] = (0, import_react.useState)("25000");
	const [analysis, setAnalysis] = (0, import_react.useState)(null);
	const [isAnalyzing, setIsAnalyzing] = (0, import_react.useState)(false);
	const budgetSectionRef = (0, import_react.useRef)(null);
	const resultsSectionRef = (0, import_react.useRef)(null);
	const clearAnalysis = () => {
		setAnalysis(null);
		if (typeof window !== "undefined") window.sessionStorage.removeItem(ANALYSIS_SESSION_KEY);
	};
	(0, import_react.useEffect)(() => {
		const savedAppliances = loadSavedAppliances();
		const savedBudget = loadSavedBudget();
		const restoredAppliances = savedAppliances && savedAppliances.length > 0 ? savedAppliances : DEFAULT_APPLIANCES.map((appliance) => ({ ...appliance }));
		const restoredBudget = savedBudget !== null ? savedBudget : "25000";
		setAppliances(restoredAppliances);
		setBudget(restoredBudget);
		const analysisTimestamp = window.sessionStorage.getItem(ANALYSIS_SESSION_KEY);
		const analysisTime = Number(analysisTimestamp);
		if (Number.isFinite(analysisTime) && Date.now() - analysisTime < ANALYSIS_EXPIRY_MS) {
			const budgetValue = Number(restoredBudget);
			if (Number.isFinite(budgetValue) && budgetValue > 0) {
				const restoredAnalysis = analyzeEnergyPlan(restoredAppliances, budgetValue);
				setAnalysis(restoredAnalysis);
			}
		} else window.sessionStorage.removeItem(ANALYSIS_SESSION_KEY);
		setHasLoadedSavedPlan(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hasLoadedSavedPlan) return;
		saveAppliances(appliances);
	}, [appliances, hasLoadedSavedPlan]);
	(0, import_react.useEffect)(() => {
		if (!hasLoadedSavedPlan) return;
		saveBudget(budget);
	}, [budget, hasLoadedSavedPlan]);
	(0, import_react.useEffect)(() => {
		if (!analysis) return;
		resultsSectionRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [analysis]);
	const toggle = (name) => {
		setAppliances((current) => current.map((appliance) => appliance.name === name ? {
			...appliance,
			selected: !appliance.selected
		} : appliance));
		clearAnalysis();
	};
	const toggleEssential = (name) => {
		setAppliances((current) => current.map((appliance) => appliance.name === name ? {
			...appliance,
			essential: !appliance.essential
		} : appliance));
		clearAnalysis();
	};
	const updateAppliance = (name, field, value) => {
		setAppliances((current) => current.map((appliance) => appliance.name === name ? {
			...appliance,
			[field]: value
		} : appliance));
		clearAnalysis();
	};
	const updateBudget = (value) => {
		setBudget(value);
		clearAnalysis();
	};
	const addCustomAppliance = (appliance) => {
		setAppliances((current) => [appliance, ...current]);
		clearAnalysis();
	};
	const removeAppliance = (id) => {
		setAppliances((current) => current.filter((appliance) => appliance.id !== id));
		clearAnalysis();
	};
	const analyzePlan = () => {
		const budgetValue = Number(budget);
		if (!Number.isFinite(budgetValue) || budgetValue <= 0) return;
		setIsAnalyzing(true);
		clearAnalysis();
		setTimeout(() => {
			const result = analyzeEnergyPlan(appliances, budgetValue);
			setAnalysis(result);
			saveEnergyAnalysis(result);
			window.sessionStorage.setItem(ANALYSIS_SESSION_KEY, Date.now().toString());
			setIsAnalyzing(false);
		}, 1200);
	};
	const scrollToBudget = () => {
		budgetSectionRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 px-4 pb-24 sm:px-0 lg:pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				icon: Brain,
				title: "Smart Energy Planner",
				description: "Build an energy plan based on your appliances and monthly electricity budget.",
				action: analysis ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/insights",
					className: "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10 sm:w-auto",
					children: ["View Smart Insights", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
				}) : void 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplianceSelector, {
				appliances,
				onToggle: toggle,
				onUpdate: updateAppliance,
				onAddAppliance: addCustomAppliance,
				onRemoveAppliance: removeAppliance,
				onToggleEssential: toggleEssential,
				onContinueToBudget: scrollToBudget
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: budgetSectionRef,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnergyBudgetInput, {
					budget,
					onBudgetChange: updateBudget,
					onAnalyze: analyzePlan,
					isAnalyzing
				})
			}),
			analysis && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				ref: resultsSectionRef,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnergyAnalysisResults, {
					analysis,
					budget: Number(budget)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center px-4 sm:px-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full flex-col gap-3 sm:w-auto sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							className: "inline-flex w-full items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-semibold transition hover:bg-white/5 sm:w-auto sm:px-6",
							children: "← View Dashboard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/insights",
							className: "group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10 sm:w-auto sm:px-6",
							children: ["View Full Smart Insights", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "transition-transform group-hover:translate-x-1",
								children: "→"
							})]
						})]
					})
				})]
			})
		]
	});
}
//#endregion
export { SmartEnergyPlanner as component };
