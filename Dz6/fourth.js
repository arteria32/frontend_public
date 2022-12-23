// Тестовые данные:
// [5, 11,12,13, 10]
// Ожидаемый результат:
// [5, 'jack', 'queen', 'king', 10]

const list = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11:'jack',
    12:'queen',
    13:'king',
}

const revers = (array) => {
    const newArray = [] 
    for(let i in array){
        if(array[i] in list){
            newArray.push(list[array[i]])
        }
    }
    return newArray
}

alert(revers([5, 11,12,13, 10]))