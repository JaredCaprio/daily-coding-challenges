/*1.  https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript
Task

Given an array/list of integers, find the Nth smallest element in the array.
Notes

    Array/list size is at least 3.
    Array/list's numbers could be a mixture of positives , negatives and zeros.
    Repetition in array/list's numbers could occur, so don't remove duplications.

Input >> Output Examples

arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 
*/
function nthSmallest(arr, pos) {
  return arr.sort((a, b) => a - b)[pos - 1];
}
/*2. https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
 */
function hasUniqueChars(str) {
  let set = new Set(str);
  console.log(set);
  let splitStr = str.split("");
  console.log(splitStr);
  return set.size === splitStr.length ? true : false;
}
