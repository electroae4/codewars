// DESCRIPTION:
//   Your program will receive an array of complex numbers represented as strings.
//   Your task is to write the complexSum function which have to return the sum as a string.
//
//   Complex numbers can be written in the form of a+bi, such as 2-3i where 2 is the real part,
//   3 is the imaginary part, and i is the "imaginary unit".
//
//   When you add two complex numbers, the real and the imaginary part needs to be added separately,
//   so for example 2+3i + 5-i = (2+5)+(3i-i) = 7+2i
//
// Both the complex and the imaginary part can be 0, so 123, -2i or i are also complex numbers.
//
//   Complex numbers must be returned in their shortest form, so e.g. 0+1*i should be just i,
//   and 10+0i should be 10. This is also how you will get them!
//
//   For simplicity, the coefficients will always be integers. If the array is empty, return 0.


// SOLUTION:
function complexSum(arr){
  let sum_reals = 0
  let sum_imags = 0
  arr.map(complex => {
    let real = complex.match(/-?\d+(?!\d*i)/) || [0]
    let imag = complex.match(/[+-]?\d*(?=i)/) || [0]
    if (imag[0] === '-') imag[0] = '-1'
    if (imag[0] === '+') imag[0] = '1'
    if (imag[0] === '') imag[0] = '1'

    sum_reals += (+real[0])
    sum_imags += (+imag[0])
  })

  let real = sum_reals.toString()
  let imag = sum_imags.toString().replace('-', '')

  if (sum_reals && sum_imags > 0) return sum_imags !== 1 ? `${real}+${imag}i` : `${real}+i`
  if (sum_reals && sum_imags < 0) return sum_imags !== -1 ? `${real}-${imag}i` : `${real}-i`
  if (sum_reals && sum_imags === 0) return `${real}`
  if (sum_imags > 0) return sum_imags !== 1 ? `${imag}i` : `i`
  if (sum_imags < 0) return sum_imags !== -1 ? `-${imag}i` : `-i`
  return `0`
}


console.log(complexSum(["-2+3i","2-2i"])) // 5+2i
// console.log(complexSum([])) // 0