const showFifthTask = () => {
    const visiter = new createVisitor('Иван Иванович', 24, '89005553535');
    console.group("Создание визитки")
    console.log(visiter)
    console.groupEnd()

}

function createVisitor(name, age, number)  {
    this.name = name;
    this.age = age;
    this.number = number;
}


// -----------------------------------------------------------------------------------------------
    // or:
    // const createVisitor = (name, age, number) => {
    //     return {
    //         name: name,
    //         age: age,
    //         number:  number,
    //     }
    // }

    // const visiter1 = createVisitor('Иван Иванович', 24, '89005553535');
    // console.log(visiter1)
    // -----------------------------------------------------------------------------------------------