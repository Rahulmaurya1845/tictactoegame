let num = parseInt(prompt("Enter the number"));
if (num > 90) {
  console.log("A grades");
} else if (num < 90 && num > 70) {
  console.log("B grades");
} else if (num < 70 && num > 50) {
  console.log("C grades");
} else {
  console.log("F grades");
}
