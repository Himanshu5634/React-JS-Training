function outer() {
    let outerVar = 'I am outside!';
    console.log("i am inside!");
    
    return function inner() {
      console.log(outerVar);
    }
  }
  const closure = outer();
  closure()
  //   or
  // outer()
  