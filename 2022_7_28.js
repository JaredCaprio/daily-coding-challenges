/*1. Check to see if a string has the same amount of 'x's and 'o's
. The method must return a boolean and be case insensitive. The string can contain any char.*/

function XO(str) {
  let numOfO = str.replace(/[^oO]/g, "").length;
  let numOfX = str.replace(/[^xX]/g, "").length;
  if (numOfO === numOfX) {
    return true;
  } else if (numOfO === 0 && numOfX === 0) {
    return true;
  } else {
    return false;
  }
}
