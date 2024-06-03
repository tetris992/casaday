// // //
// let desc = '    DevilCoding    ';
// console.log(desc.length);
// console.log(desc[8]);

// console.log(desc //메서드 체이닝
//   .toLocaleLowerCase()
//   .slice(1, 11)
//   .trim()
//   .repeat(3));
// console.log(desc.toLowerCase());
// console.log(desc.indexOf('man'));
// console.log(desc.slice(1, 11));
// console.log(desc.substring(0, 7));
// console.log(desc.trim());
// console.log(desc.repeat(3));

// let list = [
//   '01. 들어가며',
//   '02. JS의 역사',
//   '03. 자료형',
//   '04. 함수',
//   '05. 배열',
// ];

// const newArray1 = [];
// list.forEach((element) => {
//   newArray1.push(element.slice(4));
// });
// console.log(newArray1);

// // const newList = [];
// // for (let i = 0; i < list.length; i++) {
// //   newList.push(list[i].slice(4));
// // }
// // console.log(newList);

// //금칙어
// function hasCola(str) {
//   if (str.includes('콜라')) {
//     console.log('금칙어가 있습니다.');
//   } else {
//     console.log('통과');
//   }
// }

// hasCola('역시 사이다가 짱이야.');
// hasCola('무슨소리 콜라가 짱이지..');
// hasCola('지나가는 MZ, 역시 꼰대들  스무디가 킹짱이지..');
// hasCola('뭐 암거나 주세요.ㅠㅠ');

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result2 = arr.splice(2, 5, 'abcde')
// const sum = arr.concat([3, 4, 5, 6, 7])
// console.log(arr);
// console.log(result2);
// console.log(sum);

// // let arr = [1, 2];
// // const result = arr.concat([3, 4, 5]);
// // console.log(arr);
// // console.log(result);

// // let array = ['tom', 'jane', 'nana', 'mike'];
// // array.forEach((name, index) => {
// //   console.log(`${index + 1}. ${name}`);
// // });

// // let arr2 = [1, 2, 3, 4];
// // arr.indexOf(3);
// // arr.includes(3);

// // const evens = arr2.find((element)=>{
// //   return element %2 ===0;
// // })

// // console.log(result);

// let people = [
//   { name: 'Tom', age: 33 },
//   { name: 'John', age: 45 },
//   { name: 'Anna', age: 30 },
//   { name: 'Jin', age: 18 },
//   { name: 'Mike', age: 16 },
//   { name: 'Lucy', age: 15 },
//   { name: 'Nana', age: 27 },
// ];

// const younger = people.find((person) => person.age < 20);

// console.log(younger);

// const adult = people.filter((person) => person.age > 19);
// console.log(adult);

// //toUpperCase()
// const namesUpper = people.map((person) => person.name.toUpperCase());
// console.log(namesUpper);
// const namesLower = people.map((person) => person.name.toLowerCase());
// console.log(namesLower);
// const addAge = people.map((person) => person.age + 1);
// console.log(addAge);

// const newArray = people.map((person) => {
//   person.nationality = 'Korea';
// });

// //forEach(fn) ; 반환값은 없고, 단순한 반복작업 수행
// people.forEach((person) => {
//   console.log(`${person.name}의 나이는 ${person.age}입니다.`);
// });

// //some(fn) 조건을 만족하는 요소가 하나라도 있다면, true
// const hasMinors = people.some((person) => person.age < 20);
// console.log(hasMinors);

// //every(fn) 모든 요소가 조건을 만족해야만 true 반환

// const allAdults = people.every((person) => person.age > 22);
// console.log(allAdults);

// //reduce (fn) (acc, cur)  모든 나이를 합산

// const totalAge = people.reduce((acc, person) => (acc += person.age), 0);
// console.log(totalAge);

// //sort(fn)  배열의 순서가 변경되어 뒤에 나오는 index메서드의 결과가 달라진다.
// // 원본배열을 변경하지 않기위해 복사본을 만들어서 sort 한다.
// const sortAdult = [...people].sort((a, b) => a.age - b.age);
// console.log(sortAdult);

// // includes 메서드 : 배열에 특정요소가 있는지 확인 있다면, true
// const hasIncludes = people.map((person) => person.name.toLowerCase());
// console.log(hasIncludes.includes('jin'));

// //findIndex 메서드 : 주어진 함수의 조건을 만족하는 첫 번째 요소의 인덱스를 반환
// const indexPerson = people.findIndex((person) => person.age === 18);
// console.log(indexPerson);

// //

// const array22 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const findEvens = array22
//   .filter((num) => num % 2 === 1)
//   .concat([10, 12, 14])
//   .reverse();
// // const rev = findEvens.reverse();
// const result = findEvens.reduce((acc, even) => {
//   return (acc += even);
// }, 0);
// console.log(findEvens);
// console.log(result);

// let arrjoin = ['안녕', '나는', '은경이야', '만나서', '반가워']
// let result1 = arrjoin.join(',')
// console.log(result1);

// let textarr = '안녕,나는,은경이야,만나서,반가워';
// const result3 = textarr.split(',');
// console.log(result3);

// let user =  {
//   name: 'nana',
//   age: 32,
// }

// let userList1 = ['Nana', 'Jin', 'Kim'];

// console.log(typeof user); // objcet
// console.log(typeof userList1); // object
// console.log(Array.isArray(user));
// console.log(Array.isArray(userList1));

let arrSort = [27, 8, 5, 13];
arrSort.sort((a, b) => {
  console.log(a, b);
  return a - b;
});
console.log(arrSort); //(4) [13, 27, 5, 8]

//Lodash 공식사이트에서 확인 필요
// import _ from 'lodash';
// let people = [
//   { name: 'Tom', age: 33 },
//   { name: 'John', age: 45 },
//   { name: 'Anna', age: 30 },
//   { name: 'Jin', age: 18 },
//   { name: 'Mike', age: 16 },
//   { name: 'Lucy', age: 15 },
//   { name: 'Nana', age: 27 },
// ];

// let sortedPeople = _.sortBy(people, ['age']);
// console.log(sortedPeople);

// let people = [
//   { name: 'Tom', age: 33 },
//   { name: 'John', age: 45 },
//   { name: 'Anna', age: 30 },
//   { name: 'Jin', age: 18 },
//   { name: 'Mike', age: 16 },
//   { name: 'Lucy', age: 15 },
//   { name: 'Nana', age: 27 },
// ];

// let sortedPeopleByname = people.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortedPeopleByname);

// let sortedPeopleByage = people.sort((a, b) => a.age - b.age);
// console.log(sortedPeopleByage);

// //배열 합치기 for, for of, forEach, reduce

let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, cur) => (acc += cur), 0);
console.log(`sum: ${sum}`);

let sum2 = 0;
arr.forEach((element) => {
  sum2 += element;
});
console.log(`sum2: ${sum2}`);

let sum3 = 0;
for (let num of arr) {
  sum3 += num;
}
console.log(`sum3: ${sum3}`);

let sum1 = 0; //for문
for (let i = 0; i < arr.length; i++) {
  sum1 += arr[i];
}
console.log(`sum1: ${sum1}`);

let sum4 = 0; //while문은 for문을 분해해서 나열한 것에 불과하다.!
let i = 0;
while (i < arr.length) {
  sum4 += arr[i];
  i++;
}
console.log(`sum4: ${sum4}`);

let people = [
  { name: 'Tom', age: 33 },
  { name: 'John', age: 45 },
  { name: 'Anna', age: 30 },
  { name: 'Jin', age: 18 },
  { name: 'Mike', age: 16 },
  { name: 'Lucy', age: 15 },
  { name: 'Nana', age: 27 },
];

const result = people.reduce((acc, cur) => {
  //함수로 만들어서 사용해야 재사용성이 높아진다.
  if (cur.age > 19) {
    acc.push(cur.age);
  }
  return acc;
}, []);

console.log(result);

// const Adults = morePeople.reduce((acc, cur) => { // 함수형태로 만들면 호이스팅으로 해결된다.
//   if (cur.name.length !== 3) {
//     acc.push(cur.name)
//   }
//   return acc;
// }, []);

// console.log(Adults);

function getLengthThreeName(arr) {
  return arr.reduce((acc, cur) => {
    if (cur.name.length === 3) {
      acc.push(cur.name);
    }
    return acc;
  }, []);
}

function getAgeAdults(arr) {
  return arr.reduce((acc, cur) => {
    if (cur.age >= 19) {
      acc.push(`${cur.name}(${cur.age})`);
    }
    return acc;
  }, []);
}

let morePeople = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 19 },
  { name: 'Eva', age: 21 },
];

let students = [
  { name: 'Fiona', age: 20 },
  { name: 'George', age: 18 },
  { name: 'Hannah', age: 23 },
  { name: 'Ian', age: 24 },
  { name: 'Jack', age: 16 },
];

const adultPeople = getAgeAdults(people);
console.log(adultPeople);
const stu = getAgeAdults(students);
console.log(stu);
const more = getAgeAdults(morePeople);
console.log(more);

const threeNames = getLengthThreeName(morePeople)
console.log(threeNames);
const threeNamesStudents = getLengthThreeName(students)
console.log(threeNamesStudents);

//구조