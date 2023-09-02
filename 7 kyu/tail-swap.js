// DESCRIPTION:
// You'll be given a list of two strings, and each will contain exactly one colon (":")
// in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.
//
// Your job is to return a list of two strings (in the same order as the original list), but
// with the characters after each colon swapped.
//
//   Examples
//   ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
//   ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]


// SOLUTION:
function tailSwap(arr) {
  let i_1 = arr[0].replace(":" + arr[0].split(":")[1], ":" + arr[1].split(":")[1]);
  let i_2 = arr[1].replace(":" + arr[1].split(":")[1], ":" + arr[0].split(":")[1])

  arr = [i_1, i_2]
  return arr;
}

console.log(tailSwap([",:;",",:,"]));