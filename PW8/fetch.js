function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully.");
    }, 2000);
  });
}
