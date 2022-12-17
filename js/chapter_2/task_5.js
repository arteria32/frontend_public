//task_5.1
quiz = () => {
	let result = prompt('Какое официальное название JavaScript?')

	if (result == 'ECMAscriprt') {
		alert ('Верно!')
	} else {
		alert ('Не знаете? ECMAsript')
	}
}
//task_5.2
showNumberSign = () => {
	let number = prompt('Введите число')
	number = +number
	
	if (number < 0) {
		alert (-1) 
	} else if (number > 0) {
		alert (1)
	} else if (number == 0) {
		alert(0)
	}
}

//task_5.3
let result;
a = 2;
b = 3;

result = (a + b < 4) ? result = 'Мало' : result = 'Много'
console.log('task_5.3: ' + result)

//task_5.4
let message;
let login = 'Директор'

login == 'Сотрудник' ?
	message = 'Привет' :
login == 'Директор' ?
	message = 'Здравствуйте' :
login == '' ?
	message = 'Нет логина' :
	message = ''

console.log (message)
