function limesToCut(sentenceLength, words) {
  let currentLength = 0;

  let counter = 0;

  for (let i = 0; i < words.length; i++) {
    currentLength += words[i].length;

    if (currentLength <= sentenceLength) {
      counter++;
    } else {
      break;
    }
  }

  return counter;
}

console.log("Задача 2:");
console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']));
console.log("-------------------------------");