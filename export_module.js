/**
 * THIS IS A TUTORIAL EXERCISE WHERE WE WILL BE CREATING A FUNCTION
 * AND THEN EXPORT IT TO BE USED IN ANOTHER FILE CALLED IMPORT_MODULE.JS
 * THE GOAL OF THIS EXERCISE TO BE EXPOSED TO THE CONCEPT OF IMPORT AND 
 * EXPORTING USING THE COMMONJS 5.
 * ANOTHER WAY OF EXPORTING WILL BE EXPLORED USING COMMONJS 6
 * ----------------------------------------------------------------------------
 */

// CREATING A FUNCTION THAT SAYS HELLO:
const helloWorld = () => {
    console.log(`This is the hello world function called from import_module.js file`)
}
const Msg = () => {
    console.log(`This is another message to display through exporting .....`)
}

// exporting the helloWorld function:
module.exports = {
    helloWorld,
    Msg
};