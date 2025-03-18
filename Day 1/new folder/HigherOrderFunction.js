// higher order function
// A higher-order function is a function that either takes a function as one of its parameters or returns another function.

function higherOrder(func) {
    return function(a, b) {
      return func(a, b);
    };
  }
  function sum(a, b) {
    return a + b;
  }
  const sumFunction = higherOrder(sum);
  console.log(sumFunction(5, 3)); // Outputs: 8
  