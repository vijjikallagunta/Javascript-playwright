// Creating an array called 'expenses' with 5 different expense amounts
const expenses = [150, 200, 50, 300, 120];

// Calculating the total expenses by summing all the elements of the array
const totalExpenses = expenses.reduce((acc, current) => acc + current, 0);

// Finding the highest and lowest individual expenses within the array
const highestExpense = Math.max(expenses);
const lowestExpense = Math.min(expenses);

console.log("Total Expenses:", totalExpenses);
console.log("Highest Expense:", highestExpense);
console.log("Lowest Expense:", lowestExpense);