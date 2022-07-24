/* 1. We want an array, but not just any old array, an array with contents!
Write a function that produces an array with the numbers 0 to N-1 in it.*/

const arr = (N) => {
  let result = [];
  for (let i = 0; i < N; i++) {
    result.push(i);
  }
  return result;
};

/* 2. Write a function that takes an array of strings as an argument and returns 
a sorted array containing the same strings, ordered from shortest to longest.
For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different
lengths, so you will not have to decide how to order multiple strings of the same length.
 */

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

/* 3. Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)
 */
function unusualFive() {
  let arr = ["yi", "er", "san", "si", "wu"];
  return arr.length;
}








