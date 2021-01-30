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
    case '%':
      return percent(firstOperator, secondOperator);
    case '=':
      if (resultNumber !== undefined) {
        let returnValue = resultNumber;
        resultNumber = undefined;
        return returnValue;
      } else return firstNumber;
  }
}

function insertToDisplay(value) {
  if (operandIsPressed) {
    DISPLAY.textContent = value;
    operandIsPressed = false;
  } else {
    DISPLAY.textContent += value;
  }
}

function storeOperand(value) {
  operandIsPressed = true;
  if (resultNumber !== undefined) {
    firstNumber = resultNumber;
    resultNumber = undefined;
  } else if (firstNumberIsCurrent) {
    firstNumber = Number(DISPLAY.textContent);
    firstNumberIsCurrent = false;
  } else {
    secondNumber = Number(DISPLAY.textContent);
    resultNumber = operate(firstNumber, secondNumber, operand);
    firstNumber = secondNumber = undefined;
    DISPLAY.textContent = resultNumber;
  }
  operand = value;
}

function makeSingleAction(value) {
  switch (value) {
    case '+/-':
      DISPLAY.textContent = -Number(DISPLAY.textContent);
      return;
    case 'AC':
      DISPLAY.textContent = '';
      return;
  }
}

const DISPLAY = document.querySelector('#display');
const NUMBERS = document.querySelectorAll('.btn-number');
const MAIN_ACTIONS = document.querySelectorAll(
  '.btn-main-action, .btn-percent'
);
const SINGLE_ACTIONS = document.querySelectorAll('.btn-single-action');

let firstNumber;
let secondNumber;
let resultNumber;
let operand;

let firstNumberIsCurrent = true;
let operandIsPressed = false;

NUMBERS.forEach((button) => {
  button.addEventListener('click', (e) => insertToDisplay(button.value));
});

MAIN_ACTIONS.forEach((button) => {
  button.addEventListener('click', (e) => storeOperand(button.value));
});

SINGLE_ACTIONS.forEach((button) => {
  button.addEventListener('click', (e) => makeSingleAction(button.value));
});
