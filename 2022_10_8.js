/*1. ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence.
a V A P O R W A V E sentence converts all the letters into uppercase, and adds 
2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.*/
function vaporcode(string) {
  let spitStr = string.toUpperCase().split("");
  let result = [];
  for (let i = 0; i < spitStr.length; i++) {
    if (spitStr[i] !== " ") {
      result.push(spitStr[i]);
    }
  }

  return result.join("  ");
}
