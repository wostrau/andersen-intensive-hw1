const firstTaskButton = document.getElementById('btn-task-1');
const secondTaskButton = document.getElementById('btn-task-2');

const isValidInput = (input) => input.trim().length && !isNaN(input);
const convertNumbers = (number1, number2) => number1.toString(number2);
const sumNumbers = (number1, number2) => number1 + number2;
const divisionNumbers = (number1, number2) => number1 / number2;

const firstTaskHandler = () => {
    const input1 = prompt('Enter first number:');
    const input2 = prompt('Enter second number:');

    if (!isValidInput(input1) || !isValidInput(input2) || +input2 === 0) {
        return console.log('Invalid enter!');
    }

    const conversionResult = convertNumbers(+input1, +input2);

    console.log(conversionResult);
};

const secondTaskHandler = () => {
    const input1 = prompt('Enter first number:');
    const input2 = prompt('Enter second number:');

    if (!isValidInput(input1) || !isValidInput(input2)) {
        return console.log('Invalid enter!');
    }

    const sumResult = sumNumbers(+input1, +input2);
    const divResult = divisionNumbers(+input1, +input2);

    console.log(`${sumResult}, ${divResult}`);
};

firstTaskButton.addEventListener('click', firstTaskHandler);
secondTaskButton.addEventListener('click', secondTaskHandler);

