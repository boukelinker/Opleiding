let person = {
    name: 'Bouke',
    age: 21,
    evaluations: [7, 10, 9]
};

let someColors = ['green', 'blue', 'red'];
someColors.push('yellow');
someColors.push(200);
someColors.push({ greeting: "hi, I am an object" });

/* console.log(person);
console.log(person.name);
console.log(person['age']);
console.log(person.evaluations); //value [7, 10, 9]

console.log(someColors);
console.log(someColors.length);
console.log(someColors[0]); */
console.log(someColors[someColors.length - 1]);