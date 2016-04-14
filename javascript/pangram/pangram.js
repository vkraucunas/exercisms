module.exports = Pangram;

function Pangram(string) {
    this.isPangram = function() {
        return (string.length < 26) ? false : checking(string);
    }
}

function checking(str) {
    str = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var result = alphabet.map(function (current, index) {
        return str.includes(current);
    });
    return result.indexOf(false) === -1;
}