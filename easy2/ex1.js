/*
**Mental model: function accepts array and object then accesses the elements within each to produce and return a string
**Examples/test cases:
**Data structure:
**Algorithm:
**Code:
*/

function greetings(nameArray,jobObject) {
  return `Hello, ${nameArray.join(' ')}! Nice to have a ${jobObject['title']} ${jobObject['occupation']} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.