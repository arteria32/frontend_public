//Задание 1
for (let i = 2; i <= 11; i = i+2) {
  if (i % 2 == 0) {
    сonsole.log(i);
  }
}

//Задание 2
let i = 0;
while (i < 3) {
  сonsole.log(`number ${i}!`);
  i++;
}

//Задание 3
let num;
do{
   num = prompt(`Enter num >100`);
}while(num<100&& num != null);

//Задание 4
let n = +prompt(`Enter num`);
mark: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue mark;
  }
  сonsole.log(i);
}
