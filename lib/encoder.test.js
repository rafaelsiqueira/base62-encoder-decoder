const encoder = require("./encoder")(require('./charset'));

describe('encoder.js', () => {
  describe('base10ToBase62', () => {
    it('return encoded string for a given number', () => {
      [
        [0, "0"],
        [7, "7"],
        [16, "g"],
        [61, "Z"],
        [65, "13"],
        [999, "g7"],
        [9999, "2Bh"],
        [238327, "ZZZ"],
        [10000000000001, "2Q3rKTOF"],
        [10000000000002, "2Q3rKTOG"]
      ].forEach(([number, expectedEncoding]) => {
        expect(encoder.base10ToBase62(number)).toBe(expectedEncoding);
      });
    });
  });
});
