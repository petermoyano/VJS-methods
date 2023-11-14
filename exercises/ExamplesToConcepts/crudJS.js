let arr1 = [1, 2, 3, 4, 5];

// ########## Arrays: Deleting elements. ##########
let arr1Copy = [...arr1], arr2Copy = [...arr1], arr3Copy = [...arr1]; // true copy
let arr1SameReference = arr1; //same reference copy
// splice
let spliceReturn = arr1Copy.splice(1, 1);
// pop only works for the last element
let popReturn = arr2Copy.pop(); //
//using delete is not conveniant as it replaces de element with an empty space.
delete arr2Copy[2]
arr2Copy[2] = undefined
//you can set the length of the array and trim some elements from the end
arr2Copy.length = 2
//filter
let arr1Filter = arr3Copy.filter((e) => {
  if (arr3Copy.indexOf(e) === 1) return false;
  return true
})
console.log(Math.ceil(Math.random() * 10));
console.log(Number.MAX_VALUE > Number.POSITIVE_INFINITY)


console.log(arr1 === arr1Copy)
console.log(arr1 === arr1SameReference)
console.log(arr1)
console.log(arr1Copy)
console.log(arr2Copy)
console.log(arr3Copy)
console.log(arr1Splice)
console.log(arr1Filter)
console.log(popReturn)