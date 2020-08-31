
function getDomain(URL){
    let url = URL;
    let domain = '';

    // getting http or https
    if(url.indexOf('https://') >= 0) {
        domain += 'https://';
        URL = URL.replace('https://','');
    }
    else if(url.indexOf('http://') >= 0){
        domain += 'https://';
        URL = URL.replace('http://','')
    }

    // getting first part of url '/'
    URL = URL.split('/')[0];

    // getting full domain
    domain += URL;

    return domain;
}


module.exports = getDomain;

