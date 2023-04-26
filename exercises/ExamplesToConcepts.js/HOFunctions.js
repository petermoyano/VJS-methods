function timer(cb) {
    return function (...args) {
        const then = Date.now();
        const results = cb.apply(null, args);
        const now = Date.now();
        console.log(`${now - then}ms`);
        return results;
    };
}

function fibonacci(n) {
    if (n === 0) return 0;
    s;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const wrapper = (n) => {
    return fibonacci(n);
};

let total = 0,
    count = 1;
while (total <= 10) {
    total += count;
    count += 1;
}
console.log(total);
