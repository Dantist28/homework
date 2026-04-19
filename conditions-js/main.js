// Задача 1.

const NUMBER = +prompt("введите число", 0);
const MOD = NUMBER % 2;

if (MOD === 0) {
  console.log("Четное число");
} else if (MOD === 1) {
  console.log("Нечетное число");
}

// Задача 2.

const AGE = +prompt("Введите возраст", 0);
const DISCOUNT = AGE < 18 ? "10" : AGE <= 65 ? "20" : "30";

console.log(`Скидка ${DISCOUNT}%`);

// Дополнительное задание.

const AGE1 = +prompt("Введите возраст", 0);
let DISCOUNT1;

switch (true) {
  case isNaN(AGE1):
    DISCOUNT1 = "Введите возраст цифрами";
    break;
  case AGE1 < 18:
    DISCOUNT1 = "10%";
    break;
  case AGE1 <= 65:
    DISCOUNT1 = "20%";
    break;
  case AGE1 > 65:
    DISCOUNT1 = "30%";
    break;
}

console.log(`Скидка ${DISCOUNT1}`);

// Задача 3.

const USERNAME = prompt("Имя пользователя", "text");
const PASSWORD = prompt("Пароль", "password");

if ((USERNAME === "admin" || USERNAME === "user") && PASSWORD === "123456") {
  alert("Доступ разрешен");
} else {
  alert("Доступ запрещен");
}

// *Задача 4.

const WEIGHT = +prompt("Вес посылки в кг", 0);
const DELIVERY_TYPE = prompt(
  "Выберите тип доставки, Стандарт, Экспресс, Премиум",
);
let PRICE;

if (WEIGHT <= 0 || isNaN(WEIGHT)) {
  alert("Некорректный вес посылки");
} else {
  PRICE = WEIGHT < 1 ? 5 : WEIGHT <= 5 ? 10 : 15;
}

let COEFFICIENT;
let isValidType = true;

switch (DELIVERY_TYPE) {
  case "Стандарт":
    COEFFICIENT = 1;
    break;
  case "Экспресс":
    COEFFICIENT = 1.5;
    break;
  case "Премиум":
    COEFFICIENT = 2;
    break;
  default:
    isValidType = false;
    alert("Неверный тип доставки");
}

if (isValidType) {
  const TOTAL_COST = PRICE * COEFFICIENT;
  alert(`Итоговая стоимость доставки: ${TOTAL_COST}$`);
}
