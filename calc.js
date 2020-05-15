//functions for performing operations
function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return num1/num2;
}

function operate(num1, num2, operator) {
    if (operator === 'multiply') {
        return num1*num2;
    }
    else if (operator === 'divide') {
        return num1/num2;
    }
    else if (operator === 'subtract') {
        return num1-num2;
    }
    else if (operator === 'add'){
        return num1+num2;
    }}
//gets display and numbers from html file
//then saves number to variable and displays it
const display = document.getElementById('display');
const numbers = document.querySelectorAll('.number');
let operation = [];
let currentNumber = 0;
function displayNumber(e) {
    negative.disabled = true;
    currentNumber = e.target.textContent;
    display.textContent += `${currentNumber}`;
}
numbers.forEach(number => number.addEventListener('click', displayNumber))
//lets numbers be negative
const negative = document.getElementById('negative');
function displayNegative() {
    display.textContent += '-';
    negative.disabled = true;
}
negative.addEventListener('click', displayNegative);
//disabls decimal button after one click
const decimal = document.getElementById('decimal');
function disable(e) {
    e.target.disabled = true;
}
decimal.addEventListener('click', disable);
//adds functionality for clear button
const clear = document.getElementById('clear');
function clearNumbers() {
    currentNumber = 0;
    currentOperator = 0;
    operation = []
    decimal.disabled = false;
    negative.disabled = false;
    display.textContent = '';
}
clear.addEventListener('click', clearNumbers);
//displays operator and stores last number and operator in array
let currentOperator = ''
const operators = document.querySelectorAll('.operator');
function displayOperator(e) {
    negative.disabled = false;
    decimal.disabled = false;
    currentOperator = e.target.id;
    let lastNumber = display.textContent.match(/[0-9.-]+$/g).toString();
    console.log(lastNumber);
    operation.push(lastNumber);
    operation.push(currentOperator);
    display.textContent += `${e.target.textContent}`;
}
operators.forEach(operator => operator.addEventListener('click', displayOperator));
//displays solution to operation
let operated = 0;
let equals = document.getElementById('equals');
function solution() {
    let lastNumber = display.textContent.match(/[0-9.-]+$/g).toString();
    operation.push(lastNumber);
    while (operation.length > 1) {
    let operationIndex = operation.findIndex(value => (value == 'divide'|value == 'multiply'));
    if (operationIndex > 0) {
        operated = operate(operation[operationIndex - 1], operation[operationIndex + 1], operation[operationIndex]);
        operation.splice(operationIndex-1, 3, operated);
    }
    operationIndex = operation.findIndex(value => (value === 'add' | value === 'subtract'));
    if (operationIndex > 0) {
        operated = operate(parseFloat(operation[operationIndex - 1]), parseFloat(operation[operationIndex + 1]), operation[operationIndex]);
        operation.splice(operationIndex-1, 3, operated);
    }
    }
    display.textContent = operation[0];
    if (/\./.test(display.textContent)) {
        decimal.disabled = true;
    }
    else {
        decimal.disabled = false;
    }
    operation = []
}
equals.addEventListener('click', solution);