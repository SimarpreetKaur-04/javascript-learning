// Load expenses from localStorage or initialize empty array
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Initial render
renderExpenses();

function addExpense() {
  const title = document.getElementById("title").value.trim();
  const amount = Number(document.getElementById("amount").value);
  const category = document.getElementById("category").value;

  if (title === "" || amount <= 0 || category === "") {
    alert("Please enter valid expense details");
    return;
  }

  expenses.push({ title, amount, category });

  // Save to localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderExpenses();

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";
}

function deleteExpense(index) {
  expenses.splice(index, 1);

  // Update localStorage after delete
  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderExpenses();
}

function renderExpenses() {
  const list = document.getElementById("expenseList");
  const totalElement = document.getElementById("total");
  const summaryList = document.getElementById("categorySummary");

  list.innerHTML = "";
  summaryList.innerHTML = "";

  // ✅ Empty state handling
  if (expenses.length === 0) {
    list.innerHTML = "<li>No expenses added yet 🚫</li>";
    totalElement.textContent = 0;
    return;
  }

  let total = 0;
  const categoryTotals = {};

  expenses.forEach((exp, index) => {
    total += exp.amount;

    // Category-wise total
    categoryTotals[exp.category] =
      (categoryTotals[exp.category] || 0) + exp.amount;

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${exp.category}</strong> | ${exp.title} - ₹${exp.amount}
      <button onclick="deleteExpense(${index})">❌</button>
    `;

    list.appendChild(li);
  });

  // Render category summary
  for (let cat in categoryTotals) {
    const li = document.createElement("li");
    li.textContent = `${cat}: ₹${categoryTotals[cat]}`;
    summaryList.appendChild(li);
  }

  totalElement.textContent = total;
}
