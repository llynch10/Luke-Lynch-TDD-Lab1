const { pigLatinTranslator } = require("../src/lab1");

describe("pigLatinTranslator function", () => {
  test("adding way to the end of word starting with vowel", () => {
    let result = pigLatinTranslator("attic");
    expect(result).toBe("atticway");
  });
  test("words that start with vowels with capital letters ", () => {
    let result = pigLatinTranslator("Attic");
    expect(result).toBe("atticway");
  });
  test("words that start with one consonant", () => {
    let result = pigLatinTranslator("car");
    expect(result).toBe("arcay");
  });
  test("words that start with two consonants", () => {
    let result = pigLatinTranslator("the");
    expect(result).toBe("ethay");
  });
  test("words that start with three consonants", () => {
    let result = pigLatinTranslator("schitt");
    expect(result).toBe("ittschay");
});
