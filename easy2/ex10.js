const readline = require('readline-sync');

let currentAge = readline.question('What is your age? ');
let retirementAge = readline.question('At what age would you like to retire? ');

let currentYear = new Date().getFullYear();
let yearsLeft = retirementAge - currentAge;

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsLeft}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);
