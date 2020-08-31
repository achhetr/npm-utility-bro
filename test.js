const getDomain = require('./getDomain');
const randomStringGenerator = require("./randomStringGenerator");

const url = 'https://www.npmjs.com/search?q=shorturl';

console.log(getDomain(url));

console.log(randomStringGenerator());
