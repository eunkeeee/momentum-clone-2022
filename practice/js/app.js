// variable const: could never be changed

// Sol1
// const a = 5;
// const b = 2;
// const myName = "eunkeee";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// Sol2 let: could be changed
let myName = "eunkeee";
console.log("hello " + myName);
myName = "eunkee cho";
console.log("your new name is " + myName);

// Boolean: True of False
const amIFat = true;
console.log(amIFat);

// null: nothing, never happens automatically
const whatIsThis = null;
console.log(whatIsThis);

// undefined: creating a variable but not defined
let something;
console.log(something);

// array: list of data
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);
daysOfWeek.push("sun");
console.log(daysOfWeek[6]);

const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);

const player = {
  name: "Nico",
  height: 167,
  points: 10,
  handsome: false,
};
console.log(player);
// 두 가지 방법
console.log(player["name"]);
console.log(player.height);

function sayHello(nameOfPerson, age) {
  console.log("Hello? my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("eunkee", 22);

function plus(a, b) {
  console.log(a + b);
}
plus(1, 1);

function divide(a, b) {
  console.log(a / b);
}
divide(98, 20);

const player2 = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("Hello! " + otherPersonsName + " nice to meet you");
  },
};
console.log(player2.name);
player2.sayHello("lynn");

const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  times: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};
calculator.plus(5, 2);
calculator.minus(5, 2);
calculator.times(5, 2);
calculator.divide(5, 2);
calculator.power(5, 2);
console.log(calculator);

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }
// const krAge = calculateKrAge(age);
// console.log(krAge);

// prompt: Python의 input과 같지만 현재 사용하지 않음 => 입력값은 string
// let age = prompt("How old are you?");
// console.log(typeof age);
// console.log(typeof parseInt(age));

const age = parseInt(prompt("How old are you?"));
// console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  // condition === Ture
  console.log("Please write a real positive number.");
} else if (age < 18) {
  console.log("Your are too young.");
} else if (age >= 18 && age <= 70) {
  console.log("You can drink.");
} else if (age > 70 && age <= 80) {
  console.log("You should exercise.");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}
