// DESCRIPTION:
// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3
// (the cat cannot climb on the shelf directly above its head), according to the illustration:
// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)


// SOLUTION:
function solution(start, finish)
{
  let diff = finish - start;
  return Math.floor(diff / 3) + diff % 3
}
