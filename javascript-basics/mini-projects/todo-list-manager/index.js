// To-Do List Manager
// Day 7 Mini Project

let tasks = [
  { title: "Learn JavaScript", completed: false },
  { title: "Practice Git", completed: true }
];

// Function to display all tasks
function showTasks() {
  console.log("My To-Do List:");
  for (let i = 0; i < tasks.length; i++) {
    let status = tasks[i].completed ? "Completed" : "Pending";
    console.log(`${i + 1}. ${tasks[i].title} - ${status}`);
  }
}

// Function to add a new task
function addTask(title) {
  tasks.push({ title: title, completed: false });
  console.log("Task added:", title);
}

// Function to mark task as completed
function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log("Task marked as completed:", tasks[index].title);
  } else {
    console.log("Invalid task number");
  }
}

// Program execution
showTasks();
addTask("Build a mini project");
completeTask(0);
showTasks();
