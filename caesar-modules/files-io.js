const { fs } = require('fs');

module.exports =  {
  inputStream: (inputFileName = '') => {
    if (inputFileName !== '') {
      return fs.createReadStream(input, {encoding: 'utf8'});
    } else {
      return process.stdin;
    }
  },

  outputStream: (outputFileName = '') => {
    if (outputFileName !== '') {
      return fs.createWriteStream(output, {flags: 'a'})
    } else {
      return process.stdout;
    }
  }
}
