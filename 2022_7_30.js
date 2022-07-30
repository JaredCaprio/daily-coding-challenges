/* 1. Write a function named sumDigits which takes a number as 
input and returns the sum of the absolute value of each of the number's decimal digits. */

function sumDigits(number) {
  let numberPos = Math.abs(number);
  let stuff = numberPos
    .toString()
    .split("")
    .map((num) => parseInt(num));

  return stuff.reduce((a, b) => {
    return a + b;
  });
}
