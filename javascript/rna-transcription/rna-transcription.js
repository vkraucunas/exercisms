module.exports = DnaTranscriber;

function DnaTranscriber() {
    this.toRna = function(input) {
        var toArray = input.split('');
        return toArray.map(function(el) {
            if (el === "C") {
                return "G";
            } else if (el === "G") {
                return "C";
            } else if (el === "A") {
                return "U";
            } else {
                return "A";
            }
        }).join('');
    };
}