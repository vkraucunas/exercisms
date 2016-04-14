module.exports = CustomSet;

function CustomSet(array) {
    var goodSet;
    this.delete = function(num) {
        if (array.indexOf(num)) {
            array.splice(array.indexOf(num), 1);
        }
        goodSet = array.sort();
        console.log(goodSet);
        return goodSet;
    };
    // this.eql = function(something) {
    //     console.log("eql fnc", something);
    //     for (var i = 0; i < something.length; i++) {
    //         if (something[i] === goodSet[i]) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    // };
}
