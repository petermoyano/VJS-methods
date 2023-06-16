// Purpose: Formats the questions from the JSEntQuestions.js file into the format that the database expects.
const questions = require("./JSEntQuestions.js");

const formatQuestions = (questions) => {
    let result = [];
    for (const question of questions) {
        const formattedQuestion = {};
        const deconstructedQuestion = Object.entries(question);
        for (let [key, value] of deconstructedQuestion) {
            if (typeof value === "boolean") {
                formattedQuestion.tagIds = [key];
            } else {
                formattedQuestion.title = key;
                formattedQuestion.markdown = value;
                result.push(formattedQuestion);
            }
        }
    }
    return result;
};

//questions argument: [{ question: "answer", React: true }, {...}, {...}, ..., {...}]
// =>
//should return: [["question", "answer", React], ("question2", "answer2", [2]), ...]
const formatQuestionsForDB = (questions) => {
    let result = [];
    for (const question of questions) {
        const formattedQuestion = [];
        const deconstructedQuestion = Object.entries(question);
        // [[ "question1", "answer1"], [React, true] } =>
        for (let [key, value] of deconstructedQuestion) {
            if (typeof value === "boolean") {
                formattedQuestion.push(key);
            } else {
                formattedQuestion.push(value);
                formattedQuestion.push(key);
            }
        }
        result.push(formattedQuestion);
    }
    return result;
};

const formattedQuestions = formatQuestionsForDB(questions);
console.log(formattedQuestions);

const test = [
    {
        tagIds: [3],
        title: "What are the 5 possible states of the position property?",
        markdown:
            "static (default), relative, absolute, fixed (you always see it), sticky (mix between absolute and fixed)",
    },
    {
        tagIds: [1],
        title: "What is the purpose of the npm manager. Why do we need it?",
        markdown:
            "It's used to install and manage dependencies, like React or Next",
    },
    {
        tagIds: [3],
        title: "Name 2 examples of pesudo-classes and pseudo-elements",
        markdown: ":hover and :focus. ::before, ::after and ::first-line",
    },
    {
        title: "What are the 3 parts of a JWT?",
        markdown:
            "header, payload and signature. They are not encrypted! Everyone can see the content of the payload.",
        tagIds: [1],
    },
    {
        tagIds: [1],
        title: "Can you explain the 4 steps for an app to use JWT?",
        markdown:
            "1- The react app asks for the JWT, 2- The auth server provides it, 3- The app stores the JWT and re sends it with all reques  ts, 4- The back end app verifies the JWT using the public key",
    },
    {
        tagIds: [3],
        title: "What is the difference between inline and inline-block?",
        markdown: "",
    },
    {
        tagIds: [3],
        title: "What are the possible values of the display property?",
        markdown:
            "block (respects width and height), inline (ignores width and height), inline-block (side-by-side and respects width and height), none, flex, inline-flex, grid, inline-grid, table, and many many more",
    },
    {
        tagIds: [2],
        title: "What does the new keyword does?",
        markdown: "",
    },
    {
        tagIds: [2],
        title: "What is the difference between .bind(), .call() and .apply() methods when using the this keyword?",
        markdown:
            ".bind() creates a ne function that has a permanent value of this. Apply and call both call the function with the specified value of this but it's a one time thing. Apply accepts an array of arguments while .call accepts them individually. The value of this is defined uppon function execution!",
    },
    {
        title: "What is an implicit global variable",
        markdown:
            "When you skip var, let or const (by mistake) your variable is in the global scope",
        tagIds: [2],
    },
    {
        title: "What does 'use strict does in JavaScript?",
        markdown:
            "Makes some simple mistakes an error: Accessing a variable before definition, accessing a property in an object that does notexist, this is undefined unless explicitly defined",
        tagIds: [2],
    },
    {
        title: "Breefly explain how promises are made and handled.",
        markdown:
            "They are created with the new keyword, and the callback when creating it recieves 2 parameters functions (rersolve and reject). When the promise is consumed, the first state is pending and then it can change to fullfilled or rejected. You then call .then (recieves data) and .catch (recieves error) on it, to execute a callback in each case. Whatever resolve returns will be available for .then, and same thing with reject() and .error",
        tagIds: [2],
    },
    {
        title: "Name 2 key differences between var vs (let and const).",
        markdown:
            "Variables declared with var get hoisted and are funciton scoped. With let and const they don't get hoisted and are block scoped",
        tagIds: [2],
    },
    {
        title: "What are the 7 primitive data types in JavaScript?",
        markdown: "string, number, boolean, null, undefined, BigInt, symbol",
        tagIds: [2],
    },
    {
        title: "Define scope in 2 words",
        markdown: "Variable visibility or context of execution",
        tagIds: [2],
    },
    {
        title: "What are the 5 falsy values of JavaScript",
        markdown: "0, false, '', null, undefined, NaN",
        tagIds: [2],
    },
    {
        title: "What are th 5 SOLID principles of OOP?",
        markdown:
            "Single responsibility(a class should do one thing only), Open-closed (open for extension and closed for modification, Liskov subsitution (subclasses should be subsituble for parent classes), Interface segregation(classes should not inherit methods or properties that they won't use), Dependency inversion (abstractions should not depend on details, but details should depend on abstracions)",
        tagIds: [2],
    },
    {
        tagIds: [4],
        title: "What are 3 class modifiyers and what do they do?",
        markdown:
            "Public(available everywhere), private (available inside the class only), and private (available for choldren classes also)",
    },
    {
        tagIds: [2],
        title: "What are the 4 principles of OOP? Explain breefly each one.",
        markdown:
            "Inheretance (classes can use extends), encapsulation (hiding functionality, use closures or private class fields), Polymorphism (objects can take many forms, use method overloading [methods with same names but different arguments] or overriding [redefine a method   coming from a parent class]) and abstraction (use abstract classes ignoring non-essential details)",
    },
    {
        title: "What does response.json() does",
        markdown:
            "Returns a promise that resolves to a JavaScript object. It parses the json text from the body of the response int  a JavaScript object",
        tagIds: [2],
    },
    {
        title: "What are closures in JavaScript?",
        markdown:
            "A closure is a function that has access to an outer enclosing funcion scope, even after the outer function has returned",
        tagIds: [2],
    },
    {
        title: "Give an example of a HOF in JavaScript",
        markdown: "Array.map() and Array.filter()",
        tagIds: [5],
    },
    {
        title: "What is the Virtual Dom",
        markdown:
            "Before react updates the DOM it will compare changes with the Virtual DOM and update only the differences. It is used to minimize changes that need to be made in the acutal DOM",
        tagIds: [1],
    },
    {
        title: "How can you manipulate directly the HTML in React?",
        markdown:
            "By using the useRef hook, which returns a mutable ref object, that you can use to reference a DOM element that persists across re-renders.",
        tagIds: [1],
    },
    {
        tagIds: [1],
        title: "Explain how the useRef hook is used.",
        markdown:
            "You create your ref object by calling useRef, then you reference DOM element in your JSX and then change the current.innerHTML (for example) property of the ref object",
    },
    { title: "What is state?", markdown: "", tagIds: [1] },
    {
        title: "What is an updater function in react",
        markdown:
            "You pass a function to setState instead of a value. The updater function will recieve the old state and react will run them in a queue, one at a time",
        tagIds: [1],
    },
    {
        title: "How does react compare old and new values of state, and why does it compares in the first place",
        markdown:
            "Object.is comparison, and if true skips re-rendering. It does it for performance reasons",
        tagIds: [1],
    },
    {
        title: "Does react batch state updates?",
        markdown:
            "Yes, after all event handlers have run, and called their setState functions. This is to prevent multiple re-renders during one event",
        tagIds: [1],
    },
    {
        title: " What is a synthetic event?",
        markdown:
            "It's a wrapper for regular events that allows react to be faster(event pooling) and more reliable (stable API for browser support)",
        tagIds: [1],
    },
    {
        title: "What happens if a key changes for a component?",
        markdown:
            "React will re-render it and all it's children. Great way to 'reset a component to its original state",
        tagIds: [1],
    },
    {
        title: "What are the bennefits of syntetic events?",
        markdown:
            "Cross browser support, enables event pooling (reusing events for perfomance, use e.persist() to access the event properties in consolo, otherwise they will be turn to null)",
        tagIds: [1],
    },
    {
        title: "The docs recommend setting state inside of...",
        markdown: "Event handlers",
        tagIds: [1],
    },
    {
        title: "Besides state, or props changing there are 2 ways to make a component re-render",
        markdown: "Pass a different key or execute an empty return statement",
        tagIds: [1],
    },
    {
        title: "Name a few techniques to optimize react performance",
        markdown:
            "React.suspense, useMemo, useCallback, Lazy loading components, using react fragments",
        tagIds: [1],
    },
    {
        title: "What is reconciliation?",
        markdown:
            "The process of react comparing virtual dom after a prop or component changes to see if a re-render is necesary",
        tagIds: [1],
    },
    {
        title: "What are HOC?",
        markdown:
            "A component that returns a new component. Some use cases are: Conditionally rendering components, changing the styles of components, showing a loader while data is being fetched.",
        tagIds: [1],
    },
    {
        title: "What does typeof NaN returns",
        markdown: "typeof NaN returns 'number'!!",
        tagIds: [1],
    },
];
