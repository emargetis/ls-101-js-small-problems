/*
**Mental Model: take an integer and return its distance to 0 on the number line
**Examples / Test Cases: -6 should return 6, 5 should return 5, 0 should return 0
**Data Structure: just use numbers
**Algorithm: 
    1. Send data to function
    2. Check if the number is odd. Need to account for negative numbers
    3. return number
**Code: see below
*/

function isOdd(number) {
  return (number % 2 === 1 || number % 2 === -1);
}


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true