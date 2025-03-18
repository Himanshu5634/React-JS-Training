console.log(a); // undefined
var a = 5;


// Temporal Dead Zone
// The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In the Temporal Dead Zone, you can't access the variable before it is declared.

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b;
