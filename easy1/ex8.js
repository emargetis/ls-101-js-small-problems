/*
**Mental Model: intake an enter year number. If the year is divisible by 4 leap year, unless divisible by 100. If year is divisible by 100 and 400 then leap year.
**Examples / Test Cases: 
    1. 400 = leap year
    2. 200 = not a leap year
    3. 8 = leap year  
**Data Structure: just use numbers
**Algorithm: 
    - Gather input
    - Convert input to number
    - Check if leap year
      - if number / 4 && num not div by 4 or num / 400 leap year
      - else not leap year
    - If leap year return true, else false
**Code: see below
*/

/*
function isLeapYear(num) {
  return ((num % 4 === 0 && num % 100 !== 0) || (num % 400 ==0));
}
*/

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true