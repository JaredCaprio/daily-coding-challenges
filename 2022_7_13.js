/* 1. You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.*/

function otherAngle(a, b) {
  return 180 - a - b;
}

/* 2. Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and 
month 11 (November), is part of the fourth quarter.
 */

const quarterOf = (month) => {
  if (month > 0 && month < 4){
    return 1;
  } else if (month > 3 && month < 7){
    return 2;
  } else if (month > 6 && month < 10){
    return 3;
  } else if (month > 9 && month < 13){
    return 4;
  }
}

/* 3. In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.
 */

function highAndLow(numbers) {
  let split = numbers.split(" ");
  let min = Math.min(...split);
  let max = Math.max(...split);
  let result = [];
  result.push(max, min);

  return result.join(" ");
}

