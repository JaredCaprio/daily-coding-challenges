/*1. https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript 
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/
function getDivisorsCnt(n) {
  let divs = 0;
  let mod = n;

  while (mod > 0) {
    if (n % mod === 0) {
      divs++;
    }
    mod--;
  }
  return divs;
}
/* 2. https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

*/
function swap(string) {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "u" ||
      string[i] === "o" ||
      string[i] === "i" ||
      string[i] === "e"
    ) {
      newStr += string[i].toUpperCase();
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}
