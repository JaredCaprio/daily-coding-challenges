/* 1. Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.*/

const binaryArrayToNumber = (arr) => {
  let joinedArr = arr.join("");
  let numArr = parseInt(joinedArr);
  console.log(numArr);
  return parseInt(numArr, 2);
};

/* 2. Task Overview:
You have to write a function that accepts three parameters:
    cap is the amount of people the bus can hold excluding the driver.
    on is the number of people on the bus excluding the driver.
    wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take. */

function enough(cap, on, wait) {
  if (on + wait - cap <= 0) {
    return 0;
  } else {
    return on + wait - cap;
  }
}

/*3. Your task is to create the functionisDivideBy (or is_divide_by) to check 
if an integer number is divisible by both integers a and b. */

function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0){
    return true
  } else {
    return false
  }
}


