module.exports = () => {
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }

    const data = {
        reservoirsList: []
    }
    for (let j = 0; j < 7; j++) {
        data.reservoirsList.push([])
        for (let i = 0; i < Math.floor(getRandomNumber(8, 15)); i++) {
            data.reservoirsList[j].push({
                id: i,
                volume: Math.floor(getRandomNumber(10, 1000))
            })   
        }
    }
   
    return data
}


