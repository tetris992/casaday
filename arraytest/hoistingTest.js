// let people = [
//   { name: 'Tom', age: 33 },
//   { name: 'John', age: 45 },
//   { name: 'Anna', age: 30 },
//   { name: 'Jin', age: 18 },
//   { name: 'Mike', age: 16 },
//   { name: 'Lucy', age: 15 },
//   { name: 'Nana', age: 27 },
// ];

// let morePeople = [
//   { name: 'Alice', age: 22 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 25 },
//   { name: 'David', age: 19 },
//   { name: 'Eva', age: 21 },
// ];

// let students = [
//   { name: 'Fiona', age: 20 },
//   { name: 'George', age: 18 },
//   { name: 'Hannah', age: 23 },
//   { name: 'Ian', age: 24 },
//   { name: 'Jack', age: 16 },
// ];

// function getAgeAdults(arr) {
//   return arr.reduce((acc, cur) => {
//     if (cur.name.length >= 3) {
//       acc.push(cur.age, cur.name);
//     }
//     return acc;
//   }, []);
// }

// const result = getAgeAdults(students);
// console.log(result);

// const result = people.reduce((acc, cur) => {
//   //함수로 만들어서 사용해야 재사용성이 높아진다.
//   if (cur.age > 19) {
//     acc.push(cur.age);
//   }
//   return acc;
// }, []);

// console.log(result);
// console.clear();

// const Adults = morePeople.reduce((acc, cur) => { // 함수형태로 만들면 호이스팅으로 해결된다.
//   if (cur.name.length !== 3) {
//     acc.push(cur.name)
//   }
//   return acc;
// }, []);

// console.log(Adults);

//   function getLengthThreeName(arr) {
//     return arr.reduce((acc, cur) => {
//       if (cur.name.length === 3) {
//         acc.push(cur.name);
//       }
//       return acc;
//     }, []);
//   }

//   function getAgeAdults(arr) {
//     return arr.reduce((acc, cur) => {
//       if (cur.age >= 19) {
//         acc.push(`${cur.name}(${cur.age})`);
//       }
//       return acc;
//     }, []);
//   }

// function showName(...names) {
//     const upperCaseNames = names.map((name) => name.toUpperCase());
//     console.log(upperCaseNames);
//     return upperCaseNames
// }

// const names = showName('Mr. Lee', 'nana', 'jin', 'Mike');

// const lowerCaseNames = names.map((name) => name.toLowerCase());
// console.log(lowerCaseNames);

// function showName(...names) {
//     const upperCaseNames = [];
//     for (i = 0; i < names.length; i++) {
//         upperCaseNames.push(names[i].toUpperCase());
//     }
//     console.log(upperCaseNames);
//     return upperCaseNames;
// }
// const names = showName('Mr.Lee', 'nana', 'jin', 'Mike');

// const lowerCaseNames = [];
// for (i = 0; i < names.length; i++) {
//     lowerCaseNames.push(names[i].toLowerCase());
// }
// console.log(lowerCaseNames);

// function showName(...names) {
//     const upperCaseNames = [];
//     i = 0;
//     while ( i < names.length) {
//         upperCaseNames.push(names[i].toUpperCase());
//         i++;
//     }
//     console.log(upperCaseNames);
//     return upperCaseNames;
// }
// const names = showName('Mr.Lee', 'nana', 'jin', 'Mike');

// const lowerCaseNames = [];
// i = 0;
// while( i < names.length){
//     lowerCaseNames.push(names[i].toLowerCase());
//     i++;
// }
// console.log(lowerCaseNames);

function showName(name) {
  //arguments 모든인수에 접근가능
  //화살표 함수는 arguments를 가지지 않음.
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showName('Jin', 'Tom');

function showName(...names) {
  // rest파라미터
}

showName();
showName('Jin');

function add(...nums) {
  let sum = 0;
  nums.forEach((num) => (sum += num));
  console.log(sum);
}

// function add(...nums) {
//   let sum = nums.reduce((acc, cur) =>acc += cur, 0);
//   console.log(sum);
// }

// function add(...nums) {
//     let sum =0;
//     for(i =0; i < nums.length; i++) {
//         sum += nums[i];
//     }
//     console.log(sum);
// }

// function add(...nums){
//     let sum = 0;
//     let i = 0;
//     while(i < nums.length) {
//         sum += nums[i];
//         i++;
//     }
//     console.log(sum);
// }

add(1, 2, 3, 4, 5);
add(12, 22, 13, 24, 15);
add(3, 2, -53, 31, 23, -32, 23, 21, 13, 3, -(8 ** 2));

// function User(name, age, ...skills) {
//   this.name = name;
//   this.age = age;
//   this.skills = skills;
//   return this;
// }

// const user1 = new User('Mike', 30, 'html', 'css', 'js', 'react');
// const user2 = new User('Nana', 32, 'JS', 'css');
// const user3 = new User('Jin', 22, 'React', 'css');

// console.log(user1);

// let arr1 = {name: 'Jin Nana', age: 30}
// let arr2 = Object.assign({}, arr1)
// arr2.name = 'Kim nana'
// console.log(arr1.name);
// console.log(arr2.name);

let person = {
  name: 'John Doe',
  age: 25,
  address: {
    city: 'New York',
    zip: '10001',
  },
};

let details = {
  age: 30,
  gender: 'male',
  address: {
    city: 'Los Angeles',
  },
};

const merged = Object.assign({}, person, details);
console.log(merged);

const merged1 = {
  ...person,
  ...details,
  address: {
    ...person.address,
    ...details.address,
  },
};

console.log(merged1);

// ES6 REST 파라미터
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// arr2.reverse().forEach(num => {
//   arr1.unshift(num)
// });
arr1 = [...arr2, ...arr1];
console.log(arr1);
console.clear();

let user = { name: 'Nana' };
let info = { age: 30 };
let fe = ['Js', 'React'];
let lang = ['China', 'English', 'Japan'];

// skills 키를 만들어서 fe와 lang를 넣고 새로운 배열을 반환하라.

// user = Object.assign(
//   {},
//   user,
//   info,
//   {skills: []}
// );

// fe.forEach((element) => {
//   user.skills.push(element);
// });
// lang.forEach((element) => {
//   user.skills.push(element);
// });

// user.skills = [...fe, ...lang]; // 스프레드 연산자의 위대함.!!!!!!!!!!

user = {
  ...user,
  ...info,
  skills: [...fe, ...lang],
};

console.log(user);

const obj1 = { a: 1, b: { x: 10, y: 20 } };
const obj2 = { b: { z: 30 }, c: 3 };

const mergedObject = {
  ...obj1,
  b: {
    ...obj1.b,
    ...obj2.b
  },
  ...obj2
};

console.log(mergedObject); // { a: 1, b: { x: 10, y: 20, z: 30 }, c: 3 }
