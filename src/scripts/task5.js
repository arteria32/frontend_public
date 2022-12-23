function createVisitor(name, age, telephone) {
  return {
    name: name ?? "",
    age: age ?? "",
    number: telephone ?? "",
  };
}

console.log("Задача 5:");
console.log(createVisitor("Иван Иванович", 24, "89005553535"));
console.log("-------------------------------");