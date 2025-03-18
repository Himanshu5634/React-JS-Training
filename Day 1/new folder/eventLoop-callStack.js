// priority  
// console Promise setTimeout setInterval

console.log('Start');

Promise.resolve().then(() => {
  console.log('Promise 1');
}
);

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');