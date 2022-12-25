/*Задание 3. Определить количество нечетных чисел в
массиве 
Тестовые данные:
[1, 2, 3, 1, 5, 6],
Ожидаемый результат:
4  */

let calculator = (arr) => {
    let result = 0 
    for (i = 0; i < arr.length; i++){
        console.log(arr[i] % 2 === 0);
        if (arr[i] % 2 !== 0) result++
    }
    return result;
}
console.log(calculator([1, 2, 3, 1, 5, 6]));