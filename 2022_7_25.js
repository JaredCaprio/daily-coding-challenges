/* 1. Your function takes two arguments:

    current father's age (years)
    current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
 */
function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld > sonYearsOld * 2) {
    return dadYearsOld - sonYearsOld * 2;
  } else {
    return sonYearsOld * 2 - dadYearsOld;
  }
}

/* 2. You are given an array with positive numbers and a non-negative number N. 
You should find the N-th power of the element in the array with the index N. 
If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:
    array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
    array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
 */

function index(array, n) {
  if (n > array.length - 1) {
    return -1;
  } else {
    return Math.pow(array[n], n);
  }
}

