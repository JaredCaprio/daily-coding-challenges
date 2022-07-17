/* 1. Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.*/

const binaryArrayToNumber = (arr) => {
  let joinedArr = arr.join("");
  let numArr = parseInt(joinedArr);
  console.log(numArr);
  return parseInt(numArr, 2);
};

