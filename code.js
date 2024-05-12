// Variables para los botones de la calculadora

const display = document.getElementById('display');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');
const clearButton = document.getElementById('clear');
const zeroButton = document.getElementById('zero');
const equalsButton = document.getElementById('equals');
const operators = ['+', '*', '/'];
const errors = ['Error', 'Infinity', 'NaN', 'undefined'];

// Listeners para los botones de la calculadora

addButton.addEventListener('click', () => validate(addButton.innerText));
subtractButton.addEventListener('click', () => validate(subtractButton.innerText));
multiplyButton.addEventListener('click', () => validate(multiplyButton.innerText));
divideButton.addEventListener('click', () => validate(divideButton.innerText));
oneButton.addEventListener('click', () => validate(oneButton.innerText));
twoButton.addEventListener('click', () => validate(twoButton.innerText));
threeButton.addEventListener('click', () => validate(threeButton.innerText));
fourButton.addEventListener('click', () => validate(fourButton.innerText));
fiveButton.addEventListener('click', () => validate(fiveButton.innerText));
sixButton.addEventListener('click', () => validate(sixButton.innerText));
sevenButton.addEventListener('click', () => validate(sevenButton.innerText));
eightButton.addEventListener('click', () => validate(eightButton.innerText));
nineButton.addEventListener('click', () => validate(nineButton.innerText));
clearButton.addEventListener('click', () => display.value = '');
zeroButton.addEventListener('click', () => validate(zeroButton.innerText));
equalsButton.addEventListener('click', () => calc());

function calc() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function validate(i) {

    if (errors.includes(display.value)) {
        display.value = '';
    }

    let lastChar = display.value[display.value.length - 1];
    if (operators.includes(i) && operators.includes(lastChar)) {
        display.value = display.value.slice(0, display.value.length - 1) + i;
    } else {
        printOnDisplay(i)
    }    
}

function printOnDisplay(caracter) {
    display.value += caracter;
}


