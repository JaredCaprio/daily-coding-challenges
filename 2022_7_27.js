/* 1.Given a string str, reverse it and omit all non-alphabetic characters. */
function reverseLetter(str) {
  let reversed = str.split("").reverse().join("");
  let noNums = reversed.replace(/[^a-zA-Z]/g, "");
  return noNums;
}

/* 2. As a part of this Kata, you need to create a function that when provided with a triplet, 
returns the index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers (Haskell: a tuple).*/

function gimme(triplet) {
  let arrObj = [];
  for (let i = 0; i < triplet.length; i++) {
    var index = triplet[i];

    arrObj.push({ num: index, index: i });
  }
  let sorted = arrObj.sort((a, b) => {
    return a.num - b.num;
  });
  return sorted[1].index;
}

