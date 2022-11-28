/*1. https://www.codewars.com/kata/57547f9182655569ab0008c4/train/javascript
You need to design a recursive function called replicate which will receive arguments times and number.

The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

As tempting as it may seem, do not use loops to solve this problem.
*/
function replicate(times, number, prev = []) {
  console.log(times);
  if (times <= 0) return [];

  if (times > 0) {
    prev.push(number);
    replicate(--times, number, prev);
  } else {
    return;
  }
  return prev;
}

/*2. https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
Complete function padIt, which accepts 2 parameters:

    str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
    n: a number indicating how many times to pad the string.

Behaviour

You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/
function padIt(str, n) {
  var result = str;
  while (n > 0) {
    if (n % 2 === 0) {
      result += "*";
      n--;
    } else {
      result = "*" + result;
      n--;
    }
  }
  return result;
}
