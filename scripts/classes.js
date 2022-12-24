class Car {
    constructor(year, color) {
        this.year = year;
        this.color = color;
    }

    // Машина бибикает
    beep() {
        if (this.brand !== undefined) {
            console.log("The " + `${this.brand}` + " beeps!");
        } else {
            console.log("The car beeps!");
        };
    }

    // Машина едет
    drive() {
        if (this.brand !== undefined) {
            console.log("The " + `${this.brand}` + " is driven!");
        } else {
            console.log("The car is driven!");
        };
    }

    // Вывод года производства
    getYear() {
        if (this.brand !== undefined) {
            console.log("This " + `${this.brand}` +" is made in " + `${this.year}` + ".");
        } else {
            console.log("This car is made in " + `${this.year}` + ".");
        };
    }

    // Вывод цвета
    getColor() {
        if (this.brand !== undefined) {
            console.log("This " + `${this.brand}` +" is " + `${this.color}` + ".");
        } else {
            console.log("This car is " + `${this.color}` + ".");
        }
    }

    // Вывод бренда
    getBrand() {
        if (this.brand !== undefined) console.log("This is " + `${this.brand}` + ".");
    }

    // Вывод страны-производителя
    getCountry() {
        if (this.country !== undefined) {
            if (this.brand !== undefined) {
                console.log("This " + `${this.brand}` + " is made in  " + `${this.country}` + ".");
            } else {
                console.log("This car is made in  " + `${this.country}` + ".");
            };
        };
    }

}

class BMW extends Car {
    constructor(year, color) {
        super(year, color);
        this.brand = 'BMW';
        this.country = 'Germany';
    }
}

class Renault extends Car {
    constructor(year, color) {
        super(year, color);
        this.brand = 'Renault';
        this.country = 'France';
    }
}


class Fiat extends Car {
    constructor(year, color) {
        super(year, color);
        this.brand = 'Fiat';
        this.country = 'Italy';
    }
}


let car = new Car(2019, 'green');
car.beep();
car.drive();
console.log("\n");

let bmw = new BMW(2000, 'black');
bmw.getColor();
bmw.getCountry();
console.log("\n");

let renault = new Renault(2010, 'yellow');
renault.getColor()
renault.getYear();
renault.getCountry();
console.log("\n");

let fiat = new Fiat(2008, 'blue');
fiat.getBrand();
fiat.getYear();
fiat.getCountry();


