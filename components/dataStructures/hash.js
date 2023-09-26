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
