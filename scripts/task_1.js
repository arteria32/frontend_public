//Задание 1
let arr1 = [1, 2, 4, 2, 4, 4, 5],
  arr2 = [1, 2, 3, 4, 5],
  arr3 = [1, -2, -2, 3, 4, -5, -6, -5];

function unique(arr) {
  let result = [];
  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(unique(arr1));
console.log(unique(arr2));
console.log(unique(arr3));
