
const RandomLowerString = 'abcdefghijklmnopqrstuvwxyz';
const RandomUpperString = RandomLowerString.toUpperCase();
const RandomNumber = '0123456789';

function randomStringGenerator(len = 5, value = 3){
    let randomString = '';
    let selectString = '';

    // value = 1 select only lowercase alphabet, 
    // value = 2 select only lowercase and uppercase alphabet, 
    // value = 3 select number, lowercase and uppercase alphabet, 
    selectString = value >= 1 ? selectString += RandomLowerString : selectString += '';
    selectString = value >= 2 ? selectString += RandomUpperString : selectString += '';
    selectString = value >= 3 ? selectString += RandomNumber : selectString += '';

    for (let i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * selectString.length);
        randomString += selectString.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

module.exports = randomStringGenerator;

