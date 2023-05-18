                          // IIFE

(function(numbers) {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  var primeNumbers = [];
  
  for (var i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primeNumbers.push(numbers[i]);
    }
  }
  
  console.log(primeNumbers);
})([2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Output Link: https://jsfiddle.net/46bqhtkd/23/
                                  


                                // Anonymous





var prime = function (numbers) {
 function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  var primeNumbers = [];
  
  for (var i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primeNumbers.push(numbers[i]);
    }
  }
  
  console.log(primeNumbers);
}
prime([1,2,3,4,5,6,7,8,9]);

// Output Link: https://jsfiddle.net/46bqhtkd/24/
