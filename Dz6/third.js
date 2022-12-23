// Тестовые данные:
// [1, 2, 3, 1, 5, 6],
// Ожидаемый результат:
// 4


arr = [1, 2, 3, 1, 5, 6]
function countOfOdd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2 !== 0) {
       count++;
     }
  }
  return count
}

alert(countOfOdd(arr))