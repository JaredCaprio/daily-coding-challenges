//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  if (newArr.length > 0) {
    return newArr.reduce((a, b) => a + b);
  } else {
    return 0;
  }
}
