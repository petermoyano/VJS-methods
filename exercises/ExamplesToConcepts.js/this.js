// let dog = {
//     name: "doggo",
//     sayName() {
//         console.dir(this.name);
//     },
// };

// const otherDog = {
//     name: "Winco",
// };

// let sayName = dog.sayName;
// sayName(); // prints out undefined because the this value is not the dog object but the global or window object
// sayName.call(otherDog);
// const DefiniteName = sayName.bind(otherDog);
// DefiniteName.call("Definite", dog);

//##############
function Dog2(name) {
    this.name = name;
}

Dog2.bark = function () {
    console.log(this.name + " says woof");
};
let fido = new Dog2("fido");
fido.bark();
