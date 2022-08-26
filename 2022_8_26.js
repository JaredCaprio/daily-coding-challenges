/*1. Given a string of arbitrary length with any ascii characters. Write a function to determine whether
the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.*/
function spEng(sentence) {
  let lower = sentence.toLowerCase();
  return lower.includes("english");
}

/*2. My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

    Take a list of ages when each of your great-grandparent died.
    Multiply each number by itself.
    Add them all together.
    Take the square root of the result.
    Divide by two.
 */

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let multiply =
    age1 * age1 +
    age2 * age2 +
    age3 * age3 +
    age4 * age4 +
    age5 * age5 +
    age6 * age6 +
    age7 * age7 +
    age8 * age8;

  return Math.floor(Math.sqrt(multiply) / 2);
}
