let itemName = "Souvenir Sweatshirt";
let unitCost = 15;
let currentStock = 50;
let reorderLevel = 30;
let targetStock = 150;
let weeklyDemand = 20;
let supplierLeadTimeWeeks = 3;

let weeksofCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reoderQuantity = (currentStock <= reorderLevel || weeksofCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reoderQuantity * unitCost
let reorderNow = currentStock <= reorderLevel || weeksofCover < supplierLeadTimeWeeks;

console.log("Item Name: " + itemName);
console.log("Weeks of Cover: " + weeksofCover.toFixed(2));
console.log("Reorder Now: " + reorderNow);
console.log("Recommended Reorder Quantity: " + reoderQuantity);
console.log("Estimated Reorder Cost: $" + estimatedReorderCost.toFixed(2));