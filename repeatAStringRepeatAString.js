/* 
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.
--note, was not allowed to use .repeat() 
*/

function repeatAgain(str, num) {
  if (num <= 0) {
    return "";
  } else {
    let newString = "";
    for (let i = 0; i < num; i++) {
      newString += str;
    }
    return newString;
  }
}
