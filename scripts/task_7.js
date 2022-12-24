//Задание 7
const sum = (arr) => arr.reduce((acc, num) => acc + num, 0);

let x = [3, 7, 11],
  oldSum = sum(x),
  newSum,
  iter = 0,
  i,
  j;
do {
  if (iter != 0) oldSum = newSum;
  for (let i = x.length - 1; i > 0; i--) {
    let j = i - 1;
    if (x[i] > x[j]) {
      x[i] = x[i] - x[j];
    }
  }
  newSum = sum(x);
  iter++;
} while (newSum < oldSum);
console.log(x);
console.log(newSum);
