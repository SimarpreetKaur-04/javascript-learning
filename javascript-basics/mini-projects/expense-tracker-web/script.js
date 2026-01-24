let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
renderExpenses();

function addExpense() {
  const title = document.getElementById("title").value;
  const amount = Number(document.getElementById("amount").value);

  if (title === "" || amount <= 0) {
    alert("Please enter valid expense");
    return;
  }

  expenses.push({ title, amount });
  renderExpenses();

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}

function renderExpenses() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  let total = 0;

  expenses.forEach((exp, index) => {
    total += exp.amount;

    const li = document.createElement("li");
    li.innerHTML = `
      ${exp.title} - ₹${exp.amount}
      <button onclick="deleteExpense(${index})">❌</button>
    `;

    list.appendChild(li);
  });

  document.getElementById("total").textContent = total;
  localStorage.setItem("expenses", JSON.stringify(expenses));
}
