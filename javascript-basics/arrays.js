// day 4: Arrays and Loops

let numbers = [1,2,3,4,5];

console.log("Array elements");
for(let i=0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// calculate sum 
let sum = 0;
for(let i = 0; i< numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum of elements:" , sum);