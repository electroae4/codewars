// DESCRIPTION:
//   Return the number (count) of vowels in the given string.
//
//   We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.


// SOLUTION:
function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let regex = new RegExp(`[${vowels.join('')}]`, 'g')
  return (str.match(regex) || []).length;
}

console.log(getCount("rr")) //5