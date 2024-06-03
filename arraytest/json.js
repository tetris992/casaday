// JSON <=>stringify

const people = [
  { name: 'Tae gyu lee', age: 33, job: 'Tax acountant' },
  { name: 'kim eun kyung', age: 44, job: 'Front Desk' },
  { name: 'choi jeong hwan', age: 43, job: 'software Engineer' },
];

 
console.log(people);


  const json = JSON.stringify(people) // 객체를 JSON으로 stringify
  console.log(json);

  const object = JSON.parse(json); // JSON을 객체로 parse한다. (J-> P-> Object) JPO
  console.log(object);
