// const elf = {
//   name: "orwell",
//   weapon: "bow",
//   attack() {
//     return "attack with " + elf.weapon;
//   },
// };

// const elf2 = {
//   name: "sally",
//   weapon: "bow",
//   attack() {
//     return "attack with" + elf.weapon;
//   },
// };

// elf1.attack();

// //Factory Function
// const elffunction = {
//   attack() {
//     return "attck with" + this.weapon;
//   },
// };
// function createElf(name, weapon) {
//   const newElf = object.create(elffunction);
//   newElf.name = name;
//   newElf.weapon = weapon;
//   return {
//     name,
//     weapon,
//   };
// }

// const peter = createElf(Peter, "stones");
// // peter.attack = elffunction.attack
// peter.attack();
// const john = createElf(john, "fire");
// // john.attack = elffunction.attack

// constructor function
// function Elf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }

// Elf.prototype.attack = function() {
//   return 'attack with' + this.weapon
// }

// const peter = new Elf ('peter', 'stones')
// const sam = new Elf('sam', 'fire')
// sam.name

// //es6 Class
// class Elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
// }
// Elf.prototype.attack = function () {
//   return "attack with" + this.weapon;
// };

// const peter = new Elf("peter", "stones");
// const sam = new Elf("sam", "fire");
// sam.name;

// // This keyword
// //new binding this

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const Person = new Person("John", 55);
// person1;

// // implicit binding
// const person = {
//   name: "Karen",
//   age: 40,
//   hi() {
//     console.log("hi" + this.name);
//   },
// };

//

//OOP in React.js

//OOP Pillers

//

//no side effects
//input --> output

function a(num1, num2) {
  return num1 + num2;
}

function b(num) {
  return num * 2;
}

b(7);

// idempotence:
function notGood(num) {
  return math.random(num);
}
notGood(5);

// example2
Math.abs(Math.abs(-50));

//Imperative vs Declarative

for (let i = 0; i < 1000; i++) {
  console.log(i);
}

[1, 2, 3].forEach((item) => console.log(item));

// immutabiliy

const obj = { name: "john" };
function clone(obj) {
  return { ...obj }; //this is pure.
}
function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Okoro";
  return obj2;
}
const updateObj = updateName(obj);
console.log(obj, updateObj);

//HOF
const hof = (fn) => fn(5);
hof(function a(x) {
  return x;
});
//Closure
const Closure = function () {
  let count = 55;
  return function increment() {
    count++;
    return count;
  };
};

const getCounter = closure();
getCounter();
getCounter();
