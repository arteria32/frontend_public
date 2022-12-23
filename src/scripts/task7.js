function getSum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  function gcd(a, b) {
    while (b) {
      a %= b;
      [a, b] = [b, a];
    }
    return a;
  }

  let gcdValue = gcd(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    gcdValue = gcd(gcdValue, arr[i]);
  }

  return gcdValue * arr.length;
}

console.log("Задача 7:");
console.log(getSum([6, 9, 21]));
console.log("-------------------------------");