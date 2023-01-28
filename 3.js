function IsNumber(array)
{
    return (array.filter(num => num % 2 != 0)).length
}
console.log(IsNumber([1, 2, 3, 1, 5, 6]))
