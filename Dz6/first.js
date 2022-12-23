// Тестовые данные:
// [1, 2, 4, 2, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5]
// Ожидаемый результат:
// [1,2,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

const unique = () => {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
};

let a = [1, 2, 4, 2, 4, 4, 5];
let b = [1, 2, 3, 4, 5];
let c = [1, -2, -2, 3, 4, -5, -6, -5];
alert(unique(a));
alert(unique(b));
alert(unique(c));
