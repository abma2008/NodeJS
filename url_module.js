/**
 * This is a quick overview over the url module in nodejs
 * please view and try to understand how it can be applied:
 * --------------------------------------------------------
 */

// import the url module:
const url = require(`node:url`);

// making a new variable url to test:
let link = `http://localhost:8080/default.htm?year=2015&month=january`;
// lets now use the  url module to parse the link variable:
let q = url.parse(link, true);
//using the console to view the parsed content of the link url:
console.log(q.host) // returns localhost:8080
console.log(q.pathname); // returns /default.htm
console.log(q.search); // returns ?year=2015&month=january
console.log(q.query); // returns an object: { year: `2015`, month: `january`}



/**
 * This is a very short example of the url module, but it is a good thing 
 * to practice how it works from time to time.
 * we will be exposed more to this concept in the upcoming days.
 * best regards
 */