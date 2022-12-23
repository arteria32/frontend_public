function getOddElementsCount(arr) {
  return arr.filter((elem) => elem % 2 !== 0).length;
}

console.log("Задача 3:");
console.log(getOddElementsCount([1, 2, 3, 1, 5, 6]));
console.log("-------------------------------");