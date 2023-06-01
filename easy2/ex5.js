const readline = require('readline-sync');

console.log('==> Enter the first number:');
let first = Number(readline.prompt());

console.log('==> Enter the second number:');
let second = Number(readline.prompt());

console.log(`==> ${first} + ${second} = ${first + second}`);
console.log(`==> ${first} - ${second} = ${first - second}`);
console.log(`==> ${first} * ${second} = ${first * second}`);
console.log(`==> ${first} / ${second} = ${Math.floor(first / second)}`);
console.log(`==> ${first} % ${second} = ${first % second}`);
console.log(`==> ${first} ** ${second} = ${first ** second}`);
