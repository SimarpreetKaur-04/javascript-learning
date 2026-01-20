// objects.js
// Day 6: JavaScript Objects

let student = {
  name: "Simarpreet",
  age: 20,
  branch: "CSE",
  isLearningJS: true
};

console.log("Student Name:", student.name);
console.log("Branch:", student.branch);

// Update property
student.age = 21;
console.log("Updated Age:", student.age);

// Object with logic
if (student.isLearningJS) {
  console.log(student.name + " is learning JavaScript");
} else {
  console.log(student.name + " is not learning JavaScript");
}
