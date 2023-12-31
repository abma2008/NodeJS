/**
 * THIS IS THE TUTORIALL WHERE WE EXPLAIN THE BASIC CODE OF:
 * - READING FROM A FILE.
 * - WRITING TO A FILE.
 * - APPENDING TO A FILE.
 * - REMOVING A FILE.
 * - USING FS MODULE AND ALSO PATH MODULE IN NODEJS
 * 
 * NOTE:
 * we will be explaining the concept of async an sync here to see the differences.
 * the definitions will be specified at the end of this practical exercise.
 * ===================================================================================
 */

// importing the modules:
const fs = require(`fs`);
const path = require(`path`);

// for each, we will define a function and call it:
//create a file function:
let createFile = async () => {
    await fs.writeFile(path.join(__dirname, `writeFile.txt`), `This is the writefile initial content`, (err, data) => {
        if (err) throw err;
        console.log(`the file has been created successfully`);
    })
}

// calling the function createFile:
// createFile();


// Creating a function to read the content of the file createFile.txt:
let readFile = async () => {
    await fs.readFile(path.join(__dirname, `writeFile.txt`), `utf8`, (err, data) => {
        if (err) throw err;
        console.log(`The content of the file writeFile.txt is:\n\n${data}`)
    })
}

//calling the function readFile:
// readFile();


//Creating a file that will append the content and add more into the writeFile.txt file:
let appendFile = async () => {
    await fs.appendFile(path.join(__dirname, `writeFile.txt`), `\n-------\n append sentence here..`, (err, data) => {
        if (err) throw err;
        console.log(`the file has been appended`)
    })
}

// first call appendFile and then, call readFile functions:
// appendFile();
// readFile();

// to delete a file, we can use unlink as it will show in the following function:
let deleteFile = async () => {
    await fs.unlink(path.join(__dirname, `writeFile.txt`), (err) => {
        if (err) throw err;
        console.log(`the file has been deleted successfully`)
    })
}


// calling the function deleteFile():
// deleteFile();



// to rename a file, we can apply the fs.rename() method:
let renameFile = async () => {
    // we will declaring the file to delete here:
    await fs.rename(path.join(__dirname, `hello.txt`), `hello_rename.txt`, (err, data) => {
        err ? console.log(`Something went wrong, the file does not exist:\n${err}`) : console.log(`The file has been renamed successfully`)
    })
}

// callling the function renameFile:
// renameFile();




// using the fs.existsSYNC() method to check if a file exists or not:
// it can be also used to check if a directory exists or not, so we will be using the following code lines:
const checkFile = async () => {
    if (fs.existsSync(path.join(__dirname, `fakeFolder`))) { //add ! before fs.existSYNC() to reverse condition.
        console.log(`the fakeDirctory exists`)
    }
    else {
        console.log(`Something went wrong, the directory does not exist`)
    }
}

//calling the function to execute:
// checkFile();