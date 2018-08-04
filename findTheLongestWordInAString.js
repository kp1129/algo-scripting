//return the *length* of the longest word in the provided sentence

function findLongestWordLength(str) {
    let longestWord = 0;
    let newArr = str.split(" ");
    for (let i = 0; i < newArr.length; i++){
        if (newArr[i].length > longestWord){
            longestWord = newArr[i].length;
        }
    }
    return longestWord;
}
