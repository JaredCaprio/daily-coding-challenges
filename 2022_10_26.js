/*1. Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/
const reverse = (array) => {
  let results = [];
  for (let i = array.length - 1; i >= 0; i--) {
    results.push(array[i]);
  }
  return results;
};
