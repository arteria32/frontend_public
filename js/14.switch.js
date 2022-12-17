// Напишите if..else, соответствующий следующему switch:
let browser = '';

if (browser === 'Edge') {
    alert("You've got the Edge!");
} else if (['Chrome', 'Firefox', 'Safari', 'Opera'].includes(browser)) {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

// Перепишите код с использованием одной конструкции switch:
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}
