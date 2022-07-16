/* 1. Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers) {
  return numbers
    .map((num) => {
      return Math.pow(num, 2);
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);
}

/* 2. In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

function testEven(n) {
    return n % 2 === 0;
}

