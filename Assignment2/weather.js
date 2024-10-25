const temperature = parseFloat(prompt("Enter the current temperature in °C:"));
const weatherCondition = temperature > 30 ? "Hot" : "Moderate";

console.log(`The weather condition is: ${weatherCondition}`);
