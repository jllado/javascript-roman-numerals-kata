'use strict';
class RomanNumber {
  constructor(number) {
    this.number = number;
    this.roman_numbers = {
      1: "I",
      4: "IV",
      5: "V"
    };
  }

  _toRoman(number) {
    if (this.roman_numbers[number])
      return this.roman_numbers[number];
    if (number > 5)
      return "V" + this._toRoman(number - 5);
    return "I" + this._toRoman(number - 1);
  }

  toString() {
    return this._toRoman(this.number);
  }

}
