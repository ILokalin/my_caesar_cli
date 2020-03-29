# Caesar CLI

CLI tool for node.js that will encode and decode a text by Caesar cipher. RS School task.

### About this App
- if passed params are fine the output (file or stdout) should contain encoded/decoded content of input (file or stdin).
- if the input file is missed - App use stdin as an input source.
- if the output file is missed - App use stdout as an output destination.
- if the input and/or output file is given but doesn't exist or can't read it (e.g. because of permissions or it is a directory) - you'll get the error message.
- This app use only the English alphabet

### For start

Clone or download this repository for use CLI App on your computer.

For installation modules:<br>
**`npm i`**

For start use:<br>
**`$ node caeser.js --shift <shift: is number> --action <action: encode || decode> [--input <string: file name || STDIO>] [--output <string: file name || STDOUT>]`**

Options:<br>
- -s, --shift: a shift **(requered option)**
- -i, --input: an input file **(requered option)**
- -o, --output: an output file
- -a, --action: an action encode/decode

### Demo

Use

**`$ node caesar.js -s 7 -a encode --input encode-test.txt`**

`
Your shift is 7 and you choice action is encode
encode-test.txt
Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!
`

**`$ node caesar.js -s 7 -a decode --input decode-test.txt`**

`
Your shift is 7 and you choice action is decode
decode-test.txt
This is secret. Message about "_" symbol!
`

### Gratitude
Thank you for attention<br>
Grazie per l'attenzione.

### Contacts
Ilya Lokalin (@ILokalin) in Discorde<br>
or LI#4947<br>
https://t.me/IlyaLokalin in Telegram
