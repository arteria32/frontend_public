let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
alert(c);
alert(d);

//2

let f = 2;

let x = 1 + (f *= 2);

alert(f); // 4
alert(x); // 5

//3

let q = prompt("Первое число?", 1);
let z = prompt("Второе число?", 2);

alert(+q  + +z); // 12