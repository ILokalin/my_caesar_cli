const CRYPT_FIT_BIG_REGEXP = /[A-Z]/,
      CRYPT_FIT_SMALL_REGEXP = /[a-z]/,
      CODE_CHAR_A = 65,
      CODE_CHAR_a = 97,
      ALPHABET_LENGTH = 26;

module.exports = {
  action: () => {

    const codeForChar = (item, shift, alphabetStartCode) => {
      return (item - alphabetStartCode + shift) % ALPHABET_LENGTH + alphabetStartCode;
    }

    function codec (source, shift, action) {
      const codecShift = action === 'encode' ? shift : (ALPHABET_LENGTH - shift);
      let resultString = '';

      [...source].forEach(item => {
        charItem = String.fromCharCode(item);

        if (CRYPT_FIT_BIG_REGEXP.test(charItem )) {
          resultString += String.fromCharCode(codeForChar(item, codecShift, CODE_CHAR_A));
        } else if (CRYPT_FIT_SMALL_REGEXP.test(charItem )) {
          resultString += String.fromCharCode(codeForChar(item, codecShift, CODE_CHAR_a));
        } else {
          resultString += String.fromCharCode(item);
        }
      })

      return resultString;
    }

    return {
      codec: codec
    };
  }
}