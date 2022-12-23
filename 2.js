// Задание 2

const limesToCut = (length, words) => {
  let result = 0
  words.reduce((sum, item) => {
    sum += item.length
    if (sum <= length) {
      ++result
    }
    return sum
  }, 0)
  return result
}

console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));
