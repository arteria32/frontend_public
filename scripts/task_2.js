//Задание 2
function limesToCut(size, str) {
  let counter = -1;
  str.sort((a, b) => {
    return a.length - b.length;
  });
  while (size > 0) {
    size = size - str[++counter].length;
  }
  return counter;
}
console.log(limesToCut(2, ["small", "small", "large", "medium", "small"]));
