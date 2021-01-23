function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function changeSign(a) {
  return -a;
}

function percent(a, b) {
  return a * (b / 100);
}

function operate(firstOperator, secondOperator, operator) {
  switch (operator) {
    case '+':
      return add(firstOperator, secondOperator);
    case '-':
      return substract(firstOperator, secondOperator);
    case 'x':
      return multiply(firstOperator, secondOperator);
    case '/':
      return divide(firstOperator, secondOperator);
    case '+/-':
      if (!secondOperator) return changeSign(firstOperator);
      return changeSign(secondOperator);
    case '%':
      return percent(firstOperator, secondOperator);
  }
}

function insertToDisplay(value) {
  DISPLAY.textContent += value;
}

function storeOperand(value) {
  if (firstNumber == undefined) {
    firstNumber = Number(DISPLAY.textContent);
    DISPLAY.textContent = '';
  } else {
    secondNumber = Number(DISPLAY.textContent);
    firstNumber = operate(firstNumber, secondNumber, operand);
    secondNumber = undefined;
    DISPLAY.textContent = firstNumber;
  }
  console.log(firstNumber);
  console.log(secondNumber);
  operand = value;
}

const DISPLAY = document.querySelector('#display');
const BUTTONS_NUMBER = document.querySelectorAll('.btn-number');
const BUTTONS_ACTION = document.querySelectorAll('.btn-action');

let firstNumber;
let secondNumber;
let operand;

BUTTONS_NUMBER.forEach((button) => {
  button.addEventListener('click', (e) => insertToDisplay(button.value));
});

BUTTONS_ACTION.forEach((button) => {
  button.addEventListener('click', (e) => storeOperand(button.value));
});
