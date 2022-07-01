/* 1. You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

const sortArray = (array) => {
  let filteredArr = array.filter((number) => number % 2);
  let sortedArr = filteredArr.sort((a, b) => a - b);
  let mappedArr = array.map((number) =>
    number % 2 ? sortedArr.shift() : number
  );
  return mappedArr;
};

