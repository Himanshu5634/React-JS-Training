const user = { name: 'John', age: null };
console.log(user.age ?? 30); // 30 (because age is null)
console.log(user.name ?? 'Unknown'); // 'John' (name is defined)
