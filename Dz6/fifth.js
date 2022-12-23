// Тестовые данные:
// createVisitor(‘Иван Иванович',, 24, '89005553535');
// Ожидаемый результат:
//  { name: ‘Иван Иванович', age: 24, number: '89005553535' }

const createVisitor = (name = "", age = 0, number = "88005553535") => {
  const object = {
    name: name,
    age: age,
    number: number,
  };

  return object
};

console.log(createVisitor('Иван Иванович', 24, '89005553535'))
