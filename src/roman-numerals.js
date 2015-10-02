'use strict';
var roman_numbers = {
  1: "I",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII"
}
function toRoman(number) {
  if (roman_numbers[number])
    return roman_numbers[number];
  return "I" + toRoman(number - 1);
}
