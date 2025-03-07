// Create an array of product prices
const productPrices = [100, 25, 60, 45, 30, 80];

// Apply a 10% discount to all prices using the map method and store the results in a new array
const discountedPrices = productPrices.map(price => price * 0.9); // Apply 10% discount

// Use the filter method to create a new array of affordable products (below $50)
const affordableProducts = discountedPrices.filter(price => price < 50);

// Calculate the total cost of all items in the affordableProducts array using the reduce method
const totalAffordableCost = affordableProducts.reduce((acc, price) => acc + price, 0);

// Output the results
console.log("Discounted Prices:", discountedPrices);
console.log("Affordable Products:", affordableProducts);
console.log("Total Cost of Affordable Products:", totalAffordableCost);