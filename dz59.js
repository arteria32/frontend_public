"use strict"

let browser = prompt("введите браузер",'');
if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari'|| browser == 'Opera'){
    alert('Okay we support these browsers too' );
} else if (browser == 'Edge'){
    alert("You've got the Edge!");
}

else{
    alert('We hope that this page looks ok!');

}

//
const number = +prompt('Введите число между 0 и 3', '');

switch(number){
    case(0):
        alert('Вы ввели число 0');
        break;
    
    case(1):
        alert('Вы ввели число 1');
        break;
    
    case(2):
    case(3):
    alert('Вы ввели число 2, а может и 3');
    break;
    default:
        alert('Числе больше 3');
}