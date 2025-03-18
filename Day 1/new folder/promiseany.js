let promise1 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'First error'));
let promise2 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Second success'));
let promise3 = new Promise((resolve, reject) => setTimeout(reject, 100, 'third success'));

Promise.any([promise1, promise2,promise3])
  .then(result => {
    console.log(result); // 'Second success'
  })
  .catch(error => {
    console.error("Error:", error);
  });
