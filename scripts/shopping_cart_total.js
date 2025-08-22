
const array = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banna", price: 5, quantity: 5 },
  { name: "milk", price: 20, quantity: 1 },
  { name: "berry", price: 10, quantity: 1 },
];

console.log(cartTotal(array));

function cartTotal(array) {
  let totalPrice = 0;

  for (let i = 0; i < array.length; i++) {
    // to access the value -> arrayName[i].propertyName
    let price = array[i].price * array[i].quantity; 
    totalPrice += price;
  }
  return totalPrice;
}