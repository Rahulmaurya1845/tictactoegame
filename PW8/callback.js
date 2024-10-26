function multiplyWithCallback(arr, callback) {
  const result = arr.map((num) => num * 2);
  callback(result);
}
