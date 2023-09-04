// DESCRIPTION:
//   Task
// How many strings equal to A can be constructed using letters from the string B? Each letter can be
// used only once and in one string only.
//
//   Example
// For A = "abc" and B = "abccba", the output should be 2.
// We can construct 2 strings A with letters from B.
//
//   Input/Output
//   [input] string A
//
// String to construct, A contains only lowercase English letters.
//
//   Constraints: 3 ≤ A.length ≤ 9.
//
//   [input] string B
//
// String containing needed letters, B contains only lowercase English letters.
//
//   Constraints: 3 ≤ B.length ≤ 50.
//
//   [output] an integer



function stringsConstruction(A, B) {
  const count = [];

  for (let char of A) {
    let regex = new RegExp(char, "g");
    let count_char_in_B = (B.match(regex) || []).length
    let count_char_in_A = A.match(regex).length
    count.push(Math.floor(count_char_in_B/count_char_in_A));
  }
  return Math.min(...count);
}

