// 1. Write a function the reverses a string.
const reverseString = (str) => {
  const reverseWord = [];
  for (let letter of str) {
    reverseWord.unshift(letter);
  }
  return reverseWord.join("");
};

function reverseString2(str) {
  const reverseWord = [];
  for (let i = str.length; i > 0; i--) {
    reverseWord.push(str[i - 1]);
  }
  return reverseWord.join("");
}

console.log(reverseString2("Solvd"));
console.log(reverseString2("menem"));
console.log(reverseString("Solvd"));
console.log(reverseString("menem"));
