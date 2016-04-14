//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

//variables & simple variable manipulations
  var result = '';
  function splitValue(value) {return value.split('');}
  function lastChar(value) {return splitValue(value).pop()};
  var specialChars = " @#$^&%*()+=-[]\/{}|:<>,?";

//functions
  var allCaps = function(array) {
    var a = splitValue(array).map(function (current) {
              return current === current.toUpperCase();
            });
    return a.indexOf(false) === -1;
  };

  var allNumbers = function(array) {
    var a = splitValue(array).map(function (current) {
              return !isNaN(current) || specialChars.indexOf(current) !== -1;
            });
    return a.indexOf(false) === -1;
  };

  function isQuestion(value) {
      return lastChar(value) === '?';
  }

  function isForceful(value) {
      return allCaps(value);
  }
  function isAllNumbers(value) {
      return allNumbers(value);
  }

  function isNormal(value) {
      var forceful = isForceful(value);
      var punctuation = lastChar(value);
      return !forceful && punctuation === '.';
  }

  function isSilence(value) {
    return value.split(' ').join('') === '';
  }

//code to answer tests

  var snark = 'Whoa, chill out!';
  var meh = 'Whatever.';
  var sure = 'Sure.';
  var anger = 'Fine. Be that way!';

  if (isSilence(input)) {
    result = anger;
  } else if (isAllNumbers(input)){
    result = isQuestion(input) ? sure :meh;
  } else if (isForceful(input) ) {
     result = snark;
  } else if (isQuestion(input)) {
    result = sure;
  } else {
    result = meh;
  }





  return result;
};

module.exports = Bob;
