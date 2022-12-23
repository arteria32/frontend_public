// Задание 6. Удалить минимум
function deleteMin(data) {
  let min = Math.min(...data);
  return data.filter((e) => e != min);
}

let test = [1, 2, 3, 4, 5];

console.log(deleteMin(test));
