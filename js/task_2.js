// Определить сколько вмещается слов в предложение

const limesToCut = (limiter, arr) => {
	arr = arr
		.filter((el) => el.length !== 0)
		.map((el, index, arr) => index == arr.length - 1 ? el.length : el.length + 1)
		.sort((a, b) => a - b)

	let sum = 0
	let counter = 0

	for (let i = 0; ((i < arr.length) && (sum < limiter)); i++) {
		if (sum + arr[i] > limiter) return counter
		sum += arr[i]
		counter += 1
	}
	return counter
}

console.log('task_2: ' + limesToCut(25, ['small', 'smallz', 'large', 'medium', 'small']))
console.log('task_2: ' + limesToCut(25, ['', '', '']))
console.log('task_2: ' + limesToCut(2, ['asdasdasd']))
console.log('task_2: ' + limesToCut(2, ['a']))

