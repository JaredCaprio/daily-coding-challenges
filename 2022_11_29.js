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
