// //call apply(배열을 매개변수) bind

// const nana = {
//   name: 'Nana',
//   occupation: 'actor',
// };

// const lee = {
//   name: 'Mr.Tae_gyu',
//   occupation: 'taxaccountant',
// };

// function showThisName() {
//   console.log(`Hi, ${this.name} nice meet you.`);
// }

// function update(birthYear, occupation) {
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// }
// const updateNana = update.bind(nana);
// updateNana(1982, 'Star')

// update.apply(nana, [1999, 'police']);
// update.call(lee, 1988, 'doctor')
// console.log(lee);
// console.log(nana);

// const nums =[2, 4, 12, 2, 33, 6,19]
// const minNum = Math.min.apply(null, nums);
// const maxNum = Math.max.call(null, ...nums);

// console.log(minNum);
// console.log(maxNum);

const user = {
  name: 'jin',
  showName: function () {
    console.log(`Hello. ${this.name}!`);
  },
};

let fn = user.showName; // this를 잃어버렸다.
fn(); //Hello. undefined!

fn.call(user); //1
fn.apply(user); //2
const bound = fn.bind(user); //3
bound();
