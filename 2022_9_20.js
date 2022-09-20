/*1. Task

Since we cannot define keywords in Javascript (well, at least I don't know how to do it),
your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated.
Your xor function should have the behaviour described above, returning true if exactly one of the
two expressions evaluate to true, false otherwise.*/
function xor(a, b) {
  if (a && b) return false;
  if (a || b) {
    return true;
  } else {
    return false;
  }
}
/*2. The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs 
Suzuki logged in a year. You will have all data for the entire year so 
regardless of how it is logged the problem should be simple to solve.*/
function stairsIn20(s) {
  let results = [];
  for (let i = 0; i < s.length; i++) {
    results.push(
      s[i].reduce((a, b) => {
        return a + b;
      }, 0)
    );
  }
  let finalResults = results.reduce((a, b) => {
    return a + b;
  });
  return finalResults * 20;
}
