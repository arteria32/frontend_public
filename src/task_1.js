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