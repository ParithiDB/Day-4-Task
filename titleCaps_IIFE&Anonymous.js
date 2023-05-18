                      // IIFE

(function (str) {
  let capsArray = [];

  for (let i = 0; i < str.length; i++) {
    let string = str[i];
    let titleCaps = string.charAt(0).toUpperCase() + string.slice(1);
    capsArray.push(titleCaps);
  }

  console.log(capsArray);
})(["sachin", "rajini", "undertaker"]);

// Output Link: https://jsfiddle.net/46bqhtkd/14/



                        // Anonymous
                        

var fun1 = function (str) {
let capsArray = [];

  for (let i = 0; i < str.length; i++) {
    let string = str[i];
    let titleCaps = string.charAt(0).toUpperCase() + string.slice(1);
    capsArray.push(titleCaps);
  }

  console.log(capsArray);
}
fun1(['rajini','sachin','undertaker']);


// Output Link: https://jsfiddle.net/46bqhtkd/15/
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
