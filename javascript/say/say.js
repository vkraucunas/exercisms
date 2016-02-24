var numbers = {
    ones: {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    },
    tens: {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        2: "twenty",
        3: "thirty",
        4: "fourty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    }
};

var say = {
    inEnglish : function(num) {
        if (num === 0) {
            return "zero";
        }
        if (num < 0 || num > 999999999999) {
            throw new Error("Number must be between 0 and 999,999,999,999.");
        }
        //number manipulation
        var length = num.toString().length;
        var stringed = num.toString();
        //numbers object access
        var ones = numbers.ones;
        var tens = numbers.tens;

        if (length == 1) {
            return singleDigit(num);
        } else if (length == 2 && stringed.charAt(0) == 1) {
            return teens(num);
        } else if (length == 2 && stringed.charAt(1) != 1) {
            if (stringed.charAt(1) == 0) {
                var result = teens(stringed.charAt(0));
                return result;
            } else {
                var result = teens(stringed.charAt(0));
                result += "-"
                result += singleDigit(stringed.charAt(1));
                return result;
            }
        } else if (length == 3 && stringed.charAt(1) != 0) {
            var result = singleDigit(stringed.charAt(0))+" hundred ";
            result += teens(stringed.charAt(1));
            result += "-"
            result += singleDigit(stringed.charAt(2));
            return result;
        } else if (length == 3) {
            var result = singleDigit(stringed.charAt(0))+" hundred";
            return result;
        } else if (length == 4 && stringed.charAt(1) != 0) {
            var result = singleDigit(stringed.charAt(0))+" thousand ";
            result += singleDigit(stringed.charAt(1))+" hundred ";
            result += teens(stringed.charAt(2));
                result += "-"
                result += singleDigit(stringed.charAt(3));
            return result;
        } else if (length == 4) {
            var result = singleDigit(stringed.charAt(0))+" thousand";
            return result;
        } else if (length == 7 && stringed.charAt(6) != 0) {
            var result = singleDigit(stringed.charAt(0))+" million ";
            result += singleDigit(stringed.charAt(6));
            return result;
        } else if (length == 7) {
            var result = singleDigit(stringed.charAt(0))+" million";
            return result;
        }



        //helper functions
        function singleDigit(number) {
            return ones[number];
        }
        function teens(number) {
            return tens[number];
        }
    }
}

module.exports = say;



// var say =  {
//     inEnglish: function(num) {
//         if (num === 0) {
//             return "zero";
//         }
//         if (num < 0 || num > 999999999999) {
//             throw new Error("Number must be between 0 and 999,999,999,999.");
//         }
//         //number manipulation
//         var stringed = num.toString();
//         var length = stringed.length;
//         var arrayed = stringed.split('');
//         var result = '';
//     } //<< this is the inEnglish closer. no touchy.
//     //made for loop.
//     //declared variable i, gave it value of 2.
//     // if i is less than or equal to input the loop will continue.
//     // after each cycle, i increases by one.
//     for (var i = 0; i <= length; i++) {
//         //declared a while loop.
//         //the loop will continue to run while input modulus i equals 0
//         // AND input doesn't equal 1.
//         while(length !== 0) {
//             //when that is true, push i to the factors array
//             factors.push(i);
//             //input then is updated to be input divided by i and run
//             //by the loop again.
//             input = input/i;
//         }
//     }
//     //this returns the factors array for assessment by the test.
//     return factors;
// }