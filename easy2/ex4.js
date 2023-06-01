let multiply = (num1, num2) => num1 * num2;

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

function power(num, exp) {
  let total = 1;
  
  for (let i = 1; i <= exp; i++) {
    total = multiply(total, num);
  }
  
  return total;
}

console.log(power(5, 4)); 

function powerRec(num, exp) {
  if (exp === 2) {
    return multiply(num, num);
  } else {
    return num * powerRec(num, exp - 1);
  }
}

console.log(powerRec(5, 4)); 