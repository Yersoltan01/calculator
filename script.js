let calculator = new Calculator();
let buttons = document.querySelectorAll('button');
let currentInput = document.querySelector('.current-input');
let lastInput = document.querySelector('.last-input');
let input = '';
let newOperation = 1;

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  this.calculate = function(str) {
    let split = str.split(' '),
    a = +split[0],
    op = split[1],
    b = +split[2]
    return this.methods[op](a, b);
  }
}

function updateCurrentInput(inputValue) {
  if (newOperation == 1) {
    input = '';
    newOperation = 0;
  }
  input += inputValue;
  currentInput.textContent = input;
}

function updateLastInput(inputValue) {
  lastInput.textContent = currentInput.textContent + inputValue;
  newOperation = 1;
}

function clear() {
  input = '';
  currentInput.textContent = '';
  lastInput.textContent = '';
  newOperation = 1;
}
function deleteLast() {
    input = input.slice(0, input.length - 1);
    // console.log(input);
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
  updateCurrentInput(buttons.item(7).value);});
buttons.item(8).addEventListener('click', () => {
  updateCurrentInput(buttons.item(8).value);
});
buttons.item(9).addEventListener('click', () => {
  updateLastInput(buttons.item(9).value);});
buttons.item(10).addEventListener('click', () => {
  updateCurrentInput(buttons.item(10).value);});
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
});
buttons.item(16).addEventListener('click', () => {
  updateLastInput(buttons.item(16).value);
});
buttons.item(17).addEventListener('click', () => {
});


/*
    если ласт оперейтион есть то при новой операции запускать калькулейт 
*/