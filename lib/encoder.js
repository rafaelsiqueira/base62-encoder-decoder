function base10ToBase62(charset, n) {
  if (n === 0)
    return charset[0];

  const next = Math.floor(n / 62)
  const char = charset[n % 62];

  return next ? base10ToBase62(charset, next) + char : char;
}

module.exports = (charset) => {
  return {
    base10ToBase62: base10ToBase62.bind(null, charset),
  }
};
