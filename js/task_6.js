// Удалить минимум

deleteMinFromArray = (arr) => {
	const min = Math.min.apply(null, arr);
    const pos = arr.indexOf(min);
    return arr.slice(0, pos).concat(arr.slice(pos + 1));
}

console.log('task_6: ' + deleteMinFromArray([1,2,3,4,5]))
console.log('task_6: ' + deleteMinFromArray([1,2,3,4,5,0]))
console.log('task_6: ' + deleteMinFromArray([1,2,3,4,5,0,-10]))
