//Return an array consisting of the largest number from each provided sub-array

function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let greatest = arr[i].reduce((a, b) => a > b ? a : b);
    newArr.push(greatest);
  }
  return newArr;
}
