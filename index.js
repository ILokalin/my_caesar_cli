const { program } = require('commander');
const { fs } = require('fs');
const { pipeline } = require('stream');
 
program
  .option('-s, --shift <shift>', 'a shift')
  .option('-i, --input <file>', 'input file')
  .option('-o, --output <file>', 'output file')
  .option('-a, --action <type>', 'action type');
 
program.parse(process.argv);

const {shift, input, output, action} = program;

const numShift = parseInt(shift)

const isCheckActionParam = () => {
  if (action && (action === 'encode' || action === 'decode')) {
    return true;
  }

  return false;
}

const isCheckShiftParam = () => {
  if (shift && numShift) {
    return true;
  }

  return false;
}

const inputStream = (inputFileName = '') => {
  
  if (inputFileName !== '') {
    return fs.createReadStream(input, {encoding: 'utf8'});
  } else {
    return process.stdin;
  }
}

const outputStream = (outputFileName = '') => {
  if (outputFileName !== '') {
    return fs.createWriteStream(output, {flags: 'a'})
  } else {
    return process.stdout;
  }
}

if (isCheckActionParam() && isCheckShiftParam()) {
  console.log(`Thank you for good params. Your shift is ${numShift} and you choice action is ${action}`);

  pipeline(
    inputStream(input),
    outputStream(output),
    (err) => {
      if (err) {
        console.log('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded');
      }
    }
  )

} else {
  console.error(`Sorry. Your params is not good`);
  if (!shift) console.error('Need select shift for action. It is a requered param');
  if (!numShift) console.error('Expected that shift is number');
  if (!action) console.error('Expected that action is "encode" or "decode"');

  return 1;
}
