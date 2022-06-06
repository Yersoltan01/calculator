let calculator = new Calculator();
let buttons = document.querySelectorAll('button');
let currentInput = document.querySelector('.current-input');
let lastInput = document.querySelector('.last-input');
let input = '';
let newOperation = 1;
let equalPressed = 0;

function Calculator() {
  this.methods = {
    "-": (a, b) => Number.isInteger(a - b) ? a - b : (a - b).toFixed(3),
    "+": (a, b) => Number.isInteger(a + b) ? a + b : (a + b).toFixed(3),
    "*": (a, b) => Number.isInteger(a * b) ? a * b : (a * b).toFixed(3),
    "/": (a, b) => Number.isInteger(a / b) ? a / b : (a / b).toFixed(3),
  };

  this.calculate = function(str, operation) {
    if (operation == '-' && str[0] == '-') {
      let split = str.slice(1).split(`${operation}`);
      let a = (+split[0]) * -1;
      let op = operation;
      let b = +split[1];
      return this.methods[op](a, b);
    }
    else {
      let split = str.split(`${operation}`);
      let a = +split[0];
      let op = operation;
      let b = +split[1];
      if (operation == '/' && b == 0) {
        alert("Error. Cannot divide by 0");
        document. location. reload();
      }
      return this.methods[op](a, b);
    }
  }
}

function updateCurrentInput(inputValue) {
  if (equalPressed == 1) {
    return;
  }
  if (newOperation == 1) {
    input = '';
    newOperation = 0;
  }
  if (inputValue == '.' && currentInput.textContent == '') {
      input = '0';
  }
  input += inputValue;
  currentInput.textContent = input;
}

function updateLastInput(inputValue) {
  if (inputValue == '=' && currentInput.textContent != '' && lastInput.textContent != '') {
    let calculation = lastInput.textContent.concat(currentInput.textContent);
    lastInput.textContent = calculator.calculate(calculation, lastInput.textContent[lastInput.textContent.length - 1]);
    currentInput.textContent = '';
    equalPressed = 1;
    newOperation = 1;
  }
  if (equalPressed == 1 && inputValue != '=') {
    lastInput.textContent += inputValue;
    equalPressed = 0;
  }
  if (currentInput.textContent == '' && (lastInput.textContent[lastInput.textContent.length - 1] == '-' || lastInput.textContent[lastInput.textContent.length - 1] == '+' || lastInput.textContent[lastInput.textContent.length - 1] == '*' || lastInput.textContent[lastInput.textContent.length - 1] == '/') && inputValue != '=') {
    lastInput.textContent = lastInput.textContent.slice(0, lastInput.textContent.length - 1) + inputValue;
  } 
  if(lastInput.textContent != '' && currentInput.textContent != '') {
    let calculation = lastInput.textContent.concat(currentInput.textContent);
    lastInput.textContent = calculator.calculate(calculation, lastInput.textContent[lastInput.textContent.length - 1]) + inputValue; 
    currentInput.textContent = '';
    // console.log(lastInput.textContent)
  }
  if(lastInput.textContent == '' && currentInput.textContent != '' && inputValue != '=') {
      lastInput.textContent = currentInput.textContent + inputValue;
      currentInput.textContent = '';
  }
  if(inputValue != '='){
    newOperation = 1;
  }
}

function clear() {
  input = '';
  currentInput.textContent = '';
  lastInput.textContent = '';
  newOperation = 1;
  equalPressed = 0;
}
function deleteLast() {
    input = input.slice(0, input.length - 1);
    currentInput.textContent = currentInput.textContent.slice(0, currentInput.textContent.length - 1);
}

buttons.item(0).addEventListener('click', () => {
  clear();
});
buttons.item(1).addEventListener('click', () => {
  deleteLast();
});
buttons.item(2).addEventListener('click', () => {
  updateCurrentInput(buttons.item(2).value);
});
buttons.item(3).addEventListener('click', () => {
  updateCurrentInput(buttons.item(3).value);
});
buttons.item(4).addEventListener('click', () => {
  updateCurrentInput(buttons.item(4).value);
});
buttons.item(5).addEventListener('click', () => {
  updateLastInput(buttons.item(5).value);
});
buttons.item(6).addEventListener('click', () => {
  updateCurrentInput(buttons.item(6).value);
});
buttons.item(7).addEventListener('click', () => {
  updateCurrentInput(buttons.item(7).value);
});
buttons.item(8).addEventListener('click', () => {
  updateCurrentInput(buttons.item(8).value);
});
buttons.item(9).addEventListener('click', () => {
  updateLastInput(buttons.item(9).value);});
buttons.item(10).addEventListener('click', () => {
  updateCurrentInput(buttons.item(10).value);
});
buttons.item(11).addEventListener('click', () => {
  updateCurrentInput(buttons.item(11).value);
});
buttons.item(12).addEventListener('click', () => {
  updateCurrentInput(buttons.item(12).value);
});
buttons.item(13).addEventListener('click', () => {
  updateLastInput(buttons.item(13).value);
});
buttons.item(14).addEventListener('click', () => {
  updateCurrentInput(buttons.item(14).value);
});
buttons.item(15).addEventListener('click', () => {
  if (!currentInput.textContent.includes(buttons.item(15).value)) {
    updateCurrentInput(buttons.item(15).value);
  }
});
buttons.item(16).addEventListener('click', () => {
  updateLastInput(buttons.item(16).value);
});
buttons.item(17).addEventListener('click', () => {
  updateLastInput(buttons.item(17).value);
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Backspace') {
    deleteLast();
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Digit1') {
    updateCurrentInput(buttons.item(10).value);
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Digit2') {
    updateCurrentInput(buttons.item(11).value);
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Digit3') {
    updateCurrentInput(buttons.item(10).value);
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Digit4') {
    updateCurrentInput(buttons.item(6).value); 
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Digit5') {
   updateCurrentInput(buttons.item(7).value);
    
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Digit6') {
    updateCurrentInput(buttons.item(8).value);
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Digit7') {
    updateCurrentInput(buttons.item(2).value);
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Digit8') {
    updateCurrentInput(buttons.item(3).value);
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Digit9') {
    updateCurrentInput(buttons.item(4).value);
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Digit0') {
    updateCurrentInput(buttons.item(10).value);
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Period') {
    if (!currentInput.textContent.includes(buttons.item(15).value)) {
      updateCurrentInput(buttons.item(15).value);
    }
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Slash') {
    updateLastInput(buttons.item(5).value);
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'NumpadMultiply') {
    updateLastInput(buttons.item(9).value);
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'NumpadSubtract') {
    updateLastInput(buttons.item(13).value);
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'NumpadAdd') {
    updateLastInput(buttons.item(16).value);
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'Equal' || event.code == 'Enter') {
    updateLastInput(buttons.item(17).value);
  }
});