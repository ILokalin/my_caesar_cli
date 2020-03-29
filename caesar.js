const { program } = require('commander');
const filesIO = require('./caesar-modules/files-io');
const { pipeline } = require('stream');
const caesarCodec = require('./caesar-modules/codec');
 

program
  .option('-s, --shift  <shift>')
  .option('-i, --input  <file>')
  .option('-o, --output <file>')
  .option('-a, --action <type>');
 
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

this.getCaesarCodec = (chunk) => {
  const actionMethod = caesarCodec.action();

  return actionMethod.codec(chunk, numShift, action);
}

if (isCheckActionParam() && isCheckShiftParam()) {
  console.log(`Your shift is ${numShift} and you choice action is ${action}`);

  pipeline(
    filesIO.inputStream(input),
    filesIO.transformStream(this.getCaesarCodec),
    filesIO.outputStream(output),
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
  if (!shift) console.error('Need select shift for action. It is a requered param with key -s or --shift');
  if (!numShift) console.error('Expected that shift is number.');
  if (!action) console.error('Expected that action is "encode" or "decode" after key -a or --action');

  process.exitCode = 1;
}
