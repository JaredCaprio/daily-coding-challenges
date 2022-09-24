/* 1. Task
Complete the function howManydays. It accepts 1 parameter month, which means the month of the year.
Different months have a different number of days as shown in the table below. Return the number of
days that are in month. There is no need for input validation: month will always be greater than 0 
and less than or equal to 12.*/
function howManydays(month){
  var days;
  switch (true){
    case month === 2:
      days = 28;
      break;
    case month === 4:
      days = 30
      break;
    case month === 6:
      days = 30
      break;
    case month === 9:
      days = 30;
      break;
    case month === 11:
      days = 30
      break;
    default:
      days = 31;     
  }
  return days;
}
/*2. Your car is old, it breaks easily. 
The shock absorbers are gone and you think it 
can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy!
Given a string showing either flat road (_) or bumps (n).
If you are able to reach home safely by encountering 15 bumps or less,
return Woohoo!, otherwise return Car Dead
 */
function bump(x) {
  let bumps = x.split("").filter((let) => {
    return let === "n";
  });
  if (bumps.length <= 15) {
    return "Woohoo!";
  } else {
    return "Car Dead";
  }
}
