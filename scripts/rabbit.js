// Ошибка создания экземпляра класса

class Animal {

    constructor(name) {
        this.name = name;
    }
  
}
  
class Rabbit extends Animal {
    constructor(name) {
    // this.name = name;
        super(name);
        this.created = Date.now();
    }
}
  
let rabbit = new Rabbit("Белый кролик"); 
alert(rabbit.name);