//task 7.1
for (let i = 2; i <= 10; i++) {
	console.log(i);
}

//task 7.2
let i = 0
while (i < 3) {
	console.log( `number ${i}!` );
	i++;
}

//task 7.3
promtCheck = () => {
	let number = 0;
	while (+number < 100 && number !== null) {
		number = prompt('Введите число большее 100')
	}
}

//task 7.3
n = 10
result = 0
for (let i = 2; i < n; i++) {
	let temp = true

	for (let j = i - 1; j > 2; j--) {
		
		if (i % j == 0) {
			temp = false
		} 
	}

	if (temp == true) {
		console.log(i)
	}
	
	
}

