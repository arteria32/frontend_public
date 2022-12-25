//Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Wolf extends Object {
  constructor(name) {
    super()
	this.name = name
  }
}

let wolf = new Wolf("Волк");

console.log( wolf.hasOwnProperty('name') ); // Ошибка