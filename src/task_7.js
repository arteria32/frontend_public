
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
