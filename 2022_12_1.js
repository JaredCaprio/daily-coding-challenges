/*1. https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples
    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"
*/
var isAnagram = function (test, original) {
  function sorted(str) {
    return str.toLowerCase().split("").sort().join("");
  }

  return sorted(test) === sorted(original);
};

/* 2. https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
function toCamelCase(str) {
  let regex = /[A-Z]/;
  let shifted;
  let split = str.split(/[-||_]/g);
  if (!regex.test(split[0])) {
    shifted = split.shift();
  }
  let mapped = split.map((item, i) => {
    return item[0].toUpperCase() + item.slice(1);
  });
  mapped.unshift(shifted);
  return mapped.join("");
}

