/*1. JavaScript Arrays support a filter function (starting in JavaScript 1.6).
Use the filter functionality to complete the function given.
The solution would work like the following:
getEvenNumbers([2,4,5,6]) // should == [2,4,6]
 */
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((num) => {
    return num % 2 === 0;
  });
}
/*2. Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

    don't worry about uppercase vowels
    y is not considered a vowel for this kata

 */
function shortcut(string) {
  let regExp = /[aeiou]/;
  let newString = [];
  for (let i = 0; i < string.length; i++) {
    let isMatch = regExp.test(string.charAt(i));
    isMatch ? console.log("poop") : newString.push(string.charAt(i));
  }
  return newString.join("");
}
