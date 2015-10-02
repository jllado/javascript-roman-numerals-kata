'use strict';
/**
 * I -> 1
 * II -> 2
 * III -> 3
 * IV -> 4
 * V -> 5
 * VI -> 6
 * VII -> 7
 * IX -> 9
 * X -> 10
 */
describe('roman numerals converter', function () {
  it("should convert integer to roman number", function () {
    expect(toRomanNumber(1)).toEqual("I");
    expect(toRomanNumber(2)).toEqual("II");
    expect(toRomanNumber(3)).toEqual("III");
    expect(toRomanNumber(4)).toEqual("IV");
    expect(toRomanNumber(5)).toEqual("V");
    expect(toRomanNumber(6)).toEqual("VI");
    expect(toRomanNumber(7)).toEqual("VII");
  });
});

function toRomanNumber(number) {
  return new RomanNumber(number).toString();
}
