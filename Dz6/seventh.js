// Тестовые данные:
// [6, 9, 21]
// Процесс решения:
// [6, 9, 12] #-> X[2] = 21 - 9
// [6, 9, 6] #-> X[2] = 12 - 6
// [6, 3, 6] #-> X[1] = 9 - 6
// [6, 3, 3] #-> X[2] = 6 - 3
// [3, 3, 3] #-> X[1] = 6 - 3
// Ожидаемые результат
// 9

const minSum = (array) => {
  array.sort((a, b) => a - b);
  for (let i = 1; i < array.length; i++) {
    while (array[i - 1] < array[i]) {
      array[i] = array[i] - array[i - 1];
    }
    while (array[i - 1] > array[i]) {
      array[i - 1] = array[i - 1] - array[i];
    }
  }

  let minSum = 0

  for( let i of array){
    minSum = minSum + i
  }

  return minSum
};


alert(minSum([6, 9, 21]))
