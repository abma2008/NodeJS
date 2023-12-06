/**
 * THIS IS THE PATH MODULE IN NODEJS.
 * WE WILL BE EXPLAINING THE MAIN FEATURES AND ALSO, IT WILL BE APPLIED IN OTHER TUTORIALS
 * ALONG THIS SERIES.
 * PLEASE MAKE SURE TO VIEW THIS TUTORIAL BEFORE MOVING FORWARD TO FS MODULE
 * ----------------------------------------------------------------------------------------
 * IN THIS TUTORIAL, WE WILL BE VIEWING:
 * - PATH.JOIN()
 * - PATH.BASENAME()
 * - PATH.ISABSOLUTE()
 * - PATH.PARSE()
 * - PATH.EXTNAME()
 * - PATH.FORMAT()
 */

// importing path module:
const path = require(`node:path`);

// lets view the outcome of the following code and compare it to the two below it:
console.log(__dirname);
console.log(__filename);
// ---------------------------------------
console.log(`\n________________________\n Using the path.basename():\n`)
console.log(path.basename(__dirname));
console.log(path.basename(__filename));

/*
Explanation of the previous code:
path.basename() display the last portion of the path. For example, in case of the __dirname,
it simply displays the name of the direct parent directory. __filename, it only displayed the
name of the file along with its extension */


// using the path.join:
console.log(`\n\n______________________\n Using the path.join():\n`)
console.log(path.join(__dirname, __filename));

/**
 * path.join() forms a path. in the previous example, we used the __dirname and joined it with
 * __filename and then displayed the results.
 * it is extremely useful and will be used a lot in the future examples.
 */


// using the path.isAbsolute() method:
console.log(`\n\n______________________\n using the path.isAbsolute():\n`)
// for this example, we will check using the path.isAbsolute() to confirm is a path is correct or not:
console.log(path.isAbsolute(path.join(__dirname, __filename))) // this should display true.
console.log(path.isAbsolute(path.join(`.`, `fakefile.txt`))) // this should display false.


/*
path.isAbsolute() returns either true or false.
in the previous example, we mixed different path methods to gain more understanding
how they can be applied together.
*/

// using path.extname() method:
console.log(`\n\n_____________\n\n using the path.extname() method:\n`)
console.log(path.extname(__filename)); // it should give .js
console.log(path.extname(__dirname)); // it should give none becaus the directory name is  folder and does not have extension.

// using the path.parse() method:
console.log(`\n\n__________________\n\n using path.parse() method:\n`)
console.log(path.parse(__filename));

/**
 * path.parse() method returns a list of all the path content.
 * as you can see, it can be used to break a path into portions.
 */

// using path.format() method:
console.log(`\n\n___________________\n\n using path.format() method:\n`)
console.log(path.format(path.parse(__filename)));

/**
 * path.format() method is the opposite of path.parse() method.
 * as you can see in the previous example, we used path.format to form a path
 * that was broken into a list by path.parse() method
 */