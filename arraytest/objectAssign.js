//arr.map() + Object.assign()

let userList = [
  { name: 'Mike', age: 30 },
  { name: 'Jin', age: 32 },
  { name: 'Nana', age: 18 },
];


let newUserList = userList.map((person, index) =>{
    return Object.assign({}, person, {
        id: index +1,
        isAdult: person.age > 19,
    })
})
console.log(newUserList);
console.log(userList);