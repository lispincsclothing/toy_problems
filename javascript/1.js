"use strict";
var return_string = "",
  div3, div5, i;

for (var i = 1; i <= 100; i++) {
  div3 = (i % 3 === 0);
  div5 = (i % 5 === 0);

  if (div3) {
    return_string += "fizz";
  }
  if (div5)
  {
    return_string += "buzz";
  }
  if (!(div3||div5))
  {
    return_string += i;
  }
  return_string += "\n";
}

console.log(return_string);
