const questions = [
    {
        CSS: true,
        "What are the 5 possible states of the position property?":
            "static (default), relative, absolute, fixed (you always see it), sticky (mix between absolute and fixed)",
    },
    {
        React: true,
        "What is the purpose of the npm manager. Why do we need it?":
            "It's used to install and manage dependencies, like React or Next",
    },
    {
        CSS: true,
        "Name 2 examples of pesudo-classes and pseudo-elements":
            ":hover and :focus. ::before, ::after and ::first-line",
    },
    {
        "What are the 3 parts of a JWT?":
            "header, payload and signature. They are not encrypted! Everyone can see the content of the payload.",
        React: true,
    },
    {
        React: true,
        "Can you explain the 4 steps for an app to use JWT?":
            "1- The react app asks for the JWT, 2- The auth server provides it, 3- The app stores the JWT and re sends it with all requests, 4- The back end app verifies the JWT using the public key",
    },
    {
        CSS: true,
        "What is the difference between inline and inline-block?": "",
    },
    {
        CSS: true,
        "What are the possible values of the display property?":
            "block (respects width and height), inline (ignores width and height), inline-block (side-by-side and respects width and height), none, flex, inline-flex, grid, inline-grid, table, and many many more",
    },
    { JavaScript: true, "What does the new keyword does?": "" },
    {
        JavaScript: true,
        "What is the difference between .bind(), .call() and .apply() methods when using the this keyword?":
            ".bind() creates a ne function that has a permanent value of this. Apply and call both call the function with the specified value of this but it's a one time thing. Apply accepts an array of arguments while .call accepts them individually. The value of this is defined uppon function execution!",
    },
    {
        "What is an implicit global variable":
            "When you skip var, let or const (by mistake) your variable is in the global scope",
        JavaScript: true,
    },
    {
        "What does 'use strict does in JavaScript?":
            "Makes some simple mistakes an error: Accessing a variable before definition, accessing a property in an object that does not exist, this is undefined unless explicitly defined",
        JavaScript: true,
    },
    {
        "Breefly explain how promises are made and handled.":
            "They are created with the new keyword, and the callback when creating it recieves 2 parameters functions (rersolve and reject). When the promise is consumed, the first state is pending and then it can change to fullfilled or rejected. You then call .then (recieves data) and .catch (recieves error) on it, to execute a callback in each case. Whatever resolve returns will be available for .then, and same thing with reject() and .error",
        JavaScript: true,
    },
    {
        "Name 2 key differences between var vs (let and const).":
            "Variables declared with var get hoisted and are funciton scoped. With let and const they don't get hoisted and are block scoped",
        Javascript: true,
    },
    {
        "What are the 7 primitive data types in JavaScript?":
            "string, number, boolean, null, undefined, BigInt, symbol",
        JavaScript: true,
    },
    {
        "Define scope in 2 words":
            "Variable visibility or context of execution",
    },
    {
        "What are the 5 falsy values of JavaScript":
            "0, false, '', null, undefined, NaN",
    },
    {
        "What are th 5 SOLID principles of OOP?": `Single responsibility(a class should do one thing only), Open-closed (open for extension and closed for modification, Liskov subsitution (subclasses should be subsituble for parent classes), Interface segregation(classes should not inherit methods or properties that they won't use), Dependency inversion (abstractions should not depend on details, but details should depend on abstracions)`,
    },
    {
        TypeScript: true,
        "What are 3 class modifiyers and what do they do?":
            "Public(available everywhere), private (available inside the class only), and private (available for choldren classes also)",
    },
    {
        JavaScript: true,
        "What are the 4 principles of OOP? Explain breefly each one.":
            "Inheretance (classes can use extends), encapsulation (hiding functionality, use closures or private class fields), Polymorphism (objects can take many forms, use method overloading [methods with same names but different arguments] or overriding [redefine a method coming from a parent class]) and abstraction (use abstract classes ignoring non-essential details)",
    },
    {
        "What does response.json() does":
            "Returns a promise that resolves to a JavaScript object. It parses the json text from the body of the response int  a JavaScript object",
        JavaScript: true,
    },
    {
        "What are closures in JavaScript?":
            "A closure is a function that has access to an outer enclosing funcion scope, even after the outer function has returned",
        JavaScript: true,
    },
    {
        "Give an example of a HOF in JavaScript":
            "Array.map() and Array.filter()",
        JavaScript: true,
        Excercise: true,
    },
    {
        "What is the Virtual Dom":
            "Before react updates the DOM it will compare changes with the Virtual DOM and update only the differences. It is used to minimize changes that need to be made in the acutal DOM",
        React: true,
    },
    {
        "How can you manipulate directly the HTML in React?":
            "By using the useRef hook, which returns a mutable ref object, that you can use to reference a DOM element that persists across re-renders.",
        React: true,
    },
    ,
    {
        React: true,
        "Explain how the useRef hook is used.":
            "You create your ref object by calling useRef, then you reference DOM element in your JSX and then change the current.innerHTML (for example) property of the ref object",
    },
    {
        "What is state?": "",
        React: true,
    },
    {
        "What is an updater function in react":
            "You pass a function to setState instead of a value. The updater function will recieve the old state and react will run them in a queue, one at a time",
        React: true,
    },
    {
        "How does react compare old and new values of state, and why does it compares in the first place":
            "Object.is comparison, and if true skips re-rendering. It does it for performance reasons",
        React: true,
    },
    {
        "Does react batch state updates?":
            "Yes, after all event handlers have run, and called their setState functions. This is to prevent multiple re-renders during one event",
        React: true,
    },
    {
        " What is a synthetic event?":
            "It's a wrapper for regular events that allows react to be faster(event pooling) and more reliable (stable API for browser support)",
        React: true,
    },
    {
        "What happens if a key changes for a component?":
            "React will re-render it and all it's children. Great way to 'reset a component to its original state",
        React: true,
    },
    {
        "What are the bennefits of syntetic events?":
            "Cross browser support, enables event pooling (reusing events for perfomance, use e.persist() to access the event properties in consolo, otherwise they will be turn to null)",
        React: true,
    },
    {
        "The docs recommend setting state inside of...": "Event handlers",
        React: true,
    },
    {
        "Besides state, or props changing there are 2 ways to make a component re-render":
            "Pass a different key or execute an empty return statement",
        React: true,
    },
    {
        "Name a few techniques to optimize react performance":
            "React.suspense, useMemo, useCallback, Lazy loading components, using react fragments",
        React: true,
    },
    {
        "What is reconciliation?":
            "The process of react comparing virtual dom after a prop or component changes to see if a re-render is necesary",
        React: true,
    },
    {
        "What are HOC?":
            "A component that returns a new component. Some use cases are: Conditionally rendering components, changing the styles of components, showing a loader while data is being fetched.",
        React: true,
    },
    {
        "What does typeof NaN returns": "typeof NaN returns 'number'!!",
        React: true,
    },
];

console.log(questions.length);
