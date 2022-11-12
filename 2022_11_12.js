/*1. https://www.codewars.com/kata/5a0178f66f793bc5b0001728/train/javascript
A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".
*/
function longestPalindrome(str) {
  let parts = str
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .match(/([a-z0-9])\1*/g || []);
  console.log(parts);
  let odd = parts.some((parts) => parts.length % 2);
  console.log(odd);
  let len = parts.reduce((a, b) => a + b.length - (b.length % 2), odd);

  return len;
}
