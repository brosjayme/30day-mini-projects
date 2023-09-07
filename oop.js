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

//es6 Class
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
}
Elf.prototype.attack = function () {
  return "attack with" + this.weapon;
};

const peter = new Elf("peter", "stones");
const sam = new Elf("sam", "fire");
sam.name;
