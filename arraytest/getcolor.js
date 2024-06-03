function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());

// const numbers = [];
// for (let i = 0; i < 16; i++) {
//   numbers.push(Math.floor(Math.random() * 16));
// }
// result = numbers.sort((a, b) => a - b);
// console.log(result);
// const array = new Set(result);
// console.log(array);
