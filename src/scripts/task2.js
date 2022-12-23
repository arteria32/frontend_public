// Задание 2: Ошибка создания экземпляра класса
// В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

/*
  class Animal {

    constructor(name) {
      this.name = name;
    }

  }

  class Rabbit extends Animal {
    constructor(name) {
      this.name = name;
      this.created = Date.now();
    }
  }

  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
  alert(rabbit.name);
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);
