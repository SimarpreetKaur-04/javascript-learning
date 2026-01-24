let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let editIndex = -1;

renderExpenses();

function addExpense() {
  const titleInput = document.getElementById("title");
  const amountInput = document.getElementById("amount");

  const title = titleInput.value;
  const amount = Number(amountInput.value);

  if (title === "" || amount <= 0) {
    alert("Please enter valid expense");
    return;
  }

  if (editIndex === -1) {
    // Add new expense
    expenses.push({ title, amount });
  } else {
    // Edit existing expense
    expenses[editIndex] = { title, amount };
    editIndex = -1;
  }

  titleInput.value = "";
  amountInput.value = "";

  saveAndRender();
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
      <button onclick="editExpense(${index})">✏️</button>
      <button onclick="deleteExpense(${index})">❌</button>
    `;

    list.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  saveAndRender();
}

function editExpense(index) {
  document.getElementById("title").value = expenses[index].title;
  document.getElementById("amount").value = expenses[index].amount;
  editIndex = index;
}

function saveAndRender() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
}
