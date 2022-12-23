class Automobile {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }

  info() {
    console.log(`Марка: ${this.model}`);
    console.log(`Скорость: ${this.speed} км/ч`);
  }

  ride() {
    console.log(`${this.model} поехала со скоростью ${this.speed} км/ч!`);
  }
}

class Truck extends Automobile {
  constructor(model, speed, cargo) {
    super(model, speed);
    this.cargo = cargo;
  }

  info() {
    super.info();
    console.log(`Вместимость: ${this.cargo} кг`);
  }

  load() {
    console.log(`${this.model} загрузили ${this.cargo} кг груза`);
  }
}

const car = new Automobile("BMW", 120);
car.info();
car.ride();

const truck = new Truck("MAN", 60, 20000);
truck.info();
truck.ride();
truck.load();
