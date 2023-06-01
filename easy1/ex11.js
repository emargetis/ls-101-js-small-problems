/*
**Mental Model: intake bill amount and tip rate then calculate tip and add it to bill amount for total. Display tip and total.
**Examples / Test Cases: 
    1. bill = 100 tip = 20% total = $120
    1. bill = 400 tip = 100% total = $800
**Data Structure: just use numbers
**Algorithm: 
    1. Gather bill  amount input
    2. Gather tip rate input
    3. convert the tip rate to decimal format
    4. Calculate tip amount
    5. Add tip amount to bill total
    6. Format and display tip amount
    7. Format and display total amount
**Code: see below
*/

function utf16Value(str) {
  let utfTotal = 0;
  
  for(let i = 0; i < str.length; i++) {
    utfTotal += str.charCodeAt(i);
  }
  
  return utfTotal;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811