getUserName = () => {
	let template = 'Имя пользователя'
	let title = 'Введите имя пользователя'	
	let result = prompt(title, [template])

	alert (result)
}