#!/usr/bin/env node

//Write the function #has_matching_parens that takes a string as an argument and returns true if the string has valid parenthesis.
//ex.
//str = “(I(really)love (al(g)or)ithms)” has_matching_parens(str) #=> true
//Bonus: How would you solve if there were [], (), and {}?

function hasMatchingParens(inputString) {
  var stack = [];
  var lookupHash = {
    '{':'}',
    '[':']',
    '(':')'
  };

  for (var i = 0; i < inputString.length; i++) {
    
  }
}

console.log(hasMatchingParens('(((hello))') === false);
console.log(hasMatchingParens('((') === false)
console.log(hasMatchingParens(')(') === false)
console.log(hasMatchingParens('(())') === true)
