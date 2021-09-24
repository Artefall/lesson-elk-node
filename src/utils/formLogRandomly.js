const getRandomNumber = require('./getRandomNumber');

const METHODS = ['GET', 'POST', 'PUT', 'DELETE'];
const ENDPOINTS = ['/home', '/user', '/data', '/logs', '/login'];
const HTTP_CODES = [100, 200, 204, 300, 400, 401,402,404, 500, 502];

function formTimeStamp(date){
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
}

function formLog(...args){
    const log = args.reduce((previous, current) => `${previous} ${current}`);
    const logWithNewLine = `${log}\r\n`;

    return logWithNewLine;
}

function randomElement(elements){
    const randomElementNumber = Math.floor(Math.random() * elements.length);
    return elements[randomElementNumber];
}

function randomIpAddress(){
    return `${getRandomNumber(1,255)}.${getRandomNumber(0,255)}.${getRandomNumber(0,255)}.${getRandomNumber(0,254)}`
}

function formLogRandomly(){
    
    const log = formLog(
                            formTimeStamp(new Date()),
                            randomElement(METHODS),
                            randomElement(ENDPOINTS),
                            randomElement(HTTP_CODES),
                            randomIpAddress()
                        );

    return log;
}

module.exports = formLogRandomly;

 