// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.lenth - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         const temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

function bubbleSort(array) {
  let swapped = false;

  while (!swapped) {
    swapped = true;
    for (let i = 0; i < array.lenth; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = false;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
