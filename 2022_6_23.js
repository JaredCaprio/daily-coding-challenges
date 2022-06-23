/* 1. You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
*/

const areaOrPerimeter = (l, w) => l === w ? l * w : l * 2 + w * 2;

/* 2. Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100. */

function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;
  return avg < 60
    ? "F"
    : avg < 70
    ? "D"
    : avg < 80
    ? "C"
    : avg < 90
    ? "B"
    : avg <= 100
    ? "A"
    : "Good Job!";
}
