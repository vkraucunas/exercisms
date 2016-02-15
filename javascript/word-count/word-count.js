module.exports = Words;

function Words() {
    this.count = function (string) {
        string = string.replace(/\n|\t|\s\s/g, " ");
        string = string.trim();
        if (string.indexOf(' ') === -1) {
            var counts = {};
            counts[string] = 1;
            return counts;
        };
        var splitting = string.split(' ');
        return makeObj(splitting);
    };

}

function makeObj(array) {
    var counts = {};
    for (var i = 0; i < array.length; i++) {
        if (counts[array[i]] > 0) {
            counts[array[i]] += 1;
        } else {
            counts[array[i]] = 1;
        }
    }
    return counts;
}
