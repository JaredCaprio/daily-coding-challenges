/*1. I would like to be able to pass an array with 
two elements to my swapValues function to swap the 
values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
 */
function swapValues(arguments) {
  return arguments.reverse();
}
/*2. https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
At the annual family gathering, the family likes to find the oldest living family 
member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. 
The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.
Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
 */
function differenceInAges(ages) {
  let sortedArr = ages.sort((a, b) => a - b);

  let min = Math.min(...sortedArr);
  let max = Math.max(...sortedArr);
  return new Array(min, max, max - min);
}
/*3. https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
*/
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}
