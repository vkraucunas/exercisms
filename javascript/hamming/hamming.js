var Hamming = function() {
    this.compute = function (first, second) {
        return myComputeFn(first, second);
    };
};

//mycompute
function myComputeFn(uno, dos) {
    var result = 0;
    if (uno.length !== dos.length) {
        throw new Error("DNA strands must be of equal length.");
    }
    uno.split('').map((x,i) => {
        result += x !== dos.charAt(i)? 1: 0;
    });

    return result;
}


module.exports = Hamming;