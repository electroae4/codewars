// DESCRIPTION:
//   I always thought that my old friend John was rather richer than he looked, but I never knew exactly
//   how much money he actually had. One day (as I was plying him with questions) he said:
//
//   "Imagine I have between m and n Zloty..." (or did he say Quetzal? I can't remember!)
// "If I were to buy 9 cars costing c each, I'd only have 1 Zloty (or was it Meticals?) left."
// "And if I were to buy 7 boats at b each, I'd only have 2 Ringglets (or was it Zloty?) left."
// Could you tell me in each possible case:
//
// how much money f he could possibly have ?
//   the cost c of a car?
//   the cost b of a boat?
//   So, I will have a better idea about his fortune. Note that if m-n is big enough, you might have a lot of
//   possible answers.
//
//   Each answer should be given as ["M: f", "B: b", "C: c"] and all the answers as [ ["M: f", "B: b", "C: c"], ... ].
//   "M" stands for money, "B" for boats, "C" for cars.
//
//    Note: m, n, f, b, c are positive integers, where 0 <= m <= n or m >= n >= 0. m and n are inclusive.

// SOLUTION:
function howMuch(m, n) {
  let min = Math.min(m, n)
  let max = Math.max(m, n)
  let cars = [], boats = []

  for (let i = 1; ; i++) {
    if (9 * i + 1 < min) continue;
    if (7 * i + 2 > max) break;
    cars.push((9 * i + 1))
    boats.push((7 * i + 2))
  }
  let matched = cars.filter(el=>boats.indexOf(el) > -1 )

  let result = []
  for (let i of matched) {
    result.push([`M: ${i}`, `B: ${(i-2)/7}`, `C: ${(i-1)/9}`])
  }
  return result
}

console.log(howMuch(1000, 1100))