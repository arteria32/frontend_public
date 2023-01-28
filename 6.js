function DeleteMin(array)
{
    let min = Math.min(...array)
    return array.filter(num => num != min)
}
console.log(DeleteMin([1,2,3,4,5]))
