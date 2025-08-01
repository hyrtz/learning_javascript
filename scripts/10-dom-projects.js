
// enter key 
function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotalShipping();
  }
}

// shipping calculator 
function calculateTotalShipping() {
  const inputElement = document.querySelector('.js-cost-input');

  let cost = Number(inputElement.value);  

  if (cost >= 0 && cost < 40) {
    cost = cost + 10;
    document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
  } else if (cost >= 40) {
    document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
  } else {
    document.querySelector('.js-total-cost')
      .innerHTML = `Error: Cost cannot be less than $0.`;
  }
}

// yt subscribe
function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-bttn');
  if (buttonElement.innerText === 'Subscribe') {  // .innerText -> gets the actual text 
    buttonElement.innerHTML = 'Subscribed'; 
    buttonElement.classList.add('is-subscribed'); // // adds new class
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}
