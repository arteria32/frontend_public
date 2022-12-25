/*Задание 1. Поиск всех уникальных значений в массиве
Тестовые данные:
[1, 2, 4, 2, 4, 4, 5]
[1, 2, 3, 4, 5]
[1, -2, -2, 3, 4, -5, -6, -5]
Ожидаемый результат:
[1,2,4,5]
[1,2,3,4,5]
[1,-2,3,4,-5,-6]
*/
function uniqueElements(value, index, self) {
    return self.indexOf(value) === index;
  }
  
  // usage example:
  let oneExample = [1, 2, 4, 2, 4, 4, 5];
  let twoExample = [1, 2, 3, 4, 5];
  let threeExample = [1, -2, -2, 3, 4, -5, -6, -5];
  let firstUnique = oneExample.filter(uniqueElements);
  let secondUnique = twoExample.filter(uniqueElements);
  let thirdUnique = threeExample.filter(uniqueElements);
  
  console.log(firstUnique);
  console.log(secondUnique);
  console.log(thirdUnique);