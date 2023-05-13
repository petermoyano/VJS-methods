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

printNumbers(5);
