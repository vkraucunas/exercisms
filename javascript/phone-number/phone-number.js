//myNumberFn helpers
function cleanup(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === ' ') {
            array.splice(array[i], 1);
        }
        Number(array[i]);
        if (!isNaN(array[i])){
            result.push(array[i]);
        }
    }
    return result;
}

function validLength(array) {
    var result = '';
    if (array.length === 10) {
        result = array.join('');
    } else if (array.length === 11 && array.shift() === '1') {
        result = array.slice(0, array.length).join('');
    } else {
        result = '0000000000';
    }
    return result;
}

//Number function
var myNumberFn = function(str) {
    var newInput = str.split('');
    var justNums = cleanup(newInput);
    return validLength(justNums);
};


//Area function
var myAreaFn = function(str) {
    var result = str.slice(0, 3);
    return result;
};

//myStringFn helper functions
function areaGrab(string) {
    var result = '';
    var firstStep = myAreaFn(string);
    result = '('.concat(firstStep).concat(')');
    return result;
}

//String function
var myStringFn = function(str) {
    var result = '';
    var splitting = str.split('');
    result += (areaGrab(str)+' ');
    result += (splitting.slice(3, 6).join(''));
    nextStep = splitting.slice(6,splitting.length);
    result += ['-'].concat(nextStep).join('');
    return result;
};

//constructor for testing
var PhoneNumber = function(input) {
    this.number = function(){
        return myNumberFn(input);
    };
    this.areaCode = function() {
        return myAreaFn(input);
    };
    this.toString = function() {
        return myStringFn(input);
    };
};

module.exports = PhoneNumber;