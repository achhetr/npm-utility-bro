
const LowerChar = 'abcdefghijklmnopqrstuvwxyz';
const UpperChar = LowerChar.toUpperCase();
const NumSet = '0123456789';
const SpecialChar = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

function randomStringGenerator(len = 5, value = 3){
    // use len to select length of a random string

    let randomString = '';
    let selectString = '';

    // value = 1 select only lowercase alphabet, 
    // value = 2 select only lowercase and uppercase alphabet, 
    // value = 3 select number, lowercase and uppercase alphabet, 
    // value = 4 select special character, number, lowercase and uppercase alphabet, 
    selectString += value >= 1 ? LowerChar : '';
    selectString += value >= 2 ? UpperChar : '';
    selectString += value >= 3 ? NumSet : '';
    selectString += value >= 4 ? SpecialChar : '';

    for (let i = 0; i < len; i++) {
        let randomPos = Math.floor(Math.random() * selectString.length);
        randomString += selectString[randomPos];
    }
    return randomString;
}

module.exports = randomStringGenerator;


