// Function to add characters to the display
function addToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to reset the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to perform addition
function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

// Function to perform subtraction
function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

// Function to perform multiplication
function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return parseFloat(a) / parseFloat(b);
}

// Function to perform percentage
function percentage(a, b) {
    return (parseFloat(a) * parseFloat(b)) / 100;
}

// Function to calculate the result
function calculate() {
    let displayValue = document.getElementById("display").value;
    let operands = displayValue.split(/[+\-*/%]/);
    let operator = displayValue.match(/[+\-*/%]/);
    if (operands.length !== 2 || !operator) {
        document.getElementById("display").value = "Error: Invalid expression";
        return;
    }
    let result;
    switch (operator[0]) {
        case '+':
            result = add(operands[0], operands[1]);
            break;
        case '-':
            result = subtract(operands[0], operands[1]);
            break;
        case '*':
            result = multiply(operands[0], operands[1]);
            break;
        case '/':
            result = divide(operands[0], operands[1]);
            break;
        case '%':
            result = percentage(operands[0], operands[1]);
            break;
        default:
            result = "Error: Invalid operator";
    }
    document.getElementById("display").value = result;
}






/*

// first create a string calculator to get numberA value ie, on pressing each digit
// you should get string value of that digit and add the string value of the next digit
// and add those strings to get a number of multiple place value.
// example '1' + '0' = '10' then convert it to number datatype
// example numberA = +numberA or something like that


// get inputA, then operator input, then inputB, then return command from user
// each input value will be stored in a variable
// depending on the operator input, call the calculation function
// assign the output return value into a variable
// print that value to user


const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const number3 = document.querySelector("#number3");
const number4 = document.querySelector("#number4");
const number5 = document.querySelector("#number5");
const number6 = document.querySelector("#number6");
const number7 = document.querySelector("#number7");
const number8 = document.querySelector("#number8");
const number9 = document.querySelector("#number9");
const number0 = document.querySelector("#number0");
const opAdd = document.querySelector("#operator+");
const opSub = document.querySelector("#operator-");
const opMul = document.querySelector("#operator*");
const opDiv = document.querySelector("#operator/");
const opMod = document.querySelector("#operator%");
const opEql = document.querySelector("#equal");

function recordValue() {
    return document.querySelector('#number').value
}

function getValue() {
    
}

document.getElementById('switch-design').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let sdValue = document.getElementById('switch-design').value;


    if (sdValue === '1') {
        window.location = './old-design.html';
    } else {
        window.location = './index.html';
    }
});


numberA.textContent = document.querySelector('#number').value;
numberA.textContent =+ document.querySelector('#number').value;
numberA.textContent =+ document.querySelector('#number').value;



let operator = document.querySelector('#operator').value;


function add(numberA, numberB){
    return result = numberA + numberB; 
}
function subtract(numberA, numberB){
    return result = numberA - numberB; 
}
function multiply(numberA, numberB){
    return result = numberA * numberB; 
}
function divide(numberA, numberB){
return result = numberA / numberB; 
}
function mod(numberA, numberB){
return result = numberA % numberB; 
}

document.querySelector('#equal').addEventListener('click', calculate());

function calculate(){

let operator = document.querySelector('.operator').value;

if ( operator === '+') {
    add();
}
else if ( operator === '-') {
    subtract();
}
else if ( operator === '*') {
    multiply();
}
else if ( operator === '/') {
    divide();
}
else if ( operator === '%') {
    modulus();
}
else (undefined);
}


function display() {
    let displayBox = document.querySelector('#display')
    displayBox.textContent = (`${aNum} ${bNum} ${cNum}`);

} 

function um() {
if (cNum === '+') {
    function sum() {
        display.textContent = (aNum+bNum);
        return sum;
    }
}
else if (cNum === '-') {
    display.textContent = (aNum-bNum);
}
else if (cNum === '*') {
    display.textContent = (aNum*bNum);
}else if (cNum === '/') {
    display.textContent = (aNum/bNum);
}
else {
    display = ('Please enter the correct operator');
}
}

*/