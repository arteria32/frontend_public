const showSixthTask = () => {
    console.group("Удалить минимум")
    console.log([1,2,3,4,5])
    console.log(removeMinimum([1,2,3,4,5]))
    console.log([11, 999999, 3, 2, 6126])
    console.log(removeMinimum([11, 999999, 3, 2, 6126]))
    console.groupEnd()
}

const removeMinimum = (arr) => {
    return arr.filter(e => e != Math.min(...arr));
}
