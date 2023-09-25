// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return item;
//   }

//   delete(index) {
//     const item = this.data[index];
//     this.shiftItem(index);
//   }
//   shiftItem(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       [0, 2];
//       this.data[i] = this.data[i + 1];
//     }
//   }
// }

// const newArray = new MyArray();
// newArray.push("hi");
// newArray.push("you");
// newArray.push("!");
// newArray.pop();
// console.log(newArray);

//// function that reverses items of the arrays
//// check inputs

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmmm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; (i = 0); i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join("");
}
reverse("my name is john okoro");
