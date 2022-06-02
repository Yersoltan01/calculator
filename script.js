let calculator = new Calculator();
let buttons = document.querySelectorAll('button');
let currentInput = document.querySelector('.current-input');
let lastInput = document.querySelector('.last-input');

// buttons.item(0).addEventListener('click', () => {
//     console.log(buttons.item(0));
// });
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

