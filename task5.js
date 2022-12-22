function createVisitor (name, age, number) {
    let visitor = {
        name: name,
        age: age,
        number: number,
    };

    return (console.log(visitor));
}

createVisitor('Иван Иванович', 24, '89005553535');