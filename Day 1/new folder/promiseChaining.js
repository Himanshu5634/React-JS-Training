
let myPromise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
      resolve("First promise resolved!");
    } else {
      reject("First promise rejected!");
    }
  });
  
  myPromise
    .then(result => {
      console.log(result);
      return "1 promise resolved!";
    })
    .then(result => {
      console.log(result);
      return "2 promise resolved!";
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  