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

// function a(num1, num2) {
//   return num1 + num2;
// }

// function b(num) {
//   return num * 2;
// }

// b(7);

// // idempotence:
// function notGood(num) {
//   return math.random(num);
// }
// notGood(5);

// // example2
// Math.abs(Math.abs(-50));

// //Imperative vs Declarative

// for (let i = 0; i < 1000; i++) {
//   console.log(i);
// }

// [1, 2, 3].forEach((item) => console.log(item));

// // immutabiliy

// const obj = { name: "john" };
// function clone(obj) {
//   return { ...obj };

//this is pure.
// }
// function updateName(obj) {
//   const obj2 = clone(obj);
//   obj2.name = "Okoro";
//   return obj2;
// }
// const updateObj = updateName(obj);
// console.log(obj, updateObj);

// //HOF
// const hof = (fn) => fn(5);
// hof(function a(x) {
//   return x;
// });
// //Closure
// const Closure = function () {
//   let count = 55;
//   return function increment() {
//     count++;
//     return count;
//   };
// };

// const getCounter = closure();
// getCounter();
// getCounter();

// //Currying
// // const mulltiply (a, b) =>a*b;
// // mulltiply(4,8);

// const curreidMultiply = (a) => (b) => a * b;
// curreidMultiply(8)(3);

// // best use of currying
// const curreidMultiplyBy8 = curreidMultiply(a)(b);

// // it can be reused in foreseeable future
// curreidMultiplyBy8(3);
// curreidMultiplyBy8(7);

// 11.Partial application

// //normal currying example
// const multiply = (a,b,c) => a*b*c;
// const curreidMultiply = (a) => (b) => (c) => a*b*c;
// curreidMultiply(3)(4)(5)

// // partial application example
// const multiply = (a, b, c) => a * b * c;
// const partialMultiplyBy6 = multiply.bind(null, 6);
// partialMultiplyBy6(4, 8);

// // memorization-----caching
//  function addTo80(n) {
//   console.log('long time')
//   return n + 80;
//  }
// addTo80(5);
//  addTo80(5);
//   addTo80(5);

// // now doing the same thing with caching

// function addTo80(n) {
//   console.log("long time");
//   return n + 80;
// }
// function memoizedAddTo80() {
//   let cache = {};
//   return function (n) {
//     if (n in cache) {
//       return cache[n];
//     } else {
//       console.log("long time");
//       cache[n] = n + 80;
//       return cache[n];
//     }
//   };
// }
// const memoized = memoizedAddTo80();

// console.log("1", memoized(4));
// console.log("2", memoized(4));

// // Compose
// // data --> fn --> data --> fn -->
// //pipe
// // fn1(fn2(fn3(50)))
// const compose = (f, g) => (data) => f(g(data))
// const pipe = (f, g) => (data) => g(f(data));
// const multiplyBy3 = (num) => num*3;
// const makePositive= (num) => Math.abs
// const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

// multiplyBy3AndAbsolute(-50)
