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

let readline = require('readline-sync');

let bill = parseFloat(readline.question('What is the bill? '));
let tipPer = parseFloat(readline.question('What is the tip percentage? '));
let tipAmount = bill * (tipPer / 100);
let totalAmount = bill + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalAmount.toFixed(2)}`);