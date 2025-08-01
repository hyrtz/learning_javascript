
// gaming button 
function clickButton(selector) {
  const buttonElement = document.querySelector(selector);
  
  if (!buttonElement.classList.contains('is-toggled')) {

    // Before turning this button ON, check if there's
    // already a button that's turned ON and turn it OFF.
    turnOffPreviousButton();

    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const prevButton = document.querySelector('.is-toggled');
    if (prevButton) {
      prevButton.classList.remove('is-toggled');
    }
}


// add to cart 
const buttonElement = document.querySelector('.js-button');
console.log(buttonElement.innerHTML);
console.log(buttonElement.classList.contains('js-button'));



