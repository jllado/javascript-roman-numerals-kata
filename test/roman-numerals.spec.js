'use strict';
/**
 * I -> 1
 * II -> 2
 * III -> 3
 * IV -> 4
 * V -> 5
 */
describe('roman numerals', function () {
  it("should return I when 1", function () {
    expect(toRoman(1)).toEqual("I");
  });
  it("should return II when 2", function () {
    expect(toRoman(2)).toEqual("II");
  });
  it("should return III when 3", function () {
    expect(toRoman(3)).toEqual("III");
  });
});

function toRoman(number) {
  if (number === 2)
    return "II";
  return "I";
}
