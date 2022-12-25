//Доп задание

class Car {

	constructor(brand, color) {
		this.brand = brand
		this.color = color
		this.gasTank = 100;
		this.refueling = []
	}
	
	start() {
		console.log(`${this.brand} - ${this.color} - started!`)
	}
	stop() {
		console.log(`${this.brand} - stopped!`)
	}
	static discount() {
		console.log('Общая скидка - 10%')
	}
	set rating(value) {
		this.score = value
	}
	get rating() {
		return this.score
	}
	getGas() {
		this.gasTank += 10;
		const stamp = Date.now();
		const time = new Date(stamp);
		this.refueling.push(time.toString())
		return this.gasTank
	}
	drive() {
		this.gasTank -= 10;
		return this.gasTank
	}
}

class HybridCar extends Car {
	constructor(brand, model) {
		super(brand)
		this.model = model
	}

	autoPark() {
		console.log('Автопарковка')
	}
}



const tesla = new Car('Tesla', 'silver')
tesla.start()
tesla.stop()
Car.discount()
tesla.rating = 'five'
console.log(tesla.score)

const nissan = new Car('Nissan', 'Red')
console.log(nissan.drive());
console.log(nissan.drive());
console.log(nissan.getGas());
console.log(nissan.drive());

const lexus = new HybridCar('Lexus', 'RX')
lexus.autoPark()


