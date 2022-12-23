// Задание 4. Преобразить порядковый номер игральной карты
// в ее роль
function playCard(data) {
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case 11:
        data[i] = "jack";
        break;
      case 12:
        data[i] = "queen";
        break;
      case 13:
        data[i] = "king";
        break;
    }
  }
}

let test = [5, 11, 12, 13, 10];
playCard(test);
console.log(test);
