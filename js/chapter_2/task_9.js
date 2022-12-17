checkAge(12)

function checkAge(age) {
 return (age > 18) ? true : console.log('Родители разрешили?');
}

console.log (min(3,2))
function min(a, b) {
	return a < b ? a : b
}

let powResult = 1
function pow(a, b) {
	if (a < 0) {
		a *= -1
	}
	if (b == 1) {
		return a
	}
	if (b < 0) {
		return 'Введите натуральное число'
	}
	if (b === 0) {
		return 1
	}
	if (b >= 1) {
		powResult *= a
		b -=1
		pow(a,b)
	} else {
	return powResult
	}
	return powResult
}


console.log ('Число возведенное в степень: ' + pow(-3,2))