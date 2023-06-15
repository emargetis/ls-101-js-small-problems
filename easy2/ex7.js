function xor(arr1, arr2) {
  
  //return ((arr1 || arr2) && (arr1 == false || arr2 == false));
  
  return !!((arr1 && !arr2) || (!arr1 && arr2));
}


console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, 0) === false);   // true