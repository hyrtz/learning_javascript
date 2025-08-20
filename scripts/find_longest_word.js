
const array = ['w','oned','apple', 'banana', 'iwi', 'onedotoneefoydfghj', 'strawberry', 'onedotoneefoy', 'ww'];

console.log(findLongestWord(array));
console.log(findShortestWord(array));

function findLongestWord(array) {
  let longestWord = ''; // not an array bu an empty str (empty str has 0 length)

  for (let i = 0; i < array.length; i++) {
    let word = array[i];

    if (word.length > longestWord.length) {
      longestWord = word;
        // changes made:
        /* cuurent element should not only compared to the first element [0]
          but to each element
           */
    }
  }
  return longestWord; 
}


function findShortestWord(array) {
  // need to initialize the first word
  let shortestWord = array[0];  // 

  for (let i = 0; i < array.length; i++) {
    let word = array[i];

    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}