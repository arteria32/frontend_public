function getRoles(arr) {
  const roles = {
    11: 'jack',
    12: 'queen',
    13: 'king'
  };

  return arr.map((elem) => roles[elem] ?? elem);
}

console.log("Задача 4:");
console.log(getRoles([5, 11, 12, 13, 10]));
console.log("-------------------------------");