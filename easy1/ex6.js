/*
**Mental Model: intake an enter greater than 0 and ask user if they want to determin sum or product of all numbers between. Calculate the answer and output it.
**Examples / Test Cases: 
    1. 5 p 120
    1. 9 s 45
**Data Structure: just use numbers
**Algorithm: 
    1. Gather number
    2. Gather function
    3. Perform calculation
    4. Output calculation
**Code: see below
*/

const readline = require('readline-sync');

function computeSum(input) {
  let total = 0;
  
  for (let i = 1; i <= number; i += 1) {
    total += i;
  }
  
  return total;
}

function computeProduct(input) {
  let total = 1;
  
  for (let i = 1; i <= number; i += 1) {
    total *= i;
  }
  
  return total;
}

function gatherNumber() {
  let num = readline.question('Please enter an integer greater than 0: ');
  
  while (Number.isNaN(Number(num)) || num.trimStart() === '' || Number(num) < 0) {
    num = readline.question('Invalid input. Please enter an integer greater than 0: ').toLowerCase();
  }
  
  return Number(num);
}

function gatherOperation() {
  let op = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ').toLowerCase();
  
  while (!(op === 's' || op === 'p')) {
    op = readline.question('Invalid input. Enter "s" to compute the sum, or "p" to compute the product: ').toLowerCase();
  }
  
  return op;
}

let number = gatherNumber();
let operation = gatherOperation();

if (operation === 's') {
  let total = computeSum();
  console.log(`The sum of the integers between 1 and ${number} is ${total}`);
} else {
  let total = computeProduct();
  console.log(`The product of the integers between 1 and ${number} is ${total}`);
}