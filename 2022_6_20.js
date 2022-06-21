/*1. You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd,
return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases).
You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

function getMiddle(s) {
  let result;
  let splitS = s.split("");

  if (s.length % 2 === 0) {
    result = splitS.splice(splitS.length / 2 - 1, 2).join("");
  } else {
    result = splitS.splice(Math.floor(splitS.length / 2), 1).join("");
  }
  return result;
}

/* 2.Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
patrick feeney => P.F
  */

function abbrevName(name) {
  let splitName = name.split(" ");
  let fullInitial = [];
  fullInitial.push(splitName[0][0], splitName[1][0]);
  return fullInitial.join(".").toUpperCase();
}


