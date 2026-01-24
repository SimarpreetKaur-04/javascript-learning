let expenses = [];

function addExpense() {
  const title = document.getElementById("title").value;
  const amount = Number(document.getElementById("amount").value);

  if (title === "" || amount <= 0) {
    alert("Please enter valid expense");
    return;
  }

  expenses.push({ title, amount });
  renderExpenses();
}

function renderExpenses() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  let total = 0;

  expenses.forEach((exp, index) => {
    total += exp.amount;

    const li = document.createElement("li");
    li.textContent = `${exp.title} - ₹${exp.amount}`;
    list.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}
