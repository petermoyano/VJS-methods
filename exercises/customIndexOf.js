// Write a function that finds an element inside an unsorted list.
// Example using indexOf
const customIndexOf = (arr, target) => {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
};
console.log(customIndexOf([1, 3, 5, 7, 9, 11, 14, 18, 22], 221));
