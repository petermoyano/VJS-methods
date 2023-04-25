//The map() method creates a new array populated with the results of calling a
// provided function on every element in the calling array.
// Array.map((element, idx, arr) => {...your callback}, thisArgs)
// thisArgs is a value to call as this when executing the callback
//The length of the array is saved befor the invocation of the callbackFn
//Map doesn't mutate the original array!

// ######Using map to reformat objects in an array#########
// The following code takes an array of objects and creates a new array
//  containing the newly reformatted objects.
const kvArray =
  [
    {
      key: 1,
      value: 10,
    },
    {
      key: 2,
      value: 20,
    },
    {
      key: 3,
      value: 30,
    },
  ];

//###  Mapping an array of numbers using a function containing an argument ###
const reformattedArray =
  kvArray.map(
    ({
      key,
      value,
    }) => ({
      [key]:
        value,
    })
  );
console.log(
  reformattedArray
); // [{1: 10}, {2:20}, {3:30}]

// ###Map when undefined or nothing is returned:###
const numbers =
  [1, 2, 3, 4];
const filteredNumbers =
  numbers.map(
    (
      num,
      index
    ) => {
      if (
        index <
        3
      ) {
        return num;
      }
    }
  );
console.log(
  filteredNumbers
); //[ 1, 2, 3, undefined ]
