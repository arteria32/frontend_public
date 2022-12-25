class Car{

    constructor(brand, model, enginePower, fuelConsumption){
        this.brand = brand
        this.model = model
        this.enginePower = enginePower
        this.fuelConsumption = fuelConsumption
    }
}


class BMW extends Car{
    constructor(brand, model, enginePower, fuelConsumption, description){
        super(brand, model, enginePower, fuelConsumption)
        this.description = description
    }
}

const bmw = new BMW(
    brand = 'BMW', 
    model = '520i', 
    enginePower = 184, 
    fuelConsumption = 6.8, 
    description = 'Цифровые технологии и системы помощи водителю.'
    )

class Mercedes extends Car{
    constructor(brand, model, enginePower, fuelConsumption, description){
        super(brand, model, enginePower, fuelConsumption)
        this.description = description
    }
}
    
const mercedes = new Mercedes(
    brand = 'Mercedes', 
    model = 'E200', 
    enginePower = 197, 
    fuelConsumption = 7.1, 
    description = 'С легкостью преодолевает любые трудности.'
    )

class Toyota extends Car{
    constructor(brand, model, enginePower, fuelConsumption, description){
        super(brand, model, enginePower, fuelConsumption)
        this.description = description
    }
}

const toyota = new Toyota(
    brand = 'Toyota', 
    model = 'Land Cruiser 200', 
    enginePower = 309, 
    fuelConsumption = 18.2, 
    description = 'Впечатляющие внедорожные характеристики, безопасность, надежность и сильный характер '
    )
