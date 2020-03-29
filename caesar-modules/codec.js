const CRYPT_FIT_BIG_REGEXP = /[A-Z]/,
      CRYPT_FIT_SMALL_REGEXP = /[a-z]/,
      CODE_CHAR_A = 65,
      CODE_CHAR_a = 97,
      ALPHABET_LENGTH = 26;

module.exports = {
  action: () => {
    function encode(source, numShift) {
      let resultString = '';

      [...source].forEach(item => {
        charItem = String.fromCharCode(item);

        if (CRYPT_FIT_BIG_REGEXP.test(charItem )) {
          resultString += String.fromCharCode((item - CODE_CHAR_A + numShift) % ALPHABET_LENGTH + CODE_CHAR_A);
        } else if (CRYPT_FIT_SMALL_REGEXP.test(charItem )) {
          resultString += String.fromCharCode((item - CODE_CHAR_a + numShift) % ALPHABET_LENGTH + CODE_CHAR_a);
        } else {
          resultString += String.fromCharCode(item);
        }
      })

      return resultString;
    }

    function decode(source, shift) {
      console.log('Decoder', shift, [...source]);
    }

    return {
      decode: decode,
      encode: encode
    };
  }
}