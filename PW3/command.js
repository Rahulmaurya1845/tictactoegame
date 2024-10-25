const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        rl.question('Enter operation (+, -, *, /): ', (operation) => {
            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);
            let result;

            switch (operation) {
                case '+':
                    result = number1 + number2;
                    break;
                case '-':
                    result = number1 - number2;
                    break;
                case '*':
                    result = number1 * number2;
                    break;
                case '/':
                    result = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
                    break;
                default:
                    result = 'Invalid operation';
            }

            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});