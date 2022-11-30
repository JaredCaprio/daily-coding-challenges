/*1. https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
Task

The function giveMeFive accepts 1 parameter, obj, which is an object.

Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

At the end, return your array.

You should use for..in in your code, otherwise your solution may not pass this kata.
*/
function giveMeFive(obj) {
  let resultArr = [];

  for (var key in obj) {
    if (key.length === 5) {
      resultArr.push(key);
    }
    if (obj[key].length === 5) {
      resultArr.push(obj[key]);
    }
  }

  return resultArr;
}

/*2. https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
Issue

Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
Task

Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
Example

Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/
function pipeFix(numbers) {
  let result = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    result.push(i);
  }
  return result;
}

