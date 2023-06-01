function penultimate(str) {
  let words = str.split(' ');
  return words[words.length - 2];
}



console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true



//edge cases: even numbers, 0 words, 1 word | happy path = odd number > 1
function middle(str) {
  let words = str.split(' ');
  let wordCount = words.length;
  
  if (words[0] === '') {
    return 'Nothing here';
  } else if (wordCount === 1) {
    return words[0];
  } else if (wordCount % 2 === 0) {
    return words[Math.floor(wordCount / 2) - 1];
  } else {
    return words[Math.floor(wordCount / 2)];
  }
}


console.log(middle("")); // logs true
console.log(middle("Launch")); // logs true
console.log(middle("Launch School")); // logs true
console.log(middle("Launch School is")); // logs true
console.log(middle("Launch School is great!")); // logs true
console.log(middle("Launch School is great is it not!")); // logs true
