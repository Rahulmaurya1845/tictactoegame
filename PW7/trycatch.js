class ShoppingCart {
  constructor() {
    this.cart = [];
  }

  addProduct(product) {
    try {
      if (!product || !product.id || !product.price) {
        throw new Error("Invalid product");
      }
      this.cart.push(product);
    } catch (error) {
      this.handleError(error);
    }
  }

  removeProduct(productId) {
    try {
      const index = this.cart.findIndex((item) => item.id === productId);
      if (index === -1) {
        throw new Error("Product not found in cart");
      }
      this.cart.splice(index, 1);
    } catch (error) {
      this.handleError(error);
    }
  }

  checkout() {
    try {
      if (this.cart.length === 0) {
        throw new Error("Cart is empty");
      }
      const totalAmount = this.cart.reduce(
        (total, product) => total + product.price,
        0
      );
      this.processPayment(totalAmount);
    } catch (error) {
      this.handleError(error);
    }
  }

  processPayment(amount) {
    try {
      if (amount <= 0) {
        throw new Error("Invalid payment amount");
      }
      // Simulate payment processing
      console.log(`Payment of $${amount} processed successfully.`);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    console.error(`Error: ${error.message}`);
  }
}

const cart = new ShoppingCart();
cart.addProduct({ id: 1, price: 100 });
cart.addProduct(null);
cart.removeProduct(2);
cart.checkout();
cart.removeProduct(1);
cart.checkout();
cart.processPayment(-50);
