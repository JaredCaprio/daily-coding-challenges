/*1. I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
 */
function arrayPlusArray(arr1, arr2) {
  let arr1Reduce = arr1.reduce((a, b) => {
    return a + b;
  }, 0);
  let arr2Reduce = arr2.reduce((a, b) => {
    return a + b;
  }, 0);

  return arr1Reduce + arr2Reduce;
}
/*2. *** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, 
without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, 
false if not. With strings you will need to account for case.*/
function check(a, x) {
  return a.includes(x);
}
