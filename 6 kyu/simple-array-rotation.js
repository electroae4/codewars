// DESCRIPTION:
//   In this Kata, you will be given an array and your task will be to determine if an array is in
//   ascending or descending order and if it is rotated or not.
//
//   Consider the array [1,2,3,4,5,7,12]. This array is sorted in Ascending order. If we rotate this array
//   once to the left, we get [12,1,2,3,4,5,7] and twice-rotated we get [7,12,1,2,3,4,5].
//   These two rotated arrays are in Rotated Ascending order.
//
//   Similarly, the array [9,6,5,3,1] is in Descending order, but we can rotate it to get an array
//   in Rotated Descending order: [1,9,6,5,3] or [3,1,9,6,5] etc.
//
//   Arrays will never be unsorted, except for those that are rotated as shown above.
//   Arrays will always have an answer, as shown in the examples below.
//
//   More examples:
//
// solve([1,2,3,4,5,7]) = "A" -- Ascending
// solve([7,1,2,3,4,5]) = "RA" -- Rotated ascending
// solve([4,5,6,1,2,3]) = "RA" -- Rotated ascending
// solve([9,8,7,6]) = "D" -- Descending
// solve([5,9,8,7,6]) = "RD" -- Rotated Descending

// SOLUTION:
function solve (arr) {
  let status = "";
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i-1] < arr[i] && arr[i] > arr[i+1] && arr[i-1] > arr[i+1]) {
      status = "RA"
      break
    }
    if (arr[i-1] > arr[i] && arr[i] < arr[i+1] && arr[i-1] > arr[i+1]) {
      status = "RA"
      break
    }
    if (arr[i-1] < arr[i] && arr[i] > arr[i+1] && arr[i-1] < arr[i+1]) {
      status = "RD"
      break
    }
    if (arr[i-1] > arr[i] && arr[i] < arr[i+1] && arr[i-1] < arr[i+1]) {
      status = "RD"
      break
    }
    if (arr[i-1] < arr[i] && arr[i] < arr[i+1] && arr[i-1] < arr[i+1]) {
      status = "A"
    }
    if (arr[i-1] > arr[i] && arr[i] > arr[i+1]  && arr[i-1] > arr[i+1]) {
      status = "D"
    }

  }
  return status
}


console.log(solve([1,2,3,4,5,7])); // ,"A"
console.log(solve([7,1,2,3,4,5])); // ,"RA"
console.log(solve([2,3,4,5,7,12])); // ,"A"
console.log(solve([7,12,1,2,3,4,5])); // ,"RA"
console.log(solve([4,5,6,1,2,3])); // ,"RA"
console.log(solve([9,8,7,6,5])); // ,"D"
console.log(solve([5,9,8,7,6])); // ,"RD"
console.log(solve([6,5,9,8,7])); // ,"RD"
console.log(solve([9,6,7])); // ,"RA"
console.log(solve([10,12,11])); // ,"RD"
console.log(solve([13,10,11])); // ,"RA"

console.log('------------------')
console.log(solve([1, 2, 3])); //,"A"
console.log(solve([1, 3, 2])); //,"RD"
console.log(solve([2, 1, 3])); //,"RD"
console.log(solve([2, 3, 1])); //,"RA"
console.log(solve([3, 1, 2])); // ,"RA"
console.log(solve([3, 2, 1])); //,"D"