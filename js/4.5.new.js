// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

function Calculator() {
    this.read = function(num1, num2) {
        this.num1 = +prompt('num1')
        this.num2 = +prompt('num2')
    }

    this.sum = function() {
        return this.num1 + this.num2;
    }

    this.mul = function() {
        return this.num1 * this.num2;
    }
};

let calculator = new Calculator();
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Создайте new Accumulator
// важность: 5
// Создайте функцию-конструктор Accumulator(startingValue).
//
//     Объект, который она создаёт, должен уметь следующее:
//
//     Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//     Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
//     Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function(num1, num2) {
        this.value += +prompt('new number')
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
