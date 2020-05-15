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
    return operator(num1, num2);
}
//gets display and numbers from html file
//then saves number to variable and displays it
const display = document.getElementById('display');
const numbers = document.querySelectorAll('.number');
let currentNumber = 0;
function displayNumber(e) {
    currentNumber = e.target.textContent;
    display.textContent += `${currentNumber}`;
}
numbers.forEach(number => number.addEventListener('click', displayNumber))
//adds functionality for clear button
const clear = document.getElementById('clear');
function clearNumbers() {
    currentNumber = 0;
    display.textContent = '';
}
clear.addEventListener('click', clearNumbers);
//displays and stores operator
