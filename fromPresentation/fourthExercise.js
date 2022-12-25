/*Задание 4. Преобразить порядковый номер игральной карты
в ее роль
Тестовые данные:
[5, 11,12,13, 10]
Ожидаемый результат:
[5, 'jack', 'queen', 'king', 10]*/

let converter = (arr) => {
    let result = []
    for(i = 0; i < arr.length; i++){
        switch (arr[i]){
            case 11: result.push('jack'); break;
            case 12: result.push('queen'); break;
            case 13: result.push('king'); break;
            default: result.push(arr[i])
        }
    }
    return result;
}

console.log(converter([5, 11, 12, 13, 10]));