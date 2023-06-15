function cleanUp(str) {
  let newString = '';
  
  for (let i = 0; i < str.length; i += 1) {
    let utf = str.charCodeAt(i);
    
    if ((utf >= 65 && utf <= 90) || (utf >= 97 && utf <= 122)) {
      newString += str[i];
    } else if (newString[newString.length - 1] !== ' ' || i === 0) {
      newString += ' ';
    }
    
  }
  
  return newString;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "