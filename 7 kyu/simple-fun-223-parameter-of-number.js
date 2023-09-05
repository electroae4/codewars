// DESCRIPTION:
//   Task
// Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.
//
// Calculate the parameter of the given number n.
//
//   Input/Output
//   [input] integer n
//
// A positive integer. It is guaranteed that no zero appears in n.
//
//   [output] an integer
//
// The parameter of the given number.
//
//   Example
// For n = 22, the output should be 4.
//
// Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.
//
// For n = 1234, the output should be 120.
//
// 1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120


// SOLUTION:
function parameter(n) {
  let nums = n.toString().split('').map(Number);
  let sum = 0;
  let prod = 1;

  for (let i of nums) {
    sum += i;
    prod *= i;
  }
  let min = (sum > prod) ? sum : prod;

  while (true) {
    if (min % sum === 0 && min % prod === 0) {
      return min;
    }
    min++;
  }
}
