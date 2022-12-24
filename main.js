"use strict"

// Задание 1. Поиск всех уникальных значений в массиве
function uniqueItems(ar){
    return Array.from(new Set(ar))
}


// Задание 2. Определить сколько вмещается слов в предложение
function numWords(number, words){
    words.sort(function(a, b){
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return b.length - a.length;
    });
    
    let sum = 0;
    if (words[0] > number){
        return 0
    }
    for (let i = 0; i < words.length; i++){
        if (sum + words[i].length >= number) {
            return i + 1
        }
        sum += words[i].length
    }
    return words.length

}


// Задание 3. Определить количество нечетных чисел в массиве
function numOdds(ar){
    let sum = 0;
    for (let i = 0; i < ar.length; i++){
        if (ar[i] % 2 != 0){
            sum += 1;
        }
    }
    return sum
}

// Задание 4. Преобразить порядковый номер игральной карты в ее роль
function cards(ar){
    let card = {
        1: 'Ace',
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 'Jack',
        12: 'Queen',
        13: 'King'
    };

    let ans = new Array;
    for (let i = 0; i < ar.length; i++){
        ans.push(card[ar[i]]);
    }
    return ans

}

// Задание 5. Создание визитки
function visitka(name, age, number){
    return {'name': name, 'age': age, 'number': number}
}

// Задание 6. Удалить минимум
function removeSmallest(arr) {
    let min = Math.min(...arr);
    return arr.filter(e => e != min);
}

