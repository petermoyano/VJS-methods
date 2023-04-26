// A closure is a function that has access to an outer enclosing function scope, even after the outer function has returned.
function outerFunc() {
    const companyName = "Solvd";
    const innerFunc = () => {
        console.log(companyName);
    };
    return innerFunc;
}
const compName = outerFunc();
console.log(compName);
