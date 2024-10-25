function getProcessingFee(paymentMethod) {
  let fee;

  switch (paymentMethod) {
    case "credit":
      fee = "2%";
      break;
    case "debit":
      fee = "1.5%";
      break;
    case "paypal":
      fee = "3%";
      break;
    default:
      fee = "Invalid payment method";
  }

  return fee;
}

const paymentMethod = prompt(
  "Enter payment method (credit, debit, or paypal):"
);
const processingFee = getProcessingFee(paymentMethod);

console.log(`Processing fee for ${paymentMethod}: ${processingFee}`);
