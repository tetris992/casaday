//setTimeout 일정시간이 지난이후에 함수를 실행 /  setInterval 일정간격으로 함수를 실행
// 중단하려면 clearInterval()을 사용하면 된다.!(공통)

let number = 0;

function showTime() {
  // number++;
  console.log(`Hi Guest! 접속하신지 ${number++}초가 지났습니다.`);
  if (number > 5) {
    clearInterval(tId);
  }
}

const tId = setInterval(showTime, 1000);
// setTimeout(() => {
//     clearInterval(tId);
// }, 6000);

// function printName(name) {
//   console.log(`안녕하세요. ${name}님 만나서 반가워요.`);
// }

// setTimeout(printName, 5000, 'Nana');

const tId2 = setInterval(
  (name) => {
    console.log(`안녕하세요. ${name}님 만나서 반가워요.`);
  },
  5900,
  'Nana'
);

setTimeout(() => {
  clearInterval(tId2);
}, 5950);


setTimeout(()=>{
    console.log(1);
},0)
console.log(2);