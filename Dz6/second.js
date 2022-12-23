// Тестовые данные:
// limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);
// Ожидаемый результат:
// 4

const limesToCut = (characters = 0, array) => {
  let stopCount = 0;
  let count = 0;
  array.sort((a, b) => a.length - b.length);

  for (let i in array) {
    if (stopCount < characters) {
      stopCount = stopCount + array[i].length;
      count = count + 1;
    }
  }
  if (stopCount > characters) {
    count = count - 1;
  }

  return count
};

alert(limesToCut(25, ["small", "small", "large", "medium", "small"]))
