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

/* 3. Given a non-empty array of integers, return the result of multiplying the values together in order. Example: */
function grow(x) {
  return x.reduce((a, b) => {
    return a * b;
  });  
}


/* 4. 
Given an integral number, determine if it's a square number:
    In mathematics, a square number or perfect square is an integer 
    that is the square of an integer; in other words, it is the product
    of some integer with itself.

The tests will always use some integral number, so don't worry about that 
in dynamic typed languages.*/

var isSquare = function (n) {
  if (Math.ceil(Math.sqrt(n)) == Math.floor(Math.sqrt(n))) {
    return true;
  } else {
    return false;
  }
};




