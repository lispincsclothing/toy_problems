#!/usr/bin/env ruby

# Write the function #has_matching_parens that takes a string as an argument and returns true if the string has valid parenthesis.
#
# ex.
# str = “(I(really)love (al(g)or)ithms)” has_matching_parens(str) #=> true
#
# Bonus: How would you solve if there were [], (), and {}?

def has_matching_parens(input_string)
  stack = []
  lookup_hash = {'{' => '}', '[' => ']', '('=>')'}

  input_string.each_char do |input_char|
    if lookup_hash.keys.include? input_char
      stack << input_char
    elsif lookup_hash.values.include? input_char
      return false if stack.empty? || (lookup_hash[stack.pop] != input_char)
    end
  end
  stack.empty?
end

p has_matching_parens("(((hello))")==false
p has_matching_parens("((")==false
p has_matching_parens(")(")==false
p has_matching_parens("(())")==true
