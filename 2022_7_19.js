/* 1. Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.*/

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

/* 2 You will be given a vector of strings. You must sort it alphabetically
(case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.
*/

function twoSort(s) {
  let result = s.sort();
  return result[0].split("").join("***");
}

/*3. Given a set of numbers, return the additive inverse of each. Each positive 
becomes negatives, and the negatives become positives.
You can assume that all values are integers. Do not mutate the input array/list.
 */
const invert = array => array.map((num) => num >= 0 ? -Math.abs(num) : Math.abs(num));

/* 4.  Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let splitStr = str.split("");

  let count = 0;
  splitStr.filter((letter) => {
    if ([...vowels].includes(letter) === true) {
      count++;
    }
  });
  return count;
}
