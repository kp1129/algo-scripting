/*
Create a function that looks through an array (first argument) and returns the first element in 
the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/

function findElement(arr, func) {
  let num;
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      num = arr[i];
      return num;
    }
  }
  return num;
}

//this one gave me a headache
