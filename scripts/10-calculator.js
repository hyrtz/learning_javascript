let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

function displayCalculation() {
  document.querySelector('.js-display-calculation').innerHTML = calculation;
}

function updateCalculation(operator) {
  if (true) {
    calculation += operator;
    document.querySelector('.js-display-calculation').innerHTML = calculation;
  } 

  localStorage.setItem('calculation', JSON.stringify(calculation));
}