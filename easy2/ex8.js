function oddities(arr) {
  let newArray = [];
  
  for (let i = 0; i < arr.length; i += 2) {
      newArray.push(arr[i]);
  }
  
  return newArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []


function evenities(arr) {
  let newArray = [];
  
  for (let i = 1; i < arr.length; i += 2) {
      newArray.push(arr[i]);
  }
  
  return newArray;
}

console.log(evenities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(evenities(["abc", "def"])); // logs ['abc']
console.log(evenities([123])); // logs [123]
console.log(evenities([])); // logs []

function evens(arr) {
  return arr.filter((_, index) => index % 2 === 1);
}

console.log(evens([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(evens(["abc", "def"])); // logs ['abc']
console.log(evens([123])); // logs [123]
 // logs []