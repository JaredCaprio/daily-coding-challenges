/*1. https://www.codewars.com/kata/56582133c932d8239900002e/train/javascript 
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
Example

input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 

The most frequent number in the array is -1 and it occurs 5 times.
*/
function mostFrequentItemCount(collection) {
  if (collection.length < 1) return 0;

  let obj = {};

  for (let i = 0; i < collection.length; i++) {
    if (obj[collection[i]]) {
      obj[collection[i]]++;
    } else {
      obj[collection[i]] = 1;
    }
  }

  return Math.max(...Object.values(obj));
}
/* 2. https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".
For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

function encode(string) {
  return string
    .split("")
    .map((letter) => {
      if (letter === "a") return 1;
      if (letter === "e") return 2;
      if (letter === "i") return 3;
      if (letter === "o") return 4;
      if (letter === "u") {
        return 5;
      } else {
        return letter;
      }
    })
    .join("");
}

function decode(string) {
  return string
    .split("")
    .map((letter) => {
      if (letter === "1") return "a";
      if (letter === "2") return "e";
      if (letter === "3") return "i";
      if (letter === "4") return "o";
      if (letter === "5") {
        return "u";
      } else {
        return letter;
      }
    })
    .join("");
}
