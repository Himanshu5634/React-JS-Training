// app.mjs (ES6 Module)

const addES6 = (a, b) => a + b;
const subtractES6 = (a, b) => a - b;

export { addES6, subtractES6 };

import { addES6, subtractES6 } from './math.js';
console.log(add(5, 3));  // Output: 8

//ComonJS

// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
module.exports = { add, subtract };

// app.js
const math = require('./math');
console.log(math.add(5, 3));  // Output: 8
