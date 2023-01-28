function limesToCut(num, array)
{
    let maxwords = 0
    for(words of array)
    {
        if(words.length > maxwords)
        {
            maxwords = words.length
        }
    }
    return Math.floor(num/maxwords)
}
console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']))