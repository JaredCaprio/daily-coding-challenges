/* 1. Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit.*/

function persistence(num) {
  var times = 0;
  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }
  return times;
}

/* 2. Very simple, given an integer or a floating-point number, find its opposite. */
function opposite(number) {
  if (number > 0) {
    return -Math.abs(number);
  } else {
    return Math.abs(number);
  }
} 

/* 3. Your task is to make function, which returns the sum of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
If begin value is greater than the end, function should returns 0*/

const sequenceSum = (begin, end, step) => {
  let counter = 0;

  for (let i = begin; i <= end; i += step) {
    console.log(i);
    counter += i;
  }
  return counter;
};

