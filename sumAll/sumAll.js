const sumAll = function(start, stop) {
    let sum = 0;
    let large = start > stop ? start : stop;
    let small = large === start ? stop : start;

    if(start < 0 || stop < 0 || typeof start !== "number" || typeof stop !== "number") {
        return 'ERROR';
    }

    for (let i = small; i <= large; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
