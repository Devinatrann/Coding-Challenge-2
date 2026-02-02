let productName = "Souvenir Sweatshirt";
let costPerUnit = 15;
let basePrice = 45;
let discountRate = 0.05;
let salesTaxRate = 0.07;
let fixedMonthlyCost = 1000;

let discountPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;

let breakEvenUnits = Math.ceil(fixedMonthlyCost / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("Product Name: " + productName);
console.log("Discounted Price: $" + discountPrice.toFixed(2));
console.log("Final Price with Tax: $" + finalPriceWithTax.toFixed(2));
console.log("Profit per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break-even Units: " + breakEvenUnits);
console.log("Is Profitable per Unit: " + isProfitablePerUnit);