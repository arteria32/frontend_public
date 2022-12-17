//task_6.1
let age = 14;

if (age >= 14 && age <=90) {
	console.log('task_6.1: ' + true);
} else {
	console.log('task_6.1: ' + false)
}

//task_6.2

if (!(age >= 14 && age <=90)) {
	console.log('task_6.2: ' + true);
} else {
	console.log('task_6.2: ' + false)
}

if (age <= 14 && age >= 90) {
	console.log('task_6.2.1: ' + true);
} else {
	console.log('task_6.2.1: ' + false)
}

passwordCheck = () => {
	login = prompt('Кто там?', 'Логин')

	if (login == 'Админ') {
		password = prompt ('Введите пароль', 'Пароль')

		if (password == 'Я Главный') {
			alert('Здравстуйте!') 
		} else if (password == null) {
			alert('Отменено')
		} else if (password !== 'Я главный') {
			alert('Неверный пароль!')
		} 

	} else if (login == null) {
		alert('Отменено')
	} else if (login !== 'Админ') {
		alert('Я вас не знаю')
	} 
}