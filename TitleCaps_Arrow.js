                  // Arrow Function

var greet = (str) => {
   let capsArray = [];

  for (let i = 0; i < str.length; i++) {
    let string = str[i];
    let titleCaps = string.charAt(0).toUpperCase() + string.slice(1);
    capsArray.push(titleCaps);
  }

  console.log(capsArray);

};
greet(['rajini','sachin','undertaker'])

//Output Link: https://jsfiddle.net/46bqhtkd/16/
