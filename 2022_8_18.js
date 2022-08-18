/*1. Given an array of positive integers (the weights of the people),
return a new array/tuple of two integers, where the first one is the 
total weight of team 1, and the second one is the total weight of team 2.
*/
function rowWeights(array) {
  let result1 = [];
  let result2 = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      result1.push(array[i]);
    } else {
      result2.push(array[i]);
    }
  }

  let reduced1 = result1.reduce((a, b) => {
    return a + b;
  }, 0);
  let reduced2 = result2.reduce((a, b) => {
    return a + b;
  }, 0);

  return new Array(reduced1, reduced2);
}
