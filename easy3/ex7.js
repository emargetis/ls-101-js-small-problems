function twice(num) {
  let strNum = String(num);
  
  if (strNum.length % 2 === 1) {
    return num * 2;
  } else if (strNum.slice(0, (strNum.length / 2)) === strNum.slice(strNum.length / 2)) {
    return num;
  } else {
    return num * 2;
  }
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676