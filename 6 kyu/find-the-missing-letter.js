// DESCRIPTION:
//   Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns
// the missing letter in the array.
//
//   You will always get an valid array. And it will be always exactly one letter be missing.
//   The length of the array will always be at least 2.
// The array will always contain letters in only one case.
//
// Example:
//
//   ['a','b','c','d','f'] -> 'e'
//   ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)


// SOLUTION:
function findMissingLetter(array) {
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  if (array[0] === array[0].toUpperCase()) abc = abc.toUpperCase()
  abc = abc.split('')
  for (let i = abc.indexOf(array[0]), indArr = 0; ; i++, indArr++) {
    if (abc[i] !== array[indArr]) return abc[i]
  }
}

console.log(findMissingLetter(['a','b','c','d','f'])); // 'e'
console.log(findMissingLetter(['O','Q','R','S']));  // 'P'