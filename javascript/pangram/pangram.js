module.exports = Pangram;

function Pangram(string) {
    this.isPangram = function() {
        return (string.length < 26) ? false : checking(string);
    }
}

function checking(str) {
    str = str.toLowerCase();
    var alphabet = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
    var result = alphabet.map(function (current, index) {
        return str.includes(current) ? true : false;
    });
    return result.indexOf(false) === -1;
}
















    //first solution
//     var alphabet = {
//         a: false,
//         b: false,
//         c: false,
//         d: false,
//         e: false,
//         f: false,
//         g: false,
//         h: false,
//         i: false,
//         j: false,
//         k: false,
//         l: false,
//         m: false,
//         n: false,
//         o: false,
//         p: false,
//         q: false,
//         r: false,
//         s: false,
//         t: false,
//         u: false,
//         v: false,
//         w: false,
//         x: false,
//         y: false,
//         z: false
//     };
//     str = str.split('');
//     for (var i = 0; i <str.length; i++) {
//         //console.log(str[i]);
//         if(!alphabet[str[i]]) {
//             alphabet[str[i].toLowerCase()] = true;
//         }
//     }
//     //console.log(alphabet);
//     // console.log("updated alphabet", alphabet);
//     for (var i=0 in alphabet) {
//         if (!alphabet[i]) {
//             return false;
//         }
//     }
//     return true;
// }