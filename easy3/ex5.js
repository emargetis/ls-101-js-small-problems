/*
**Mental model: intake a digit. output a right trianle with a height and width of that digit. 
**Examples / test cases: 
**Data structure: 
**Algorithm:
    - intake a digit
    - initialize a counter for blank spaces starting with digit - 1 
    - initialize a counter for stars starting with 1
    - in a while loop, continue until the blank space >= 0
      - make a string of using the repeat function for white spaces and log it
      - decrement the blank space count
**Code:
*/

function triangle(num) {
  let whiteSpaces = num - 1;
  let stars = 1;
  
  while (whiteSpaces >= 0) {
    console.log(' '.repeat(whiteSpaces) + '*'.repeat(stars));
    whiteSpaces -= 1;
    stars += 1;
  }
}

triangle(5);
triangle(9);