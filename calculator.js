let displayValue = '0';  // Initial value on the display
let currentOperator = '';  // To store the current operator

// Function to update the display
function updateDisplay(value) {
  const display = document.getElementById('display');
  display.textContent = value;
}

// Function to append symbols/numbers to the display
function appendSymbol(symbol) {
  if (displayValue === '0') {
    displayValue = '';  // Clear initial zero if any number is entered
  }
  displayValue += symbol;
  updateDisplay(displayValue);
}

// Function to clear the display
function clearDisplay() {
  displayValue = '0';
  updateDisplay(displayValue);
}

// Function to calculate the result
function calculate() {
  displayValue = eval(displayValue);  // Using eval for simplicity (consider better parsing in production)
  updateDisplay(displayValue);
}

// Function to calculate square of a number
function square() {
  displayValue = Math.pow(eval(displayValue), 2);
  updateDisplay(displayValue);
}
