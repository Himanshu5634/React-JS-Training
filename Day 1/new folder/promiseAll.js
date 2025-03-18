// Promise.all checks if every Promise resolve or give error in rejected
let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'First result'));
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Second rejected!'));
let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'Third result'));

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // Error: Second rejected!
  })
  .catch(error => {
    console.error("Error:", error);
  });
