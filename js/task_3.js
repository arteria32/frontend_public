// Количество нечетных чисел в массиве

const getOddNumberFromArray = (arr) => {
	result = arr.reduce((sum, currentValue, currentIndex, array) => {
		if (currentValue % 2 !== 0 ) {sum += 1}
		return sum
	}, 0)
	return result
}

console.log('task_3: ' + getOddNumberFromArray([1, 2, 3, 1, 5, 6]))
console.log('task_3: ' + getOddNumberFromArray([]))
