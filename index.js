const inputDisplay = document.getElementById("input");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("result");
const numbers = document.querySelectorAll(".numbers div");
const operators = document.querySelectorAll(".row1 div");

let firstOperand = "";
let secondOperand = "";
let operator = "";

// Handle number button clicks
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    inputDisplay.textContent += number.textContent;
  });
});

// Handle operator button clicks
operators.forEach((op) => {
  op.addEventListener("click", () => {
    operator = op.textContent;
    firstOperand = inputDisplay.textContent;
    inputDisplay.textContent += operator;
  });
});

// Handle clear button click
clearButton.addEventListener("click", () => {
  inputDisplay.textContent = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
});

// Handle equal button click
equalButton.addEventListener("click", () => {
  secondOperand = inputDisplay.textContent.slice(
    firstOperand.length + 1
  );

  let result = eval(firstOperand + operator + secondOperand);
  inputDisplay.textContent = result;
});
