// day 5: conditional statements

let marks = 90;

if(marks >= 90) {
    console.log("Grade: A");
} else if(marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// using conditions with array

let numbers = [12,45,67,88,99];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        console.log(numbers[i], "is even");
    } else {
        console.log(numbers[i], "is odd");
    }
}