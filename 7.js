function MinSum(array)
{
    let a = array
    while(!(a.every(num => num === a[0])))
    {
      for (let i in array) 
      {
        for (let j in array) 
        {
          if (array[i] > array[j]) 
          {
            array[i] = array[i] - array[j]
          }
        }
      }
      a = array
    }
    console.log(a)
    return a.reduce((sum, num) => sum += num, 0)
}

console.log(MinSum([6, 9, 21]))
