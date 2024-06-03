// //생성자 함수와 Class는 비슷하지만, 인스턴스 생성시 좀 더 엄격한 것이 class다. (이것은 도움이된다. 아래 예제를 살펴보자. )

// const User = function (name, age) {
//   this.name = name;
//   this.age = age;
//   this.showName = function () {
//     console.log('this.name');
//   };
// };

// const person = new User('mike', 33); //new를 생략하면  undefined반환한다.. 에러가 나야하지만 에러지 나지않음.
// console.log(person);

// class User2 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showName() {
//     console.log('this.name');
//   }
// }
// const person2 = new User2('nana', 23); // class에서 new를 빼면.. TypeError: Class constructor User2 cannot be invoked without 'new'
// console.log(person2);

// 클래스 생성자와 상속

class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log(`drive...`);
  }
  stop() {
    console.log(`STOP`);
  }
}

class Bmw extends Car {
  constructor(color) {
    super(color); //생성사 오버라이딩은 반드시 반드시 부모를 호출해야한다.super(부모와 같은 매개변수도 전달해야한다. )
    // ReferenceError: Must call super constructor in derived class before accessing 'this'
    this.navigation = 1;
  }
  park() {
    console.log(`Park....ing`);
  }
  stop() {
    super.stop();
    console.log('STOP!!!!_child');
  }
}
const z4 = new Bmw('blue');
console.log(z4);

// function showAge() {
//   console.log(age);
//   //   let age = 20; //ReferenceError: Cannot access 'age' before initialization
// }

// showAge();

// //const 선언 + 초기화 + 할당이 동시에 되어야 한다. !!

// // let, const 블럭 스코프 {} 안에서만 유효하고 지역변수다. ! for , while, try catch...

// // Computed property

// // let a = 'age'

// const user = {
//     name: 'Mike',
//     age: 33,
// }
// // 객체복제 Object.assign():
// // const newUser = user; <---- 이건 참조값(메모리주소만 복사됨) 그래서 값을 어느쪽에서 바꾸던 모두 바뀌게 됨
// // 객체자체를 복사하려면 Object.assign()  을 사용해야함.

// const newUser = Object.assign({}, user)

// newUser.job = 'S/W engineer';
// user.name = 'Jane'
// user.gender = 'female'
// console.log(user);
// console.log(newUser);

// console.log( newUser === user);

// // const target = { a: 1 };
// // Object.seal(target);
// // const source = { b: 2 };
// // Object.assign(target, source); // 'b'는 추가되지 않음
// // console.log(target);  // { a: 1 }

// const obj = { a: 1 };
// Object.preventExtensions(obj);

// obj.b = 2;  // 추가되지 않음
// obj.a = 3;  // 수정 가능
// delete obj.a;  // 삭제 가능

// console.log(obj);  // {}
