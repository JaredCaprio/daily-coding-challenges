/*1. https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Points:

1. The arrays may be of different lengths, with at least one character/digit.
2. One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
*/
function mergeArrays(a, b) {
  let result = [];
  let longer = a;
  if (b.length > a.length) longer = b;
  for (let i = 0; i < longer.length; i++) {
    if (a[i]) {
      result.push(a[i]);
    }
    if (b[i]) {
      result.push(b[i]);
    }
  }
  return result;
}
