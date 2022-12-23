// Задание 6

const testData = [1, 2, 3, 4, 5];

const deleteMin = (arr) => {
  const min = Math.min(...arr)
  return arr.filter(item => item !== min)
}

console.log(deleteMin(testData))