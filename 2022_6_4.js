
//Count by X
function countBy(x, n) {
  let z = [];
  let startingNumber = x;
  z.push(startingNumber);
  for (let i = 0; i < n - 1; i++) {
    z.push((startingNumber += x));
  }
  return z;
}
