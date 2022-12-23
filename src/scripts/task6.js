function removeMinimum(arr) {
  const min = Math.min(...arr);

  return arr.filter((elem) => elem !== min);
}

console.log("Задача 6:");
console.log(removeMinimum([1, 2, 3, 4, 5]));
console.log("-------------------------------");