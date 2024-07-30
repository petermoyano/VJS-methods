// What will be logegd in first example and in second example?

// let var1;
// console.log(var1);
// console.log(typeof var1);

// let var2 = null;
// console.log(var2);
// console.log(typeof var2);


// Hoisting
// //What will be logged here?
// foo = 3;
// console.log(foo);
// var foo;



// Closures
// Create a counter function which has increment and getValue functionality.
// const counter = {
//   count: 0,
//   increment() {
//     this.count += 1;
//   },
//   getValue() {
//     return this.count
//   }
// }

// console.log(counter.getValue())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.getValue())

// Create a counter function which has increment and getValue functionality.
function createCounter() {
  let count = 0;
  return {
    increment() {
      count += 1;
    },
    getValue() {
      return count;
    }
  }



