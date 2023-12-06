/**
 * THIS IS A TUTORIAL FOR LEARNING HOW TO EXPORT A FILE FROM
 * ANOTHER FILE AND IN THIS CASE, WE ARE EXPORTING THE CONTENT
 * OF EXPORT_MODULE.JS AND USE IT HERE.
 *
 */


// IMPORTING THE CONTENT OF EXPORT_MODULE.JS:
const exported_messages = require(`./export_module`)

//using the variable to display the message:
console.log(exported_messages.helloWorld());
console.log(exported_messages.Msg());


// another way of importing by destructioning the content as it will appear below:
const { helloWorld, Msg } = require(`./export_module`)

console.log(helloWorld())
console.log(Msg())