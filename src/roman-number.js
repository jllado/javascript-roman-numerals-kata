'use strict';
const roman_numbers = {
  1: "I",
  4: "IV",
  5: "V"
}
class RomanNumber {
  constructor(number) {
    this.number = number;
  }

  _toRoman(number) {
    if (roman_numbers[number])
      return roman_numbers[number];
    if (number > 5)
      return "V" + this._toRoman(number - 5);
    return "I" + this._toRoman(number - 1);
  }

  toString() {
    return this._toRoman(this.number);
  }

}
