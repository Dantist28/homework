// Задача 1.

const person = {
  name: "Роман",
  family: "Слюсарчук",
  age: 29,
  profession: "Машинист электровоза 3 класса",
  experience: 9,
};

console.log(person);

// Задача 2.

function isEmpty(object) {
  for (const key in object) {
    return false;
  }
  return true;
}

console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));

// Задача 3.

const task = {
  title: "Выучить JavaScript",
  description: "Разобраться с объектами и деструктуризацией",
  isCompleted: false,
};

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}

const updatedTask = cloneAndModify(task);

for (let key in updatedTask) {
  console.log(`${key}: ${updatedTask[key]}`);
}

// Задача 4.

const callAllMethods = (object) => {
  for (let key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
};

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

callAllMethods(myObject);
