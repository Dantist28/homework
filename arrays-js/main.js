// Задание 1.

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Задание 2.

function getUserAverageAge(users) {
  if (users.length === 0) return 0;
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

console.log(getUserAverageAge(users));

// Задание 3.

function getAllAdmins(users) {
  const admins = [];

  for (const user of users) {
    if (user.isAdmin) {
      admins.push(user);
    }
  }

  return admins;
}

console.log(getAllAdmins(users));

// Задание 4.

function first(arr, n) {
  if (n === undefined) {
    return arr.length > 0 ? [arr[0]] : [];
  }

  const result = [];
  const limit = Math.min(arr.length, n);

  for (let i = 0; i < limit; i++) {
    result.push(arr[i]);
  }

  return result;
}