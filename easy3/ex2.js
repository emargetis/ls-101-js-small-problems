/*
**Mental model: intake a string. output a string in a box
**Examples / test cases: daiiiillllyyyy = daily
**Data structure: Strings
**Algorithm:
    - Intake string
    - Deterimine the length of the string
    - Generate a first line using a helper function that intakes the start/end character, the middle character, total length of line, and optional string 
        - this helper function should iterate and build this string until the length is met
    - log each line as we build it using the helper function
**Code:
*/

function strBuilder(sideChar, middleChar, length, str) {
  //declare and initilize output string starting with the first character
  let output = sideChar;
  
  while (output.length < length - 1) {
    //If we are at the point to insert string and we have a string, do it
    if (output.length === 2 && str) {
      output += str;
    }
    
    output += middleChar;
  }
  
  //append last character
  output += sideChar;
  
  return output;
}

function logInBox(str) {
  let lineLength = str.length + 4;
  console.log(strBuilder('+', '-', lineLength));
  console.log(strBuilder('|', ' ', lineLength));
  console.log(strBuilder('|', ' ', lineLength, str));
  console.log(strBuilder('|', ' ', lineLength));
  console.log(strBuilder('+', '-', lineLength));
  
}

logInBox('To boldly go where no one has gone before.');

logInBox('Hi, my name is Erik.');

/**Algorithm:
    - Intake string and maximum line length
    - If the string length exceeds the max line length then we need to split the string up into chunks
    - We can store those string chunks in array since we don't know how many of them there will be
    - We need a way to identify where to start and stop each string section that we will store in the array
*/
function logInBoxOverflow(str, maxLength = 5) {
  let lineLength;
  let totalStringCount = 0;
  let overflowArray = [];
  
  if (str.length + 4 >= maxLength) {
    lineLength =  maxLength;
    let i = 1;
    
    while (totalStringCount < str.length) {
      let currentSection = str.slice(totalStringCount, (maxLength - 4) * i);
      overflowArray.push(currentSection);
      i += 1;
      totalStringCount += currentSection.length;
    }
  } else {
    lineLength = str.length + 4;
  }
  
  console.log(strBuilder('+', '-', lineLength));
  console.log(strBuilder('|', ' ', lineLength));
  overflowArray.forEach(element => {
    console.log(strBuilder('|', ' ', lineLength, element));
  });
  console.log(strBuilder('|', ' ', lineLength));
  console.log(strBuilder('+', '-', lineLength));

}

logInBoxOverflow('To boldly go where no one has gone before.', 10);
logInBoxOverflow('Hi, my name is Erik.', 20);

logInBoxOverflow('This is a fairly straight forward solution To simplify matters, we start out by setting horizontalRule and emptyLine to appropriate values for the top and bottom 2 lines of the box. The expression "-".repeat(message.length + 2) simply creates a string of message.size + 2 hyphens; combined with the + at the beginning and end of the string, this is just wide enough to draw the horizontal lines while leaving room for one blank on either side of the message.', 30);