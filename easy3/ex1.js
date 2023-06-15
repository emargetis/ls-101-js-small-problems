/*
**Mental model: intake a string. If there are consective instances of a certain character, they should be reduced to one instance. return string.
**Examples / test cases: daiiiillllyyyy = daily
**Data structure: Strings
**Algorithm:
    - Intake string
    - Declare and initialize a blank string
    - Declare and initialize a last character variable
    - Iterate through each character of the string
      - if it does not match the last character, add it to the blank string variable
      - reassign lastCharacter to the current character 
    -return the blank string
      
**Code:
*/

function crunch(string) {
  let newString = '';
  let lastCharacter = '';
  
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== lastCharacter) {
      newString += string[i];
    }
    
    lastCharacter = string[i];
  }
  
  return newString;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""