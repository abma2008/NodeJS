/**
 * This is the http module in nodejs tutorial.
 * we will be making a standard explanation with examples 
 * to see how it works and also, illustrate some of its standard concepts.
 * -------------------------------------------------------------------------------
 */

// importing the http module:
const http = require(`http`);

// creating a server using the http module:
const myServer = http.createServer((req, res) => {
    res.setHeader(`Content-Type`, `text/html`);
    res.write(`<h1>Hello World</h1>\n`)
    res.write(`<hr>`)
    res.write(`<p> This is  simple website using the standard http module in NodeJS<p>`);
    res.end();
});

// running the server on port 3000:
myServer.listen(3000, (req, res) => {
    console.log(`The Server is running on port 3000`)
})