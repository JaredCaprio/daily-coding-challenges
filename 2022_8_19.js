/*1. Your task is to write function factorial.*/
function factorial(n) {
  let accum = [];
  for (let i = 1; i <= n; i++) {
    accum.push(i);
  }
  return accum.reduce((a, b) => {
    return a * b;
  }, 1);
}
