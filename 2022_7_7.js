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
