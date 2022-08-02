/*1. Remove an exclamation mark from the end of a string. For a beginner kata,
you can assume that the input data is always a string, no need to verify it.*/
function remove(string) {
  if (string.endsWith("!")) {
    let final = string.substring(0, string.length - 1);
    return final;
  } else {
    return string;
  }
}
/* 2. Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.*/
function take(arr, n) {
  return arr.slice(0, n);
}
