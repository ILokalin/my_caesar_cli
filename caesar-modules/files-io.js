const fs = require('fs');
const { Transform } = require('stream');


module.exports =  {
  inputStream: (inputFileName = '') => {
    if (inputFileName !== '') {
      console.log(inputFileName);
      return fs.createReadStream(inputFileName, 'utf8');
    } else {
      return process.stdin;
    }
  },

  outputStream: (outputFileName = '') => {
    if (outputFileName !== '') {
      return fs.createWriteStream(outputFileName, {flags: 'a'})
    } else {
      return process.stdout;
    }
  },

  transformStream: (codec) => {

    return new Transform({
      transform(chunk, encoding, callback) {
        callback(null, codec(chunk));
      }
      })
  }
}
