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
    expect(toRoman(1)).toEqual("I");
    expect(toRoman(2)).toEqual("II");
    expect(toRoman(3)).toEqual("III");
    expect(toRoman(4)).toEqual("IV");
    expect(toRoman(5)).toEqual("V");
    expect(toRoman(6)).toEqual("VI");
    expect(toRoman(7)).toEqual("VII");
  });
});
