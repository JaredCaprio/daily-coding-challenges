/* 1. You're writing code to control your town's traffic lights. You need a function to handle each change from green,
to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the current state of the light and returns a 
string representing the state the light should change to.
For example, when the input is green, output should be yellow.
*/

const updateLight = (current) =>
  current == "green"
    ? "yellow"
    : current == "yellow"
    ? "red"
    : current == "red"
    ? "green"
    : null;

/* 2. Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

const arrayDiff = (a, b) => a.filter((n) => !b.includes(n));

/* 3. A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
"The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

const isPangram = (string) => new Set(string.toLowerCase().replace(/[^a-z]/g, "")).size === 26;

/* 4. Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
 */

function repeatStr(n, s) {
  let resultStr = "";
  for (let i = 0; i < n; i++) {
    resultStr += s;
  }
  return resultStr;
}

