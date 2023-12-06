/**
 * This is the first  Tutorial in 2024 for NodeJS
 * we will be covering some basic command lines and syntax
 * and learn some new features.
 * please make sure to document and also back up anything that requires 
 * additional support.
 * Also, remember to create a github repository for this series as a backup
 * reference for the future.
 * --------------------------------------------------------------------------
 **/


// importing the os module in NodeJS:
const os = require(`os`)

//exploring some features in this module and viewing them in the console line:
console.log(`the computer name: ${os.hostname()}`) // vieiwng the hostname 
console.log(`The home directory: ${os.homedir()}`) // viewing the home directory name
console.log(`the type of operating system: ${os.type()}`) // viewing the type of the operating system, window_NT
console.log(`viewing the full path to the parent directory: ${__dirname}`) // viewing the full path to the parent folder of server.js
console.log(`viewing the full path to the file name: ${__filename}`) // viewing the full path to the file name server.js
