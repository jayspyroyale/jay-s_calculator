// calculator.js

let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function calculate() {
  try {
    const result = new Function('return ' + displayValue)();
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}


function add1() {
  displayValue += "1";
  updateDisplay();
}

function clearEntry() {
  displayValue = ""; // Replace the content with an empty string
  updateDisplay();
}

function clearAll() {
  displayValue = "";
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.querySelector(".display");
  displayElement.textContent = displayValue;
  displayElement.scrollLeft = displayElement.scrollWidth; // Scroll to the end
}

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  window.location.href = 'login.html';
}