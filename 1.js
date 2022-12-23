// Задание 1

const firstArray = [1, 2, 4, 2, 4, 4, 5];
const secondArray = [1, 2, 3, 4, 5];
const thirdArray = [1, -2, -2, 3, 4, -5, -6, -5];

const getUnique = (arr) => {
  let result = [];
  arr.forEach((param) => {
    if (!result.includes(param)) {
      result = [...result, param]
    }
  })
  
  return result
}

console.log('getUnique firstArray', getUnique(firstArray))
console.log('getUnique secondArray', getUnique(secondArray))
console.log('getUnique thirdArray', getUnique(thirdArray))

