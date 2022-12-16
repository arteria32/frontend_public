//Задание 1
function checkAge1(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
function checkAge2(age) {
  return age > 18 || confirm("Родители разрешили?");
}

//Задание 2
function min(a, b) {
  return a >= b ? b : a;
}

//Задание 3
function pow(x, n) {
    let result = 1;
    for (let i = 0; i <n; i++) {
      result *= x;
    }
  return result;
}

