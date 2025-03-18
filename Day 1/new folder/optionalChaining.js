const user = { name: 'Bob', address: { city: 'Los Angeles' } };
console.log(user?.address?.city); // 'Los Angeles'
console.log(user?.contact?.phone); // undefined
