//Минимально возможная сумма

function minSum(arr) {   
    arr.sort((a,b) => b - a)

	for (let i = 0; i < arr.length; i++) {
		while (arr[i] > arr[i + 1]) {
			arr[i] -= arr[i + 1]
		}
		while (arr[i] > arr[i - 1]) {
			arr[i] -= arr[i - 1]
		}
	}
	return arr.reduce((sum, current) => sum + current)
}

console.log('task_7: ' + minSum([6, 9, 21]))
console.log('task_7: ' + minSum([6, 9, 9, 21]))
console.log('task_7: ' + minSum([6, 6, 9, 21, 21, 24, 27]))
