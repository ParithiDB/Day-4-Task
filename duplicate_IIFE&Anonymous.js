              // IIFE

(function (a) {
			let temp = [];
			for ( let i = 0; i< a.length; i++)
					{
							if(temp.indexOf(a[i]) === -1)
              {
              temp.push(a[i]);
              }
					}console.log(temp);

})([1,1,3,4,5,5,4,5,3,2,2,4,1,3,4,6,2,5,2,5,8,9,0,7,8,9,6,6,5]);

// Output Link: https://jsfiddle.net/46bqhtkd/37/


              // Anonymous

let dup = function (a) {
			let temp = [];
			for ( let i = 0; i< a.length; i++)
					{
							if(temp.indexOf(a[i]) === -1)
              {
              temp.push(a[i]);
              }
					}console.log(temp);

}
dup([1,1,3,4,5,5,4,5,3,2,2,4,1,3,4,6,2,5,2,5,8,9,0,7,8,9,6,6,5]);

// Output Link: https://jsfiddle.net/46bqhtkd/38/
