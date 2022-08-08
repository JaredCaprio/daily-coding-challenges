/*1. You will be given an array and a limit value.
You must check that all values in the array are below
or equal to the limit value. If they are, return true. Else, return false.
You can assume all values in the array are numbers.
*/

function smallEnough(a, limit) {
  let filtar = a.filter((num) => {
    return num > limit;
  });
  console.log(filtar);
  return filtar.length < 1;
}

/*2.  Your program will take in
a string and clean out all numeric characters, 
and return a string with spacing and special 
characters ~#$%^&!@*():;"'.,? all intact.*/

function stringClean(s) {
  return s.replace(/\d/g, "");
}

