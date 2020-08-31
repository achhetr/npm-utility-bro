# NPM Utility Bro 

npm-utility is a JavaScript library which will help you use lengthy function in one line.

## Requirement


Check that you have node and npm installed
To check if you have Node.js installed, run this command in your terminal:

```bash
node -v
```

To confirm that you have npm installed you can run this command in your terminal:

```bash
npm -v
```

## Installation

Use the npm package manager by following this [link](https://www.npmjs.com/get-npm)

```bash
npm i utility-bro
```

## Usage

```javascript
const randomStringGenerator = require("./randomStringGenerator");


    // use len to select length of a random string

    let randomString = '';
    let selectString = '';


const len = 5;
const value = 3

console.log(randomStringGenerator());
```
value = 1 select only lowercase alphabet, value = 2 select only lowercase and uppercase alphabet,  value = 3 select number, lowercase and uppercase alphabet, value >= 4 select special character, number, lowercase and uppercase alphabet

randomStringGenerator(len = 5, value = 3) means it will return length of string 5 and value will enable you to select type of string.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update to latest version.

## License
[MIT](https://choosealicense.com/licenses/mit/)