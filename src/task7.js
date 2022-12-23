// Задание 7*. Минимально возможная сумма
function checkAllEqual(data) {
  return !data.some(function (elem) {
    return elem !== data[0];
  });
}

function minSum(X) {
  while (!checkAllEqual(X)) {
    for (let i in X) {
      for (let j in X) {
        if (X[i] > X[j]) {
          X[i] = X[i] - X[j];
        }
      }
    }
  }
  return X.reduce((sum, elem) => (sum += elem), 0);
}

let test = [6, 9, 21];
console.log(minSum(test));
