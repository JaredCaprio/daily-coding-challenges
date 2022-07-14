/* 1. Complete the function that takes a non-negative integer n as input, and returns a 
list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).*/

function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

/* 2. In this simple exercise, you will create a program that will take two lists of integers,
a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of 
cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the 
volume of b is 20. Therefore, the function should return 8.
Your function will be tested with pre-made examples as well as random ones. */

function findDifference(a, b) {
  let cubeA = a.reduce((a, b) => a * b);
  let cubeB = b.reduce((a, b) => a * b);
  let result = cubeA - cubeB;
  return Math.abs(result);
}
