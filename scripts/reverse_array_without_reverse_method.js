
const array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));

function reverseArray(array) {
  let reverse = [];
  const lastIndex = array.length - 1
  for (let i = lastIndex; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}
