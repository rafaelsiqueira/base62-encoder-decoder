const index = require('.');

describe('index.js', () => {
  it('return enconder/decoder modules', () => {
    expect(index).toHaveProperty('encoder')
    expect(index).toHaveProperty('decoder')
  })
})
