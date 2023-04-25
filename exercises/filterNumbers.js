// Write a function that filters out numbers from a list.
//questions: Should my function filter strings that contain number: Yes

//typeof NaN returns "number"!! It's a trap. This approach doesn't work
const filterNumbers = (arr) => {
    const filteredArray = [];
    for (let el of arr) {
        if (typeof el !== "number") filteredArray.push(el);
    }
    return filteredArray;
};
// };

// isNaN('') //false
// isNaN(true) //false
// isNaN(null) // false

function filterNumbers2(arr) {
    const filteredArray = [];
    for (let el of arr) {
        if (
            isNaN(el) === true ||
            (typeof el === "string" && el.trim().length === 0) ||
            el === true ||
            el === null ||
            typeof parseInt(el) === NaN
        ) {
            filteredArray.push(el);
        }
    }
    return filteredArray;
}

console.log(
    filterNumbers2([
        1,
        "2",
        "   ",
        NaN,
        Number.POSITIVE_INFINITY,
        66,
        "ab1",
        false,
        null,
    ])
);
