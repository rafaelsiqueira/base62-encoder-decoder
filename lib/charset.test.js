const charset = require('./charset');

describe('charset.js', () => {
  it('return a list of 62 characters', () => {
    expect(charset).toHaveLength(62)
  })
})
