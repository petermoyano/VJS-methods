// Create a counter function which has increment and getValue functionality

// const counter = document.getElementsByClassName("counter")[0];
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     counter.innerHTML = (parseInt(counter.innerHTML) + 1).toString();
// });

// let count = 0;
// function AddToCount() {
//     count++;
//     console.log(count);
// }

function Counter() {
    let count = 0;
    return {
        increment(value) {
            count += value;
        },
        getValue() {
            return count;
        },
    };
}
const counter = Counter();
console.log(counter.increment(34));
console.log(counter.getValue());
console.log(counter.increment(10));
console.log(counter.getValue());
