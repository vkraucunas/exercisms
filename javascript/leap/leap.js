module.exports = Year;

function Year(num) {
    var year = num;
    this.isLeap = function() {
        if (!(year % 400)) {
            return true;
        } else if (!(year % 4) && (year % 100 != 0)) {
            return true;
        } else {
            return false;
        }
    };
}