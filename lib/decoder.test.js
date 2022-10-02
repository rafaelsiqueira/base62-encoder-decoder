const decoder = require("./decoder")(require('./charset'));

describe('decoder.js', () => {
  describe('base62ToBase10', () => {
    it("should decode strings", () => {
      expect(decoder.base62ToBase10("0")).toBe(0);
      expect(decoder.base62ToBase10("7")).toBe(7);
      expect(decoder.base62ToBase10("g")).toBe(16);
      expect(decoder.base62ToBase10("Z")).toBe(61);
      expect(decoder.base62ToBase10("13")).toBe(65);
      expect(decoder.base62ToBase10("0013")).toBe(65);
      expect(decoder.base62ToBase10("g7")).toBe(999);
      expect(decoder.base62ToBase10("2Bh")).toBe(9999);
      expect(decoder.base62ToBase10("ZZZ")).toBe(238327);
      expect(decoder.base62ToBase10("2Q3rKTOF")).toBe(10000000000001);
      expect(decoder.base62ToBase10("2Q3rKTOH")).toBe(10000000000003);
    });

    it("should throw error for invalid character", () => {
      expect(() => decoder.base62ToBase10('!*')).toThrow('Invalid character!');
    })
  });
});
