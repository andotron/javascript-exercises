const reverseString = function(string) {
    let strRev = ''; //hold final string
    let strArr = string.split('');//split string to convert to array
    for (let i = string.length - 1; i >= 0; i--) {//iterate from end of array(string.length) to first character.
        strRev += strArr[i];//add each character to the stringbuilder
    //return string builder
    }
    return strRev;
}

module.exports = reverseString
