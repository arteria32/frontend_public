// Задание 3
let arr = [1, 2, 3, 1, 5, 6];
let counter = 0;
for (let num of arr) {
  if (num % 2 !== 0) counter++;
}
console.log(counter);
