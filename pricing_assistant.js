let productName = "Souvenir Sweatshirt";
let costPerUnit = 2;
let basePrice = 10.99;
let discountRate = 0.08;
let salesTaxRate = 0.05;
let fixedMonthlyCost = 80;

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