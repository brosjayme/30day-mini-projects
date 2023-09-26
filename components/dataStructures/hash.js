let user = {
  age: 54,
  name: "kylie",
  magic: true,
  scream: function () {
    console.log("ahhhhhh!");
  },
};

user.age; //0(1)
user.spell = "abra kadabra"; //0(1)
user.scream();

const a = new Map();
const b = new Sets(); //this is similar but it only stores the keys

// recurrence
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      return input[i];
    }
  }
  return undefined;
}

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
