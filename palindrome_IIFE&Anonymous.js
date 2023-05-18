                    // IIFE


(function (a) {
  let temp = [];
for(let i = 0; i< a.length ;i++)
{
	if(a[i].split('').reverse().join('') == a[i])
  {
  temp.push(a[i]);
  }
}console.log(temp);

})(['121','madam','Madam','saar','TeneT']);

// Output Link: https://jsfiddle.net/46bqhtkd/28/


                  // Anonymous

var pali = function(a) {
  let temp = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].split('').reverse().join('') == a[i]) {
      temp.push(a[i]);
    }
  }
  console.log(temp);
}

pali(['121', 'madam', 'Madam', 'saar', 'TeneT'])

// Output Link: https://jsfiddle.net/46bqhtkd/29/
