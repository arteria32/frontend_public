
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
