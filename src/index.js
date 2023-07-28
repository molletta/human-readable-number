module.exports = function toReadable (number) {
    const oneDigit = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const twoDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dez = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numStr = number.toString();
    let result = '';

    if (number === 0) {return 'zero'}

    if(numStr.length == 1 && number > 0) { result = oneDigit[number - 1]}
    else if(numStr.length == 2) { if (numStr[0] == '1') {result = twoDigit[+numStr[1]]}
                                  else { result = numStr[1] == 0 ? dez[+numStr[0] - 1] : dez[+numStr[0] - 1] + ' ' + oneDigit[+numStr[1] - 1]}
                                 }
    else if(numStr.length == 3) {

    let twoDigitRead = '';

    if (numStr[1] == '0' && numStr[2] == '0') {twoDigitRead = '' }
    else if (numStr[1] == '0' && numStr[2] != '0') {twoDigitRead = '' + oneDigit[+numStr[2] - 1]}
    else if (numStr[1] == '1') {twoDigitRead = twoDigit[+numStr[2]]}
    else {twoDigitRead = numStr[2] == 0 ? dez[+numStr[1] - 1] : dez[+numStr[1] - 1] + ' ' + oneDigit[+numStr[2] - 1]};

    result = oneDigit[+numStr[0]-1] + ' hundred ' + twoDigitRead;
    }

    result = result.trim()

    return result

}
