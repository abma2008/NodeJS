# NodeJS
This is a beginner-friendly tutorial where you can simply browse the tutorials and view the code. It contains a straight forward examples.
## Topics:
* nodeJS os module
* nodeJS path module
* nodeJS fs module
* nodeJS path module
* nodeJS import and export modules
## Importance of this Tutorial for as a reference:
- it saving time to view direct topics without the need to read all over again.
- it provides examples straight to the point to use when a need calls for it.
- the examples are simple and easy to help recall how the syntax works.

## how to import using NodeJS:
- to import a nodejs module, we can simply declare a constant or variable and assign it the import.<br>
For example:<br>
const fs = require(`fs`);<br>
the recommended way:<br>
const fs = require(`node:fs`);
## how to export a module in NodeJS:
- to export, we can simply write the following syntax:<br>
let addition = (a, b)=> a +b;<br>
module.exports = addition<br>
or<br>
module.exports = {addition}