/* 1. https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9/train/javascript
This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version.
Task:

Find out "B"(Bug) in a lot of "A"(Apple).

There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

input: string Array apple

output: Location of "B", [x,y]
*/
function sc(apple) {
  let result = [];

  for (let i = 0; i < apple.length; i++) {
    for (let j = 0; j < apple[i].length; j++) {
      if (apple[i][j] === "B") {
        result.push([i]);
        result.push([j]);
      }
    }
  }
  let flatenArr = [];
  flatenArr[0] = result[0];
  flatenArr[1] = result[1];
  return flatenArr.concat.apply([], flatenArr);
}
