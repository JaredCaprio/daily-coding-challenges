/*1. Given an array of numbers, check if any of the numbers are the character codes for 
lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.
Return the resulting array.
 */
function isVow(a) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (
      String.fromCharCode(a[i]) === "a" ||
      String.fromCharCode(a[i]) === "e" ||
      String.fromCharCode(a[i]) === "i" ||
      String.fromCharCode(a[i]) === "o" ||
      String.fromCharCode(a[i]) === "u"
    ) {
      result.push(String.fromCharCode(a[i]));
    } else {
      result.push(a[i]);
    }
  }
  return result;
}
