function sumAsync(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}
