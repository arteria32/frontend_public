// Улучшенные часы
// У нас есть класс Clock.(В Class.js) Сейчас он выводит время каждую секунду
// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр 
// precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
// Не изменяйте класс clock.js. Расширьте его.

class Clock {
  
    constructor({template}) {
      this.template = template;
    }
    
    render() {
      let date = new Date();
      
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      
      let output = this.template.replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
      
      console.log(output);
    }
    
    stop() {
      clearInterval(this.timer);
    }
    
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  };
  
  let clock = new Clock({ template: 'h:m:s' });
  
  clock.start();


  class ExtendedClock extends Clock {
    constructor(template) {
      super(template);
      let { precision = 1000 } = template;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };