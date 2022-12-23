// Задание 3

const testData = [1, 2, 3, 1, 5, 6];

const odds = (arr) => {
  const filteredArray = arr.filter((item) => {
    if (item % 2 === 1) {
      return item
    }
  }) 
  return filteredArray.length
}

console.log(odds(testData))
