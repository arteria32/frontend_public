// Преобразить порядковый номер игральный карты в ее роль

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

const getCardName = (arr) => {
	if (arr.length == 0) {return 'Enter card numbers!'}
	return arr.map(item => cards[item])
}

console.log('task_4: ', getCardName([5, 11, 12, 13, 10]))
console.log('task_4: ', getCardName([]))