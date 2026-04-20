// Задача 1.

for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

// Задача 2.

const number = +prompt("Введите число", 0);
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
  console.log(factorial);
}

// Задача 3.

for (let i = 1; i <= 8; i++) {
  let row = "";
  for (let j = 1; j <= 8; j++) {
    if ((i + j) % 2 === 0) {
      row += "X ";
    } else {
      row += "0 ";
    }
  }
  row += "\n";
  console.log(row);
}
