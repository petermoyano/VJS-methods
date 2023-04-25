const questions =
  [
    {
      "What is the Virtual Dom":
        "Before react updates the DOM it will compare changes with the Virtual DOM and update only the differences.",
    },
    {
      "What is state?":
        "",
    },
    {
      "What is an updater function":
        "You pass a function to setState instead of a value. The updater function will recieve the old state and react will run them in a queue, one at a time",
    },
    {
      "How does react compare old and new values of state, and why does it compares in the first place":
        "Object.is comparison, and if true skips re-rendering. It does it for performance reasons",
    },
    {
      "Does react batch state updates?":
        "Yes, after all event handlers have run, and called their setState functions. This is to prevent multiple re-renders during one event",
    },
    {
      "What is a synthetic event?":
        "It's a wrapper for regular events that allows react to be faster(event pooling) and more reliable (stable API for browser support)",
    },
    {
      "What happens if a key changes for a component?":
        "React will re-render it and all it's children. Great way to 'reset a component to its original state",
    },
    {
      "What are the bennefits of syntetic events?":
        "Cross browser support, enables event pooling (reusing events for perfomance, use e.persist() to access the event properties in consolo, otherwise they will be turn to null)",
    },
    {
      "The docs recommend setting state inside of...":
        "Event handlers",
    },
    {
      "Besides state, or props changing there are 2 ways to make a component re-render":
        "Pass a different key or execute an empty return statement",
    },
    {
      "Name a few techniques to optimize react performance":
        "React.suspense, useMemo, useCallback, Lazy loading components, using react fragments",
    },
    {
      "What is reconciliation?":
        "The process of react comparing virtual dom after a prop or component changes to see if a re-render is necesary",
    },
    {
      "What are HOC?":
        "A component that returns a new component. Some use cases are: Conditionally rendering components, changing the styles of components, showing a loader while data is being fetched.",
    },
  ];

console.log(
  questions.length
);
