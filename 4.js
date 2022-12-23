// Задание 4

const cards = {
  1: 'Ace',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: 'Jack',
  12: 'Queen',
  13: 'King'
}

const testData = [5, 11, 12, 13, 10];

const getConvertedCardName = (arr) => arr.map(item => cards[item])

console.log('getConvertedCardName', getConvertedCardName(testData))
