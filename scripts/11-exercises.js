
// a
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

// b. better practice 
const numsArray1 = [1, 20, 22, 24, 5];
const numsArray2 = ['hi', 'hello', 'good'];

const result = getLastValue(numsArray1);

function getLastValue(array) {
  // not using for loop 
  // const lastIndex = array.length - 1;
  // return array[lastIndex];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 5) {
      return array[i];
    }
  }
}

console.log(result);


// c
const numsArray3 = [1, 20, 22, 24, 5];
const numsArray4 = ['hi', 'hello', 'good'];

const swappedFirstAndLast = arraySwap(numsArray3);
console.log(swappedFirstAndLast);

function arraySwap(array) {
  let lastIndex = array.length - 1;

  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}

// d
const outputSize = 10; 
let evenNum = 0; // store yung increment value 
let oddNum = 0; 

for (let i = 0; i <= outputSize; i++) {
  if (i % 2 === 0) {
    console.log(i);
    // evenNum++;
  } 
  
  // odd 
  // else if (i % 2 != 0) {
  //   console.log(i);
  //   oddNum++;
  // }

  // if (i === 0) {
  //   console.log('0');
  // } else if (i === 1) {
  //   console.log('2');
  // } else if (i === 2) {
  //   console.log('4');
  // } else if (i === 3) {
  //   console.log('6');
  // } else if (i === 4) {
  //   console.log('8');
  // } else if (i === 5) {
  //   console.log('10');
  // }
}

// e. 5 to 0 
console.log('Count backwards')
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// f
console.log('d: Using while loop')
let i = 0;
while (i <= 10){
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

console.log('e: Using while loop')
let index = 5;
while (index >= 0) {
  console.log(index);
  index--;
}

// g 
console.log('Add one to array value')
const numArray = [1, 2, 3];
const increasedArray1 = [];

for (i = 0; i < numArray.length; i++) {
  let add = numArray[i] + 1;
  increasedArray1.push(add);
}
console.log(increasedArray1);

// increase numArray[i] by 1 then add to new array 

// h
console.log('h:');
console.log('function to add 1')
const arrayToIncrease = [-2, -1, 0, 99];

const addOneResult = addOne(arrayToIncrease);
console.log(addOneResult);

function addOne(array) {
  const increasedArray2 = [];
  for (i = 0; i < array.length; i++) {
    let result = array[i] + 1;
    increasedArray2.push(result);
  }
  return increasedArray2; 
}

// i, double arrays

console.log('i:');
const arrayToIncrease2 = [1, 2, 3];
const numToAdd = 2;

const addNumResult = addNum(arrayToIncrease2, numToAdd);
console.log(addNumResult);

function addNum(array, num) {
  const increasedNum = [];
  for (let i = 0; i < array.length; i++) {
    let result = array[i] + num;
    increasedNum.push(result);
  }
  return increasedNum; 
}

// j 
console.log('j:');
const array1 = [1, 1, 2];
const array2 = [1, 1, 3];
const array3 = [1, 2, 3];
const array4 = [4, 5, 6];

const addArraysResult = addArrays(array1, array4);
console.log(addArraysResult);

function addArrays(array1, array2) {
  const addedTwoArrays = [];
  for (let i = 0; i < array1.length; i++) {
    let add = array1[i] + array2[i];
    addedTwoArrays.push(add);
  }
  return addedTwoArrays;
}

// k 
console.log('k:');
const countArray = [1, -3, 5, -10, 3, .9];
const countPostiveResult = countPositive(countArray);
console.log(countPostiveResult);
function countPositive(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count++;    
    }
  }
  return count; 
}












