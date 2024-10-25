const number = parseInt(prompt("Enter a positive integer:"));

let sum = 0;
let i = 1;

do {
  sum += i;
  i++;
} while (i <= number);

console.log(`The sum of numbers from 1 to ${number} is: ${sum}`);
