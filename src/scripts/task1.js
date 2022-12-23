function getUniqueElements(arr) {
  return [...new Set(arr)];
}

const firstTestCase = [1, 2, 4, 2, 4, 4, 5];
const secondTestCase = [1, 2, 3, 4, 5];
const thirdTestCase = [1, -2, -2, 3, 4, -5, -6, -5];

console.log("Задача 1:");
console.log(getUniqueElements(firstTestCase));
console.log(getUniqueElements(secondTestCase));
console.log(getUniqueElements(thirdTestCase));
console.log("-------------------------------");