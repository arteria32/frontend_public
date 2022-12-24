class Car {
    constructor(mark) {
      this.mark = mark;
    }
    drive() {
      console.log(`Машина марки ${this.mark} поехала`);
    }
  }

  class Truck extends Car {
    constructor(mark) {
      super(mark); 
    }

    up() {
      console.log(`грузовик марки ${this.name} поднимаетк кузов`);
    }
  }

  let kamaz = new Truck('Камаз');
  kamaz.drive(); 