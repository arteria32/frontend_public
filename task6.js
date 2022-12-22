function deleteMin (array) {
    const MIN = Math.min.apply(null, array);
    console.log("MIN: ", MIN);
    array = array.filter((x) => {return x !== MIN});
    return (console.log(array));
};

deleteMin([1,2,3,4,5]);