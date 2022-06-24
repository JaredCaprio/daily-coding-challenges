/* 1. The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
For example:
1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

function cockroachSpeed(s) {
  return Math.floor(s / 0.036);
}

/* 2. There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
  let avg = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  let isYourScoreBetter; 
  avg < yourPoints ? (isYourScoreBetter = true) : (isYourScoreBetter = false);
  return isYourScoreBetter;
}

/* 3. After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you
and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, 
if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).
*/

const rentalCarCost = (d) =>
  d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40;


