// Тестовые данные:
// [1,2,3,4,5]
// Ожидаемый результат:
// [2,3,4,5]

const deleteMin = (array) =>{
    let minimum = array[0];
    for (const item of array) {
      if(item < minimum) {
        minimum = item; 
      }
    }
    let newArray = array.filter((i) =>  i !== minimum);
    return newArray
}

alert(deleteMin([1,2,3,4,5]))