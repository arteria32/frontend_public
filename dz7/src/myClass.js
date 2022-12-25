//Написать свой родительский класс и несколько дочерних 
class Employee {
    constructor(fullName, age) {
      this._fullName = fullName;
      this._age = age;
    }
  
    get fullName() {
      return this._fullName;
    }
  
    get age() {
      return this._age;
    }
  
    info() {
        console.log(`Имя сотрудника: ${this._fullName}`);
        console.log(`Возраст сотрудника: ${this._age}`)
    }
  
  }


  class Developer extends Employee {
    constructor(fullName, age, progLanguage ) {
        super(fullName, age);
        this._progLanguage  = progLanguage;
    }

    get progLanguage() {
        return this._progLanguage;
      }
    
    info() {
        console.group(`Разработчик`);
        super.info();
        console.log(`Язык программирования: ${this._progLanguage }`);
        console.groupEnd()
    }
  
  }

  let Alsu = new Developer("Alsu Bulatova", 22, "JS");
  Alsu.info();


