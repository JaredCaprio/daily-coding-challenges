/* 1. https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/
function sumOfDifferences(arr) {
  let sorted = arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    sum += sorted[i] - sorted[i + 1];
  }
  return sum;
}

/*2.  https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.

*/
function wordsToMarks(string) {
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i) - 96;
  }
  return sum;
}
