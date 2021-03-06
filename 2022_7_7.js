/* 1. Count the number of Duplicates

Write a function that will return the 
count of distinct case-insensitive alphabetic
characters and numeric digits that occur more 
than once in the input string. The input string 
can be assumed to contain only alphabets (both uppercase and lowercase) 
and numeric digits. */

function duplicateCount(text) {
  var freq = {};
  for (var i = 0; i < text.length; i++) {
    var character = text.charAt(i).toLowerCase();
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }
  let values = Object.values(freq);

  let filteredVals = values.filter((element) => element > 1);

  return filteredVals.length;
}
 /* 2. It's pretty straightforward. Your goal is to create a function that removes the
 first and last characters of a string. You're given one parameter, the original string.
 You don't have to worry with strings with less than two characters. */

function removeChar(str) {
  return str.substring(1, str.length - 1);
}

/* 3. Given an array of integers as strings and numbers,
return the sum of the array values as if all were numbers.
Return your answer as a number.
*/

function sumMix(x) {
  var arrayOfNumbers = x.map(Number).reduce((a, b) => a + b);
  return arrayOfNumbers;
}

/* 4. In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.*/

function alphabetPosition(text) {
let result = [];
let str = text.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.codePointAt(i) - 96 > 0 && str.codePointAt(i) - 96 < 27) {
      result.push(str.codePointAt(i) - 96);
    }
  }
  return result.join(" ");
}
