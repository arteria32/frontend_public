// Поиск всех уникальных значений в массиве

const getUniqueArray = (arr) => {
	return [...arr.filter((el, index) => index == arr.indexOf(el))]
}

console.log ('Task_1: ' + getUniqueArray([1, 2, 4, 2, 4, 4, 5, 8, 8, 'a', 'a']))
console.log ('Task_1: ' + getUniqueArray([1, -2, -2, 3, 4, -5, -6, -5]))