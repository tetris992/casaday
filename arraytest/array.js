// 잘라낸 요소를 반환 / 원본이 수정되는 경우와 아닌 경우

let arr = [1, 2, 3, 4, 5, 6]
let spliced = arr.splice(2)
console.log(spliced); //[ 3, 4, 5, 6 ]
console.log(arr); //[ 1, 2 ] 원본 배열이 수정됨.

let arr1 = [1, 2, 3, 4, 5, 6]
let poped = arr1.pop();
console.log(poped); // 6 
console.log(arr1); // 원본 배열이 수정됨.



let arr2 = [1, 2, 3, 4, 5, 6]
let shifted = arr2.shift();
console.log(shifted);
console.log(arr2); // [ 2, 3, 4, 5, 6 ] 원본배열이 수정됨. 

//slice 원본배열이 수정되지 않음.👍

let arr3 = [1, 2, 3, 4, 5, 6]
let sliced = arr3.slice(3) 
console.log(sliced); //[ 4, 5, 6 ]
console.log(arr3); //[ 1, 2, 3, 4, 5, 6 ] 원본배열이 수정되지 않음.!!

// push
let arr4 = [1, 2, 3, 4, 5, 6]
let pushed = arr4.push(7, 8); // 7, 8을 추가하고 배열의 길이를 반환한다. 
console.log(pushed); //8 --> 배열의 길이를 반환한다. 
console.log(arr4); // 원본배열이 수정됨.



// [...array] 배열을 복사 (얕게 복사됨) 배열원본을 수정하지 않으려면 우선 배열을 복사해야함. 
let arr5 = [1, 2, 3, 4, 5, 6]
let newArr5 = [...arr5]
newArr5.push(7, 8);
console.log(newArr5); //[ 1, 2, 3, 4, 5, 6, 7, 8 ] 복사된 배열의 수정
console.log(arr5); //[ 1, 2, 3, 4, 5, 6 ] 원본배열은 수정되지 않음.
console.log(newArr5.length);


