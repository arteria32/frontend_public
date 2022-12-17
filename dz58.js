"use strict"

for(let i=2; i<=10; i++){
    if (i%2 == 0){
        alert(i);
    }

}

//2

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//

let numeric;
do{
    
   numeric = prompt("Введите число больше 100", '');
    
}while(+numeric <= 100 && typeof numeric == number);

//

let num = +prompt("Введите число", '');

nextnum:
for(let i = 2; i<=num; i++){
    for(let j = 2; j < i; j++){
        if(i%j == 0){ 
            continue nextnum;
        }
    }
        alert(i); 
}

