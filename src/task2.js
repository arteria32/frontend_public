// Задание 2. Определить сколько вмещается слов в
// предложение
function limesToCut(symbolsLimit, data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (
      result.reduce((partialSum, a) => partialSum + a.length, 0) +
        data[i].length <=
      symbolsLimit
    ) {
      result.push(data[i]);
    }
  }
  return result.length;
}

console.log(limesToCut(25, ["small", "small", "large", "medium", "small"]));
