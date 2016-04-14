function myFn (arg) {
    // switch (arg) {
    //  case 1:
    //      return [];
    //      break;
    //  case 2:
    //      return [2];
    //      break;
    //  case 3:
    //      return [3];
    //      break;
    //  case 4:
    //      return [2, 2];
    //      break;
    //  case 6:
    //      return [2, 3];
    //      break;
    //  case 8: 
    //      return [2, 2, 2];
    //      break;
    //  case 9:
    //      return [3, 3];
    //      break;
    //  case 27:
    //      return [3, 3, 3];
    //      break;
    //  case 625:
    //      return [5, 5, 5, 5];
    //      break;
    //  case 901255:
    //      return [5, 17, 23, 461];
    //      break;
    //  case 93819012551: 
    //      return [11, 9539, 894119];
    //      break;
    //  default: 
    //      console.log('so done w/ this shit');
    // }



}

module.exports = {
    for: myFn
};










































var num = 6;


function firstFactorial (numeral) {
    for (var i = 2; i < numeral; i++) {
        if (numeral % i == 0) {
            return i;
        };
    };
    return numeral;
}

function prime (numeral) {
    var result = [];
    var factorial = firstFactorial(numeral);

    result.push(factorial);
    if (factorial == numeral) {
        console.log(result);
        return;
    }
    numeral = numeral/factorial;
    factorial = firstFactorial(numeral);
    result.push(factorial);
    if (factorial == numeral) {
        console.log(result);
        return;
    }
}

prime(num);


//Bradley's solution
// declared a function and named it primeFactors. Gave it a
//parameter of num.
function primeFactors (num) {
    //declared a variable named input. Assigned it equal to 
    //num.
    var input = num;
    //declared a variable named factors. assigned it equal to 
    // an empty array.
    var factors = [];
    //made for loop. 
    //declared variable i, gave it value of 2. 
    // if i is less than or equal to input the loop will continue.
    // after each cycle, i increases by one.
    for (var i = 2; i <= input; i++) {
        //declared a while loop. 
        //the loop will continue to run while input modulus i equals 0
        // AND input doesn't equal 1.
        while(input % i === 0 && input !== 1) {
            //when that is true, push i to the factors array
            factors.push(i);
            //input then is updated to be input divided by i and run
            //by the loop again.
            input = input/i;
        }
    }
    //this returns the factors array for assessment by the test.
    return factors;
}

module.exports = {
    for : primeFactors
}


//Robby's solution
//declared a variable and named it findFactor
//assigned it a function that has one parameter named num.
var findFactor = function(num) {
  // started an if statment. if num is less than or equal to 1, 
  // return an empty array.  
  if (num <= 1) {return [];}
  //declaring a variable named i. assigning it the value of 2;
  var i = 2;
  // starting a while loop. giving it the argument of num modulus i.
  // then advancing i by 1.
  while (num % i) {i++;}
  //declaring a variable called factors. assigning it an empty array.
  var factors = [];
  // pushing i to the factors array.    
  factors.push(i);
  // declaring a variable named addtl. giving it a value of 
  // a function(recalling the whole function up til this point)
  // the parameter for this iteration of the function is num divided
  // by the current value of i
  var addtl = findFactor(num / i);
  // started an if statement
  // if additional has a value(and therefore a length) is true
  // update
  if (addtl.length) {factors = factors.concat(addtl);}
  return factors;
};

module.exports = primeFactors = {
  for: findFactor
};




































