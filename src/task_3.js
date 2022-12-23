
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
