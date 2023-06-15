function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randNumber(20, 120);

console.log(`Teddy is ${age} years old!`);