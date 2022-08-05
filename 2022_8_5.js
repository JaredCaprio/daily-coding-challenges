/* 1An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an
isogram. Assume the empty string is an isogram. Ignore letter case. */
function isIsogram(str) {
  let strSet = str.toLowerCase().split("");
  let newArr = strSet.filter((let, index) => {
    return strSet.indexOf(let) !== index;
  });
  if (!newArr.length > 0) {
    return true;
  } else {
    return false;
  }
}
