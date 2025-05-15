let firstNumber = '';
let secondNumber = '';
let operator = '';
let resultDisplayed = false;

const display = document.getElementById('display');

function pressNumber(num) {
  if (resultDisplayed) {
    clearDisplay();
  }

  if (operator === '') {
    firstNumber += num;
    display.innerText = firstNumber;
  } else {
    secondNumber += num;
    display.innerText = secondNumber;
  }
}

function setOperator(op) {
  if (firstNumber === '') return;
  operator = op;
  resultDisplayed = false;
}

function calculate() {
  let result = 0;
  const n1 = Number(firstNumber);
  const n2 = Number(secondNumber);

  if (operator === '+') result = n1 + n2;
  else if (operator === '-') result = n1 - n2;
  else if (operator === '*') result = n1 * n2;
  else if (operator === '/') result = n2 !== 0 ? n1 / n2 : 'Error';

  display.innerText = result;
  // Reset for next calculation
  firstNumber = result.toString();
  secondNumber = '';
  operator = '';
  resultDisplayed = true;
}

function clearDisplay() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  resultDisplayed = false;
  display.innerText = '0';
}
 