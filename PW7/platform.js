class PaymentProcessor {
  processPayment(amount, cardNumber, expirationDate) {
    try {
      if (typeof amount !== "number" || amount <= 0) {
        throw new Error("Invalid payment amount.");
      }
      if (!cardNumber || !this.isValidCardNumber(cardNumber)) {
        throw new Error("Invalid card number.");
      }
      if (!expirationDate || this.isExpired(expirationDate)) {
        throw new Error("Invalid expiration date.");
      }
      console.log("Payment processed successfully.");
    } catch (error) {
      this.handleError(error);
    }
  }

  isValidCardNumber(cardNumber) {
    const regex = /^\d{16}$/;
    return regex.test(cardNumber);
  }

  isExpired(expirationDate) {
    const today = new Date();
    const expDate = new Date(expirationDate);
    return expDate < today;
  }

  handleError(error) {
    console.error(`Error: ${error.message}`);
  }
}

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(100, "1234567812345678", "2025-12-31");
paymentProcessor.processPayment(-50, "1234567812345678", "2025-12-31");
paymentProcessor.processPayment(100, "", "2025-12-31");
paymentProcessor.processPayment(100, "1234567812345678", "2020-01-01");
