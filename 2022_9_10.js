/* 1. 
    Kids drink toddy.
    Teens drink coke.
    Young adults drink beer.
    Adults drink whisky.

Make a function that receive age, and return what they drink.

Rules:

    Children under 14 old.
    Teens under 18 old.
    Young under 21 old.
    Adults have 21 or more.

Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

*/
function peopleWithAgeDrink(old) {
  switch (true) {
    case old < 14:
      return "drink toddy";
      break;
    case old < 18:
      return "drink coke";
      break;
    case old < 21:
      return "drink beer";
      break;
    case old >= 21:
      return "drink whisky";
      break;
  }
}

/*2. In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}

you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")

Task

Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}

and return a string like this:

"This white dog has 4 legs."
 */

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
