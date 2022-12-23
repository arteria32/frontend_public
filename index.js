const showFirstTask = () => {
    const testArray_1 = [1, 2, 4, 2, 4, 4, 5];
    const testArray_2 = [1, 2, 3, 4, 5];
    const testArray_3 = [1, -2, -2, 3, 4, -5, -6, -5];
    console.group("Поиск всех уникальных значений в массиве")
    console.log(`Исходный: ${testArray_1}`)
    console.log(`Полученный: ${getArrayOfUniqueValues(testArray_1)}`)
    console.log(`Исходный: ${testArray_2}`)
    console.log(`Полученный: ${getArrayOfUniqueValues(testArray_2)}`)
    console.log(`Исходный: ${testArray_3}`)
    console.log(`Полученный: ${getArrayOfUniqueValues(testArray_3)}`)
    console.groupEnd()
}

const getArrayOfUniqueValues = (arr) => {
    return arr.filter((element, index) => index === arr.indexOf(element))
}

const showSecondTask = () => {
    console.group("Определить сколько вмещается слов в предложение")
    console.log(25, ['small', 'small', 'large', 'medium', 'small'])
    console.log(`Вмещается ${limesToCut(25, ['small', 'small', 'large', 'medium', 'small'])} слова`)
    console.log(30, ['small', 'small', 'large', 'medium', 'small'])
    console.log(`Вмещается ${limesToCut(30, ['small', 'small', 'large', 'medium', 'small'])} слов`)
    console.log(7, ['small', 'small', 'large', 'medium', 'small'])
    console.log(`Вмещается ${limesToCut(7, ['small', 'small', 'large', 'medium', 'small'])} слово`)
    console.groupEnd()
}

const limesToCut = (charNumber, arr) => {
    const string = arr.join(" ");
    if (string.length > charNumber) {
        let wordCount = string.slice(0, charNumber).split(' ').length;
        return (string.length !== charNumber && string[charNumber] !== " ") ? wordCount - 1 : wordCount
    } else {
        return string.split(' ').length;
    }
}

const showThirdTask = () => {
    console.group("Определить количество нечетных чисел в массиве")
    console.log([0, 1, 2, 3, 1, 5, 6, 7])
    console.log(`${countOddNumbers([0, 1, 2, 3, 1, 5, 6, 7])} нечетных чисел`)
    console.groupEnd()
}

const countOddNumbers = (arr) => {
    let count = 0;
    arr.forEach(el => {
        el % 2 !== 0 && count++
    });
    return count
}

const showFourthTask = () => {
    console.group(" Преобразить порядковый номер игральной карты в ее роль")
    console.log([5, 11, 12, 13, 10])
    console.log(convert([5, 11, 12, 13, 10]))
    console.groupEnd()
}


const convert = (arr) => {
    const cardSuits = {
        11: 'jack',
        12: 'queen',
        13: 'king'
    }
    return arr.map(el => {
        return (el < 11) ? el : cardSuits[el]
    })
}

const showFifthTask = () => {
    const visiter = new createVisitor('Иван Иванович', 24, '89005553535');
    console.group("Создание визитки")
    console.log(visiter)
    console.groupEnd()

    // -----------------------------------------------------------------------------------------------
    // or:
    // const createVisitor = (name, age, number) => {
    //     return {
    //         name: name,
    //         age: age,
    //         number:  number,
    //     }
    // }

    // const visiter1 = createVisitor('Иван Иванович', 24, '89005553535');
    // console.log(visiter1)
    // -----------------------------------------------------------------------------------------------
}

function createVisitor(name, age, number)  {
    this.name = name;
    this.age = age;
    this.number = number;
}

const showSixthTask = () => {
    console.group("Создание визитки")
    console.log([1,2,3,4,5])
    console.log(removeMinimum([1,2,3,4,5]))
    console.log([11, 999999, 3, 2, 6126])
    console.log(removeMinimum([11, 999999, 3, 2, 6126]))
    console.groupEnd()
}

const removeMinimum = (arr) => {
    return arr.filter(e => e != Math.min(...arr));
}

const showSeventhTask = () => {
    const array = [6, 9 , 21];
    console.group("Минимально возможная сумма")
    console.log(minPossibleAmount(array))
    console.groupEnd()
}

const minPossibleAmount = (arr) => {
    const length = arr.length;
    while (Math.max.apply(null, arr) != Math.min.apply(null, arr)) {
        arr.sort((a,b) => a - b)
        arr[length-1] = arr[length-1] - arr[length-2]
        console.log(arr)
    }
    return arr.reduce((a, b) => a + b, 0)
}

