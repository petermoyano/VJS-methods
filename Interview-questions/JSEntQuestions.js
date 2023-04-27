const questions = [
    {TypeScript: true,
    "What are 3 class modifiyers and what do they do?": "Public(available everywhere), private (available inside the class only), and private (available for choldren classes also)"
    },
    {
        "What are the 4 principles of OOP? Explain breefly each one.": 
        "Inheretance (classes can use extends), encapsulation (hiding functionality, use closures or private class fields), Polymorphism (objects can take many forms, use method overloading [methods with same names but different arguments] or overriding [redefine a method coming from a parent class]) and abstraction (use abstract classes ignoring non-essential details)"
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
        "Give an example of a HOF in JavaScript": "",
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
