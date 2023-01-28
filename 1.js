// Задание 1

const firstArray = [1, 2, 4, 2, 4, 4, 5]
const secondArray = [1, 2, 3, 4, 5]
const thirdArray = [1, -2, -2, 3, 4, -5, -6, -5]

function UniqueElement(array)
{
    return [...new Set(array)]
}


console.log(UniqueElement(firstArray))
console.log(UniqueElement(secondArray))
console.log(UniqueElement(thirdArray))
