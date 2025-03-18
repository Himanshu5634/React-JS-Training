let promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'First result'));
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Second result'));
let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'third result'));

Promise.race([promise1, promise2,promise3])
  .then(result => {
    console.log(result); // 'Second result'
  })
  .catch(error => {
    console.error("Error:", error);
  });
