
// 11v: FizzBuzz Problem
console.log('11v: FizzBuzz Problem');
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 ) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
  } else {
    console.log(i);
  }
}

// w: q function to find index 
console.log('11w: Element Duplicates');
const array = ['green', 'red', 'blue', 'red', 'pink', 'blue'];

console.log(unique(array)); 
console.log(countWords(array)); 

// return index 
function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    } 
  }
  return -1;
}

// identify duplicates
// implicitly skipping duplicates 
function unique(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    // using findIndex() function
    if (findIndex(result, word) === -1) { // when element is not in result 
      result.push(word);                  // add element to result 
    }
  }
  return result;
}

// count word freq
function countWords(array) {
  let wordsObj = {}; 

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    wordsObj[item] = (wordsObj[item] + 1) || 1;
  }
  
  return wordsObj;
}
