function cards(array)
{
    const name = 
    {
        1: 'Ace',
        11: 'Jack',
        12: 'Queen',
        13: 'King'
    }
    return(array.map(card => name[card] ?? card))
}
console.log(cards([5, 11, 12, 13, 10]))
