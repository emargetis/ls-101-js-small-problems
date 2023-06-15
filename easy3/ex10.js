function century(year) {
  let centNum = Math.ceil(year / 100);
  let centChar = String(centNum);
  let lastNum = centNum % 10;
  let lastTwoNum = centNum % 100;
  
  if ((lastTwoNum > 4 && lastTwoNum < 20) || lastNum === 0) {
    return centChar + 'th';
  } else if (lastNum === 3) {
    return centChar + 'rd';
  } else if (lastNum === 2) {
    return centChar + 'nd';
  } else {
    return centChar + 'st';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
console.log(century(13100));       // "113th"