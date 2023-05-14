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

//Write a function that returns a promise that resolves in 3s
function usePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random >= 0.5) {
                resolve(console.log("Promise resolved!"));
            } else
                reject((error) => {
                    console.log("error!", error);
                });
        }, 1000);
    });
}
function consumePromise() {
    const newPromise = usePromise();
    newPromise
        .then((data) => console.log(data))
        .then(console.log("this too!! more data"))
        .catch(console.error("Error!!!!, "));
}

//Write a function that takes an array of numbers and returns the index of the largest number
try {
    consumePromise();
} catch (error) {
    console.log("Error from try catch!!", error);
}
