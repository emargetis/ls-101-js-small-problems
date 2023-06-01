function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}


function multisum(num) {
  let total = 0;
  
  for (let i = 1; i <= num; i += 1) {
    if (isMultiple(i, 3) || isMultiple(i, 5)) {
      total += i;
    }
  }
  
  return total;
}


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168