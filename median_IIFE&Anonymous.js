                       // IIFE


(function (a,b) {
let m = a.concat(b)
let marr = m.sort((a,b) => a-b);

let mp = Math.floor(marr.length / 2);


if(marr.length % 2 == 0)
{
	console.log((marr[mp-1] + marr[mp]) / 2);
}else
{
	console.log(marr[mp]);
}
  
})([1,2,3],[4,5,6]);

// Output Link: https://jsfiddle.net/46bqhtkd/33/


                       // Anonymous

var med = function (a,b) {
let m = a.concat(b)
let marr = m.sort((a,b) => a-b);

let mp = Math.floor(marr.length / 2);


if(marr.length % 2 == 0)
{
	console.log((marr[mp-1] + marr[mp]) / 2);
}else
{
	console.log(marr[mp]);
}
};med([1,2,3],[6,5,4]);

// Output Link: https://jsfiddle.net/46bqhtkd/35/
