const removeFromArray = function(arr, ...target) {
    let arrCopy = arr; //copy array so original input is not touched

    for (let i = 1; i < arguments.length;i++) {//iterate over args
        if (arrCopy.indexOf(arguments[i]) !== -1) { //checks to see if target exists in arr
            arrCopy.splice(arrCopy.indexOf(arguments[i]), 1); //deletes the target
        }
    }
    return arrCopy;
}

module.exports = removeFromArray
