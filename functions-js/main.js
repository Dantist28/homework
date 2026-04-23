// Задача 1.

function calculateFinalPrice(basePrice, percentDiscount, taxRate) {
  const discountAmount = basePrice * (percentDiscount / 100);
  const priceAfterDiscount = basePrice - discountAmount;
  const finalPrice = priceAfterDiscount * (1 + taxRate);

  return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));

// Задача 2.

const username = prompt("Имя пользователя", "text");
const password = prompt("Пароль", "password");

function checkAccess(username, password) {
  if (username === "admin" && password === "123456") {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещён";
  }
}

alert(checkAccess(username, password));

// Задача 3.

const time = +prompt("Текущее время", "10");

function getTimeOfDay(time) {
  if (time <= 5) {
    return "Ночь";
  } else if (time <= 11) {
    return "Утро";
  } else if (time <= 17) {
    return "День";
  } else if (time <= 23) {
    return "Вечер";
  } else {
    return `"Некорректное время"`;
  }
}

alert(getTimeOfDay(time));

// Задача 4.

function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Чётных чисел нет";
}

console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));

