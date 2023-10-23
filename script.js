let currentInput = '0';
let operator = '';
let prevInput = '';

function appendNumber(number) {
    if (currentInput === '0' || currentInput === 'Error') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== '') {
        calculate();
    }
    prevInput = currentInput;
    operator = op;
    currentInput = '0';
}

function calculate() {
    if (operator === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(prevInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(prevInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(prevInput) * parseFloat(currentInput);
            break;
        case '/':
            if (currentInput === '0') {
                currentInput = 'Error';
                updateDisplay();
                return;
            }
            result = parseFloat(prevInput) / parseFloat(currentInput);
            break;
    }
    currentInput = result.toString();
    operator = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    prevInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}
