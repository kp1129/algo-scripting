/* Return true if the string in the first element of the array 
contains all of the letters of the string in the second element of the array. */

function mutation(arr) {
  let str = arr[0].toLowerCase();
  console.log(str);
  let check = arr[1].toLowerCase();
  console.log(check);
  for(let i = 0; i < check.length; i++) {
    if(str.indexOf(check[i]) === -1) {
      return false;
    }
  } return true;
}
