const firstTaskButton = document.getElementById('btn-task-1');
const secondTaskButton = document.getElementById('btn-task-2');

const numberValidation = number => !isNaN(number) && number !== null && number !== '';
const convertNumbers = (number1, number2) => number1.toString(number2);
const sumNumbers = (number1, number2) => number1 + number2;
const divisionNumbers = (number1, number2) => number1 / number2;

const firstTaskHandler = () => {
    const input1 = +prompt('Enter first number:');
    const input2 = +prompt('Enter second number:');

    if (!numberValidation(input1) || !numberValidation(input2) || input2 === 0) {
        console.log('Invalid enter!');
        return;
    }

    const conversionResult = convertNumbers(input1, input2);
    console.log(conversionResult);
};

const secondTaskHandler = () => {
    const input1 = +prompt('Enter first number:');
    const input2 = +prompt('Enter second number:');

    if (!numberValidation(input1) || !numberValidation(input2)) {
        console.log('Invalid enter!');
        return;
    }

    const sumResult = sumNumbers(input1, input2);
    const divResult = divisionNumbers(input1, input2);
    console.log(`${sumResult}, ${divResult}`);
};

firstTaskButton.addEventListener('click', firstTaskHandler);
secondTaskButton.addEventListener('click', secondTaskHandler);

