// using compose to create an elf class instead of inheritance
function attack(character) {
  return Object.assign({}, character, { attackfn: () => {} });
}

function Elf(name, weapon, type) {
  let elf = {
    name,
    weapon,
    type,
  };
  return getAttack(elf);
}

Elf = attack() + sleep();
Ogre = attack() + makeFort() + sleep();
