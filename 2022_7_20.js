/* 1. Write a function that returns both the minimum and maximum number of the given list/array. */

function minMax(arr) {
  let result = [];
  result.push(Math.min(...arr), Math.max(...arr));
  return result;
}

/*2. Write a function that checks if a given string (case insensitive) is a palindrome. */

function isPalindrome(x) {
  let lower = x.toLowerCase();
  let reverse = lower.split("").reverse().join(""); 
  return reverse === lower;
}

