/*1. Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.*/
function getChar(c) {
  return String.fromCharCode(c);
}
/*2. Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?*/
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
