
function getDomain(URL){
    let url = URL;
    let domain = '';


    if(typeof url !== 'string') return 'not a valid URL';

    // getting http or https
    if(url.indexOf('https://') >= 0) {
        domain += 'https://';
        url = url.replace('https://','');
    }
    else if(url.indexOf('http://') >= 0){
        domain += 'https://';
        url = url.replace('http://','')
    }

    // getting first part of url '/'
    url = url.split('/')[0];

    // getting full domain
    domain += url;

    if(!domain) return 'not a valid URL';

    return domain;
}


module.exports = getDomain;


