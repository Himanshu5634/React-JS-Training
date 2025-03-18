function example() {
    let localVar = "I'm local";
    console.log(localVar); // Accessible
  }
  console.log(localVar); // ReferenceError: localVar is not defined
  