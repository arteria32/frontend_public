/* Задание 5. Создание визитки
 Тестовые данные:
 createVisitor(‘Иван Иванович',, 24, '89005553535');
 Ожидаемый результат:
 { name: ‘Иван Иванович', age: 24, number: '89005553535' }*/

 let createVisitor = (name, age, number) => {
    return{name, age, number}
}

console.log(createVisitor('Иван Иваныч', 24, '89005553535'));