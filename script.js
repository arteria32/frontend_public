// 1 Перепишите класс           Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.
class Clock
{
    constructor({template})
    {
        this.template = template;
    }
    render() 
    {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
    }
    stop() 
    {
        clearInterval(this.timer);
    }

    start()
    {
        this.render();
        this.timer = setInterval(() => this.render, 1000);
    }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();



// 2 Ошибка создания экземпляра класса
class Animal 
{
    constructor(name) 
    {
      this.name = name;
    }
}
class Rabbit extends Animal 
{
    constructor(name) 
    {
      super(name);
      this.created = Date.now();
    }
}
  
let rabbit = new Rabbit("Белый кролик"); 
alert(rabbit.name);



// 3 Улучшенные часы
class Clock 
{
    constructor({ template }) 
    {
      this.template = template;
    }
  
    render() 
    {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() 
    {
      clearInterval(this.timer);
    }
  
    start() 
    {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock
{
    constructor(options) 
    {
        super(options);
        let { precision = 1000 } = options;
        this.precision = precision;
    }
    start() 
    {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}



// 4 Класс расширяет объект?
class Rabbit extends Object 
{
    constructor(name) 
    {
      super();
      this.name = name;
    }
}
  
let rabbbit = new Rabbit("Кроль");
alert( rabbbit.hasOwnProperty('name') );


// 5 Дополнительное задание
class Lada 
{
    constructor(model, color, price) 
    {
        this.model = model;
        this.color = color;
        this.price = price;
    }
    drive() 
    {
        alert("Машина едет");
    }
}

class Priora extends Lada 
{
    constructor(model, color, price, restyling) 
    {
        super(model, color, price);
        this.restyling = restyling;
    }
}