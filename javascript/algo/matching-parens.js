#!/usr/bin/env node

//Write the function #has_matching_parens that takes a string as an argument and returns true if the string has valid parenthesis.
//ex.
//str = “(I(really)love (al(g)or)ithms)” has_matching_parens(str) #=> true
//Bonus: How would you solve if there were [], (), and {}?

var _ = require('underscore');

function hasMatchingParens(inputString) {
  var stack = [];
  var lookupHash = {
    '{':'}',
    '[':']',
    '(':')'
  };

  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] in lookupHash) {
      stack.push(lookupHash[inputString[i]]);
    } else if (inputString[i] in _.invert(lookupHash)) {
      if (_.isEmpty(stack) || (lookupHash[stack.pop()] != inputString[i])) {
        return false;
      }
    }
  }

  return _.isEmpty(stack);
}

console.log(hasMatchingParens('(((hello))') === false);
console.log(hasMatchingParens('((') === false)
console.log(hasMatchingParens(')(') === false)
console.log(hasMatchingParens('(())') === true)
