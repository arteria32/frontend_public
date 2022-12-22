function findUniqueValues (array) {
    let uniqueValues = [];
    for (let i = 0; i < array.length; i++) {
        if (!(uniqueValues.includes(array[i]))) {
            uniqueValues.push(array[i]);
        };
    };
    console.log("Unique values: ", uniqueValues);
};

findUniqueValues([1, 2, 4, 2, 4, 4, 5]);
findUniqueValues([1, 2, 3, 4, 5]);
findUniqueValues([1, -2, -2, 3, 4, -5, -6, -5]);