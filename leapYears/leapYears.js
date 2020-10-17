const leapYears = function(year) { //input is year
    if (year % 100 === 0) { //leap years are divisable by 100 & 400
        if (year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    } else if (year % 4 === 0) { //leap years are divisable by 4 
        return true;
    } else {
        return false;
    }
}

module.exports = leapYears
