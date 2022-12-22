function limesToCut(sentLength, words) {
    let string = [];
    for (let i = 0; i < words.length; i++) {
        string += words[i];
        if (string.length > sentLength) {
            return (console.log("Max: " + `${i}` + " words"));
        };
    };
    
    if (string.length <= sentLength) {
        return (console.log("Max: " + `${words.length}` + " words"));
    };
};

limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);

