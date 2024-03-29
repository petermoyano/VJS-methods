//Write a function that tkaes any number of arguments of type number and returns
//the sum of all the arguments.
function sum(...nums) {
    let totalSum = 0;
    for (let num of nums) {
        totalSum += num;
    }
    return totalSum;
}

function sum2() {
    let args = [...arguments];
    let totalSum = 0;
    for (let num of args) {
        totalSum += num;
    }
    return totalSum;
}

// console.log(sum2(1, 2, 3));
// console.log(sum2(10, 1000, 500));

//Write a function that takes 2 strings and returns true if the second string is in the
//first string, in a case insensitive way

function string1InString2(string1, string2) {
    return string2.toLowerCase().includes(string1.toLowerCase());
}

// console.log(string1InString2("Ana", "Anana"));
// console.log(string1InString2("Ane", "Anana"));
// console.log(string1InString2("ane", "Anane"));
// console.log(string1InString2("Arg", "argentina"));

//Write a function that takes an array of objects, and returns an array
//of the objects name property, only if that property exists
//[{name: "Peter"},{name: "Sofi", age: 2}{family: "Moians"}] => ["Peter", "Sofi"]
function giveNames(arr) {
    let names = [];
    for (let obj of arr) {
        if (obj.name !== undefined) names.push(obj.name);
    }
    return names;
}
// console.log(
//     giveNames([
//         { name: "Peter" },
//         { name: "Sofi", age: 2 },
//         { family: "Moians" },
//     ])
// );

//Write a function that prints to the console an n amount of integers with a delay of 1 second between each integer
function printNumbers(n) {
    function printI(i) {
        setTimeout(() => {
            if (i <= n && i >= 0) {
                console.log(i);
                i--;
                printI(i);
            }
        }, 1000);
    }
    if (n > 0) printI(n);
}
//printNumbers(5);

//Given a string, reverse each word in the sentence
//For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
function revWords(sentence) {
    const words = sentence.split(" ");
    const reverseWords = [];
    for (let word of words) {
        let reversedWord = [];
        for (let letter of word) {
            reversedWord.unshift(letter);
        }
        reverseWords.push(reversedWord.join(""));
    }
    return reverseWords.join(" ");
}
// console.log(revWords("Welcome to this Javascript Guide!"));

// try {
//     const newPromise = usePromise();
//     newPromise
//         .then((data) => {
//             console.log("returning data!");
//             return data;
//         })
//         .catch((error) => {
//             return error;
//         });
//     const result = consumePromise();
//     console.log(newPromise);
// } catch (error) {
//     console.log("Error from try catch!!", error);
// }

//Write a function that takes an array of numbers and returns the index of the largest number

// Write a function that accepts a string as an argument
// The function should capitalize only every other letter in the string

// The function should then return the converted string

// "" => ""
// console.log("This is my test");
const CapitalizeEveryOther = (string) => {
    const stringConstructor = [];
    for (let i = 0; i <= string.length - 1; i++) {
        if (string.indexOf(string[i], i) % 2 === 0) {
            stringConstructor.push(string[i].toUpperCase());
        } else {
            stringConstructor.push(string[i].toLowerCase());
        }
    }
    return stringConstructor.join("");
};
// console.log(CapitalizeEveryOther("hello"));
// console.log(CapitalizeEveryOther("yo eli"));
// console.log(CapitalizeEveryOther("Hello??"));

// 1. Write code to get an array of names grom a given array of users
// 2. Get back only active users
// 3. Sort users by age ascending   ====>    ["John", "Jack"]

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 18,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
        age: 30,
    },
];

// function getNames(names) {
//     const activeUsers = [];
//     const result = [];
//     for (const name of names) {
//         if (name.isActive) {
//             activeUsers.push(name);
//         }
//     }
//     const SortedNamesArray = activeUsers.sort((a, b) => {
//         return b.age - a.age;
//     });
//     for (let sortedNameObject of SortedNamesArray) {
//         result.push(sortedNameObject.name);
//     }
//     return result;
// }
// console.log(getNames(users));

// const names = users
//     .sort((user1, user2) => (user1.age > user2.age ? 1 : -1))
//     .filter((user) => user.isActive)
//     .map((user) => user.name);

// console.log(names);

// let var1;
// console.log(var1); //undefined
// console.log(typeof var1); //undefined

// let var2 = null;
// console.log(var2); //null
// console.log(typeof null); //'object'
