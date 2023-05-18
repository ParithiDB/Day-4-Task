                      // IIFE

(function (a) {
  let sum = 0;
  
  for(let i = 0;i<a.length;i++)
  {
  sum += a[i];
  }
  console.log(sum);
})([1,5,6,5,78,3,2]);

// Output Link: https://jsfiddle.net/46bqhtkd/19/


                        // Anonymous

var fun1 = function (a) {
let sum = 0;
  
  for(let i = 0;i<a.length;i++)
  {
  sum += a[i];
  }
  console.log(sum);
}
fun1([1,5,6,5,78,3,2]);

// Output Link: https://jsfiddle.net/46bqhtkd/21/
