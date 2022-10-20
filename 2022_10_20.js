/*1. Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2),
write a function elevator accepting 3 arguments (in order):

    left - The current floor of the left elevator
    right - The current floor of the right elevator
    call - The floor that called an elevator

It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.*/
function elevator(left, right, call) {
  let rightDiff = Math.abs(right - call);
  let leftDiff = Math.abs(left - call);
  if (rightDiff < leftDiff) {
    return "right";
  } else if (leftDiff < rightDiff) {
    return "left";
  } else if (rightDiff === leftDiff) {
    return "right";
  }
}
/*2. https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.
One of the simplest, yet most important factors is compensation. As developers we know how much money we need
to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

Let's give this a try. We'll create a function match which takes a candidate and a job, which will return a
boolean indicating whether the job is a valid match for the candidate.
A candidate will have a minimum salary, so it will look like this:
let candidate = {
  minSalary: 120000
}
A job will have a maximum salary, so it will look like this:
let job = {
  maxSalary: 140000
}
If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary.
However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the 
candidate is a rockstar who enjoys programming on Codewars in their spare time. The company offering the 
job may be able to work something out. 
*/ 
function match(candidate, job) {
  if (candidate.minSalary == null || job.maxSalary == null) throw error;
  let wiggleRoom = candidate.minSalary * 0.1;
  return candidate.minSalary - wiggleRoom <= job.maxSalary;
}
