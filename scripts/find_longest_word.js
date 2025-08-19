
const array = ['onedotoneefoydfghj','apple', 'banana', 'kiwi', 'strawberry', 'onedotoneefoy'];

console.log(findLongestWord(array));

function findLongestWord(array) {
  let longestWord = []; 

  for (let i = 0; i < array.length; i++) {
    let word = array[i];

    if (word.length >= array[0].length) {
      longestWord = word;
    }
  }
  return longestWord; 
}