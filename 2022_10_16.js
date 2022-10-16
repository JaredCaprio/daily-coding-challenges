/* 1. Given a number n, return the number of positive odd numbers below n, EASY!
Examples (Input -> Output)

7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
 */
 function oddCount(n) {
  let results = [];
  for (let i = n - 1; i > 0; i--) {
    if (i % 2 === 1) {
      results.push(i);
    }
  }
  return results.length;
}
