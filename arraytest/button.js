// button count

function getCountButton() {
  const button = document.getElementById('countButton');

  let count = 0;
  button.addEventListener('click', function () {
    count++;
    console.log(`${count}_times was clicked!`);
  });
}

getCountButton();

const ageButton = document.getElementById('ageButton');
let age = 3;
ageButton.addEventListener('click', () => {
    const incrementAge = () => {
        age++;
        console.log(`I am now ${age} years old`);
    };
    incrementAge();
});
