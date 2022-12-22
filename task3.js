function numberOfOdd (array) {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            num += 1;
        };
    };
    return (console.log("Number of odd numbers: ", num));
}

numberOfOdd([1, 2, 3, 1, 5, 6]);