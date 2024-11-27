const sales = [
    { id: 1, product: "Shoes", unitsSold: 120, pricePerUnit: 50 },
    { id: 2, product: "Shirts", unitsSold: 200, pricePerUnit: 30 },
    { id: 3, product: "Pants", unitsSold: 150, pricePerUnit: 40 },
    { id: 4, product: "Hats", unitsSold: 100, pricePerUnit: 20 },
];

// 1. Calculate the total revenue for each product
sales.forEach(item => {
    item.totalRevenue = item.unitsSold * item.pricePerUnit;
});
console.log("Sales with Total Revenue:");
console.log(sales);

// 2. Find the product with the highest revenue
const highest = sales.reduce((max, item) =>
    item.totalRevenue > max.totalRevenue ? item : max
);
console.log("Product with the highest revenue:");
console.log(highest);

// 3. Filter out products with a revenue less than $5,000
const filteredProducts = sales.filter((item) => item.totalRevenue < 5000);
console.log("Products with revenue < $5000: ");
console.log(filteredProducts);

// 4. Check if any product has sold more than 180 units.
const sold180Units = (sales.filter((x) => x.unitsSold > 180));
console.log("Products that sold more than 180 units");
console.log(sold180Units);
