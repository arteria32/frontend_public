// Класс расширяет объект?

class Rabbit extends Object {
    constructor(name) {
        // Сначала вызываем конструктор родителя
        super();
        this.name = name;
    }
}
  
let rabbit = new Rabbit("Кроль");
alert( rabbit.hasOwnProperty('name') );