function minSum (array) {

    let sum = 0;
    let k = 1;
    
    while (true) {

        console.log("\nIteration: " + `${k++}`);
        console.log("------------");
        console.log("Array: ", array);

        // Поиск максимума в массиве
        let max = Math.max.apply(null, array);
        // Индекс максимума
        let index = array.indexOf(max);
        console.log("Max: array["+`${index}`+"] = " + `${max}`);

        // Массив чисел, меньших найденного максимума
        array1 = array.filter((x) => {return x < max});

        // Если таких чисел нет, то есть все числа равны друг другу, то break
        if (array1.length == 0) {
            break;
        };

        // Сортировка в порядке убывания
        array1.sort().reverse();
        console.log('Smaller numbers: ', array1);

        for (let i = 0; i < array1.length; i++) {
            array[index] -= array1[i];

            // Поиск максимума
            let max = Math.max.apply(null, array);
            array2 = array.filter((x) => {return x < max});

            /* Проверка, остался ли рассматриваемый элемент максимумом или есть ли в массиве элементы, не равные ему:
                - если число не является максимумом, то переходим на следующую итерацию и ищем новый максимум
                - если в массиве все числа одинаковы, то цикл завершается */
            if ((array[index] !== max) || (array2.length == 0)) {
                break;
            };

            console.log('Array: ', array);
        };
    };

    array.forEach(num => sum += num);

    return (console.log("\nMin sum: ", sum));
};


minSum([6, 9, 21]);
