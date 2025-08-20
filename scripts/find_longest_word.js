
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

/*
using .reduce() 
  - reduce the elements of an array to a single value 
*/ 

const prices = [5, 30, 10, 25, 15, 30];
const total = prices.reduce(sum);   // has a single value 

console.log(`$${total.toFixed(2)}`);

function sum(previous, next) {    // function sum(accumulator, element)
  return previous + next; 
}


const grades = [75, 50, 2, 90, 80, 10, 65, 95];

const maxValue = grades.reduce(getMax);    // pass callback, find the max value
const minValue = grades.reduce(getMin);   // find the min value

console.log(maxValue);
console.log(minValue);

// return the max value in the array
function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

// return the min value in the array
function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}

// find the shortest word
const words = ['one', 'three', 'a', 'as', 'nine'];
const shortest = words.reduce(getShortestWord);
console.log(shortest);

function getShortestWord(accumulator, word) {
  return word.length < accumulator.length ? word : accumulator;
}

// find the longest word
const longest = words.reduce(getLongestWord);
console.log(longest);

function getLongestWord(accumulator, word) {
  return word.length > accumulator.length ? word : accumulator;
}
