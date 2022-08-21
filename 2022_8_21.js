/* 1.Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.
 */
function distinct(a) {
  return a.filter((num, index) => {
    return a.indexOf(num) == index;
  });
}
