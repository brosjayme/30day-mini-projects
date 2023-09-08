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

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.name = name;
    this.weapon = weapon;
    this.type = type;
  }
  attack() {
    return "attack with" + this.weapon;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.name = name;
    this.weapon = weapon;
    this.color = color;
  }
  makeTent() {
    return "makes the best tents in world";
  }
}

const fiona = new Elf("Fiona", "ninja stars", "house");
const dolby = new Ogre("dolby", "cloth", "blue");
fiona;
