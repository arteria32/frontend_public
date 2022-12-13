"use strict";

function groupById(arr){
  return arr.reduce((obj, item, index, array) => {
    console.log(obj);
    return obj;
  }, {})
}
// let usersById = {};
// usersById[users[1].id] = users[1];

// console.log(usersById);

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
