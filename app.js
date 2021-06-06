//synchronous javascript

// const anotherFunction = () => {
//   console.log('Inside another function..');
//   console.log('Do something!');
// };

// console.log('Start');

// //calling anotherFunction()
// anotherFunction();

// console.log("Adding end from remote..")

// Asynchronous code
console.log('Start..');

setTimeout(() => {
  console.log('We are in the timeout...');
}, 2000); // this code runs only after 2 seconds..

console.log('End...');
