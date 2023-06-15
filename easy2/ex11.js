function centerOf(str) {
  let middle = str.length / 2;
  
  if (str.length % 2 === 0) {
    return str[middle - 1] + str[middle];
  } else {
    return str[Math.floor(middle)];
  }
  
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"