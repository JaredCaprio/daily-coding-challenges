/*1.  https://www.codewars.com/kata/59f1fbfba5e12902ba000128/train/javascript
Task

You are given four arrays A, B, C, D of integer values(negative, positive or zero).
Your task is to count how many quadruplet a, b, c, d(a ∈ A, b ∈ B, c ∈ C, and d ∈ D)
are such that a + b + c + d = 0 . we assume that all arrays have the same length.

Note, arrays may contains duplicate values, if two or more combinations of a,b,c,d 
are the same(same value and same order, but pick from different index), they will 
be count as 1 combination.
*/
function fourSum(A, B, C, D) {
  let s = new Set(D);
  let ans = 0;

  for (let x of new Set(A)) {
    for (let y of new Set(B)) {
      for (let z of new Set(C)) {
        let n = x + y + z;
        if (s.has(-n)) {
          ans++;
        }
      }
    }
  }
  return ans;
}
