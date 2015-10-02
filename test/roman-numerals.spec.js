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
  it("should return IV when 4", function () {
    expect(toRoman(4)).toEqual("IV");
  });
  it("should return V when 5", function () {
    expect(toRoman(5)).toEqual("V");
  });
  it("should return VI when 6", function () {
    expect(toRoman(6)).toEqual("VI");
  });
});
