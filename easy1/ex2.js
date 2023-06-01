/*
**Mental Model: log all odd numbers 1-99 inclusive with each number on a new line
**Examples / Test Cases: 1, 3, 5 ... 99
**Data Structure: just use numbers
**Algorithm: 
    1. loop through every odd digit from 1-99
    2. during each iteration, log the number
**Code: see below
*/

for(let i = 1; i <= 99; i +=2) {
  console.log(i);
}


//improved version
const readline = require('readline-sync');

let startNum = Number(readline.question('What is the starting number? '));
let endNum = Number(readline.question('What is the ending number? '));

while (startNum <= endNum) {
  if (startNum % 2 === 1) {
    console.log(startNum);
  }
  
  startNum += 1;
}
