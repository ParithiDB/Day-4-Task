                // IIFE

(function(arr, k) {
  var rotations = k % arr.length; // Get the effective number of rotations

  if (rotations === 0) {
    console.log(arr); // No rotations needed, output the original array
    return;
  }

  var removedElements = arr.splice(-rotations); // Remove the last 'rotations' elements
  Array.prototype.unshift.apply(arr, removedElements); // Add the removed elements to the beginning of the array

  console.log(arr);
})([1, 2, 3, 4, 5], 2);

// Output Link: https://jsfiddle.net/46bqhtkd/40/



          // Anonymous

let rotate = function(arr, k) {
  var rotations = k % arr.length; // Get the effective number of rotations

  if (rotations === 0) {
    console.log(arr); // No rotations needed, output the original array
    return;
  }

  var removedElements = arr.splice(-rotations); // Remove the last 'rotations' elements
  Array.prototype.unshift.apply(arr, removedElements); // Add the removed elements to the beginning of the array

  console.log(arr);
}
rotate([1, 2, 3, 4, 5], 2);

// Output Link: https://jsfiddle.net/46bqhtkd/41/
