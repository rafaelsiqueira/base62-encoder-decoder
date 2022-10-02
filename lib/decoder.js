function base62ToBase10(charset, base62) {
  let base10 = 0;

  for(let i=0; i<base62.length; i++) {
    let char = base62.charAt(i);
    let charPosition = charset.indexOf(char);

    if (charPosition == -1) {
      throw Error('Invalid character!');
    }

    let exp = base62.length - (i + 1);

    base10 += charPosition * Math.pow(62, exp);
  }

  return base10
}

module.exports = (charset) => {
  return {
    base62ToBase10: base62ToBase10.bind(null, charset),
  }
};
