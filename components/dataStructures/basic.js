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

function reverse2(str) {
  return str.split("").reverse("").reverse().join("");
}
const reverse3 = (str) => [...str].reverse().join("");
reverse("my name is john okoro");

// mergeSortedArrays
function mergeSortedArrays(array1, array2) {
  const mergesArray = [];
  let array1Item = array1[0];
  let array2item = array2[0];
  // check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2item) {
    if (array1Item < array2item) {
      mergesArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergesArray.push(array2Item);
      array2item = array2[j];
      j++;
    }
  }

  return mergesArrayed;
}
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
