let expenses = [];

function addExpense(title, amount) {
  expenses.push({
    title: title,
    amount: amount
  });
}

function getTotalExpense() {
  let total = 0;
  for (let exp of expenses) {
    total += exp.amount;
  }
  return total;
}

function showExpenses() {
  console.log("Expenses List:");
  expenses.forEach((exp, index) => {
    console.log(`${index + 1}. ${exp.title} - ₹${exp.amount}`);
  });
}

function deleteExpense(index) {
  if (index < 0 || index >= expenses.length) {
    console.log("Invalid expense index");
    return;
  }
  expenses.splice(index, 1);
  console.log("Expense deleted successfully");
}


// Testing
addExpense("Food", 200);
addExpense("Transport", 100);
addExpense("Books", 300);

showExpenses();
console.log("Total Expense: ₹", getTotalExpense());

deleteExpense(1);
showExpenses();
console.log("Total Expense: ₹", getTotalExpense());
