/*1. Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). */
function solution(str, ending) {
  let startingPoint = str.length - ending.length;
  let sliced = str.slice(startingPoint);
  if (sliced === ending) {
    return true;
  } else {
    return false;
  }
}
/* 2. Complete the function that takes two integers (a, b, where a < b)
and return an array of all integers between the input parameters, including them.*/

function between(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

/* 3. In this kata you will create a function that takes in a list and returns a list with the reverse order.*/

function reverseList(list) {
  return list.reverse();
}

/*4. Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may not execute properly]
 */

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

