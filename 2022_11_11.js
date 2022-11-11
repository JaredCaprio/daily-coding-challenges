/* 1. https://www.codewars.com/kata/593e978a3bb47a8308000b8f/train/javascript
Given a matrix represented as a list of string, such as

###.....
..###...
....###.
.....###
.....###
....###.
..###...
###.....

write a function

rotateClockwise(matrix)

that return its 90° clockwise rotation, for our example:

#......#
#......#
##....##
.#....#.
.##..##.
..####..
..####..
...##...

    /!\ You must return a rotated copy of matrix! (matrix must be the same before and after calling your function)
    Note that the matrix isn't necessarily a square, though it's always a rectangle!
    Please also note that the equality m == rotateClockwise(rotateClockwise(rotateClockwise(rotateClockwise(m)))); (360° clockwise rotation), is not always true because rotateClockwise(['']) => [] and rotateClockwise(['','','']) => [] (empty lines information is lost)
*/
function rotateClockwise(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  return matrix[0].split('').map((val, index) =>
    matrix
      .map((val) => val[index])
      .reverse()
      .join("")
  );
}
