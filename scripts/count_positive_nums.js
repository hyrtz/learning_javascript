

const array = [1, -3, 5, -10, 3, 0]

console.log(countPositive(array));

function countPositive(array) {
  let positiveNums = 0; 
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveNums++;
    }
  }
  return positiveNums; 
}