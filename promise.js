// el.addEvenListener("click", submitForm);

// // callback pyramid of doom
// movePlayer(100, "Left", function () {
//   movePlayer(400, "Left", function () {
//     movePlayer(10, "Right", function () {
//       movePlayer(330, "Left", function () {});
//     });
//   });
// });

// // best practice
// grabTweets("twitter/brosjayme", (error, brosjaymeTweets) => {
//   if (error) {
//     throwError;
//   }
//   displayTweets(brosjaymeTweets);
//   grabTweets("twitter/elonmusk", (error, elonTweets) => {
//     if (error) {
//       throwError;
//     }
//     displayTweets(elonTweets);
//     grabTweets("twitter/john", (error, johnTweets) => {
//       if (error) {
//         throwError;
//       }
//       displayTweets(johnTweets);
//     });
//   });
// });

//
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("stuff worked");
  } else {
    reject("error, it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "hii!!");
});

promise
  .then((result) => result + "!")
  .then((result2) => retult2 + "?")
  .catch(() => console.log("error!"))
  .then((result3) => {
    console.log(result3 + "!");
  });
