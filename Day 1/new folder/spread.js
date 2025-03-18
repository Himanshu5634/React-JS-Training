// Spread operator (arrays and objects)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const person = { name: 'John', age: 30 };
const updatedPerson = { ...person, city: 'New York' };
console.log(updatedPerson); // { name: 'John', age: 30, city: 'New York' }

// Rest operator (function parameters)
function fn(...args) {
  console.log(args); // [1, 2, 3, 4]
}
console.log(fn(1, 2, 3, 4)); 
