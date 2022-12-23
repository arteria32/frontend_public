
 const showSecondTask = () => {
    console.group("Определить сколько вмещается слов в предложение")
    console.log(25, ['small', 'small', 'large', 'medium', 'small'])
    console.log(`Вмещается ${limesToCut(25, ['small', 'small', 'large', 'medium', 'small'])} слова`)
    console.log(30, ['small', 'small', 'large', 'medium', 'small'])
    console.log(`Вмещается ${limesToCut(30, ['small', 'small', 'large', 'medium', 'small'])} слов`)
    console.log(7, ['small', 'small', 'large', 'medium', 'small'])
    console.log(`Вмещается ${limesToCut(7, ['small', 'small', 'large', 'medium', 'small'])} слово`)
    console.groupEnd()
}

const limesToCut = (charNumber, arr) => {
    const string = arr.join(" ");
    if (string.length > charNumber) {
        let wordCount = string.slice(0, charNumber).split(' ').length;
        return (string.length !== charNumber && string[charNumber] !== " ") ? wordCount - 1 : wordCount
    } else {
        return string.split(' ').length;
    }
}