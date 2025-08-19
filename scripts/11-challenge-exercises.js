
// L
console.log('L, M:');
const array5 = [-6, 3, -5, 7, 32, 10, 20, 54];
const array6 = [89, 54, 0, -80, 100, -1, -8, 62, -60];
const array7 = [];

const minMaxResult = minMax(array7);
console.log(minMaxResult);

function minMax(nums) {
  const minMaxObj = {
    min: nums[0],   // initialize first element 
    max: nums[0]
  };

  // check if the array is empty first, outside the loop 
  if (nums.length === 0) {
    minMaxObj.min = null;
    minMaxObj.max = null;
    return minMaxObj;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minMaxObj.min) { 
      minMaxObj.min = nums[i];
    }

    if (nums[i] > minMaxObj.max) { 
      minMaxObj.max = nums[i];
    }
  } 
  return minMaxObj;  
}

console.log('n:');
const wordToCount = ['apple', 'grape', 'apple', 'berry', 'apple', 'mango', 'mango', 'berry'];

const countedWords = countWords(wordToCount);
console.log(countedWords);

function countWords(words) {
  let wordsObj = {}; 

  for (let i = 0; i < words.length; i++) {
    let item = words[i];
    wordsObj[item] = (wordsObj[item] + 1) || 1;
  }
  
  return wordsObj;
}


// o
console.log('o');
const arrString = ['hello', 'world', 'search', 'good'];

for (let i = 0; i < arrString.length; i++) {
  if (arrString[i] === 'search') {
    const result = [i];
    console.log(result);
  }
   console.log(-1);
  
  // if (arrString[i] != 'search') {
  //   console.log(-1);
  // }
}

// p 
console.log('p');
const arrString2 = ['hello', 'world', 'search', 'good', 'search'];

for (let i = 0; i < arrString2.length; i++) {
  if (arrString2[i] === 'search') {
    const result = [i];
    console.log(result);
    break;
  } 

  if (arrString2[i] != 'search') {
    console.log(-1);
  }
}

// p  v2
console.log('p v2');
const arrString3 = ['hello', 'world', 'search', 'good', 'search'];
let found = false;

for (let i = 0; i < arrString3.length; i++) {
  if (arrString3[i] === 'search') {
    console.log([i]);
    found = true;
    break;
  } 
}

if (!found) {
  console.log(-1);
}

// q; function to find index 
console.log('q');
const array = ['green', 'red', 'blue', 'red'];
const word = 'yellow';

const arrayIndex = findIndex(array, word); 
console.log(arrayIndex); 

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    } 
  }
  // only return -1 if loop finishes with no match
  // outside the loop 
  return -1;
}

// r 
console.log('r');
function removeEggs(foods) {
  let eggsRemoved = [];
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      continue;
    } else {
      eggsRemoved.push(foods[i])
    }
  }
  return eggsRemoved;
}
console.log(removeEggs(['egg','apple','egg', 'egg', 'ham']));

// s
console.log('s');
function removeEggs(foods) {
  let result = [];
  let eggsSkipped = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      eggsSkipped++;
      if (eggsSkipped > 2) {
        result.push(foods[i])
      }
    } else {
      result.push(foods[i])
    }
  }
  return result;
}
console.log(removeEggs(['egg','apple', 'egg', 'egg', 'ham', 'egg']));

// t
console.log('t: reverseEggs');
const reverseEggs = ['egg','apple', 'egg', 'egg', 'ham', 'egg'];

console.log(removeEggs(reverseEggs))  // egg, apple, egg, ham
function removeEggs(foods) {
  foods.reverse();
  let result = [];
  let eggsSkipped = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      eggsSkipped++;
      if (eggsSkipped > 2) {
        result.push(foods[i])
      }
    } else {
      result.push(foods[i])
    }
  }
  return result.reverse();
}

console.log('u: using .slice()');
const reverseEggs1 = ['egg','apple', 'egg', 'egg', 'ham'];

console.log(removeEggs(reverseEggs1))  // egg, apple, egg, ham
function removeEggs(foods) {
  const copiedFoods = foods.slice();  // create a copy of foods arrays 
  copiedFoods.reverse(); 

  let result = [];
  let eggsSkipped = 0;

  for (let i = 0; i < copiedFoods.length; i++) {
    if (copiedFoods[i] === 'egg') {
      eggsSkipped++;
      if (eggsSkipped > 2) {
        result.push(copiedFoods[i])
      }
    } else {
      result.push(copiedFoods[i])
    }
  }
  console.log(foods);
  return result.reverse();
}




