import { QuestionSectionData } from "./all-tests";

export const javascriptQuestions: QuestionSectionData[] = [
  {
    title: "Fundamentals & Core Concepts",
    questions: [
      "What are the primitive data types in JavaScript?",
      "Explain the difference between var, let, and const.",
      "What is hoisting, and how does it work for variables and functions?",
      "Explain the difference between == and ===.",
      "What is the typeof operator, and what are its quirks (e.g. typeof null)?",
      "What are truthy and falsy values in JavaScript?",
      "Explain type coercion — when does it happen and how can it cause bugs?",
      "What is the difference between undefined and null?",
      "How does JavaScript handle pass-by-value vs pass-by-reference?",
      "What is the temporal dead zone (TDZ)?",
    ],
  },
  {
    title: "Functions & Scope",
    questions: [
      "What is the difference between function declarations and function expressions?",
      "Explain closures — how do they work, and what are common use cases?",
      "What is an IIFE (Immediately Invoked Function Expression) and why was it used?",
      "Explain the this keyword — how is its value determined?",
      "What are arrow functions, and how do they differ from regular functions regarding this?",
      "Explain call, apply, and bind — when would you use each?",
      "What is lexical scope vs dynamic scope?",
      "What are higher-order functions? Give examples.",
      "Explain the concept of pure functions and side effects.",
    ],
  },
  {
    title: "Objects & Prototypes",
    questions: [
      "How does prototypal inheritance work in JavaScript?",
      "What is the prototype chain?",
      "Explain the difference between Object.create() and the new keyword.",
      "What are getters and setters in JavaScript?",
      "What is Object.freeze() vs Object.seal()?",
      "How does destructuring work for objects and arrays?",
      "What is the spread operator and rest parameter syntax?",
      "Explain the difference between shallow copy and deep copy.",
    ],
  },
  {
    title: "Asynchronous JavaScript",
    questions: [
      "What is the event loop, and how does it work?",
      "Explain the call stack, task queue, and microtask queue.",
      "What are callbacks, and what is callback hell?",
      "Explain Promises — states, chaining, and error handling.",
      "What is async/await, and how does it relate to Promises?",
      "What is the difference between Promise.all, Promise.allSettled, Promise.race, and Promise.any?",
      "How does setTimeout / setInterval work with the event loop?",
      "What are microtasks vs macrotasks?",
    ],
  },
  {
    title: "Arrays & Iteration",
    questions: [
      "Explain map, filter, reduce, and forEach — when would you use each?",
      "What is the difference between for...in and for...of?",
      "How do find, findIndex, some, and every work?",
      "What is Array.from() and when is it useful?",
      "Explain flat and flatMap.",
      "How does sort work in JavaScript, and what are its gotchas?",
    ],
  },
  {
    title: "ES6+ Features",
    questions: [
      "What are template literals and tagged templates?",
      "Explain Symbols — what are they and when would you use them?",
      "What are Map and Set, and how do they differ from plain objects and arrays?",
      "What is WeakMap and WeakSet, and why do they exist?",
      "Explain iterators and generators (function*).",
      "What are modules in JavaScript (import/export vs CommonJS require)?",
      "What is optional chaining (?.) and nullish coalescing (??)? ",
      "Explain Proxy and Reflect — what are they used for?",
    ],
  },
  {
    title: "Error Handling & Debugging",
    questions: [
      "How does try/catch/finally work in JavaScript?",
      "What are the different Error types in JavaScript?",
      "How do you handle errors in async code (Promises and async/await)?",
      "What is a stack trace, and how do you read one?",
      "Explain the difference between throwing errors and returning error values.",
    ],
  },
  {
    title: "DOM & Browser APIs",
    questions: [
      "What is the DOM, and how does JavaScript interact with it?",
      "Explain event bubbling, capturing, and delegation.",
      "What is the difference between addEventListener and inline event handlers?",
      "How does event.preventDefault() differ from event.stopPropagation()?",
      "What are Web APIs like localStorage, sessionStorage, and cookies — when to use each?",
      "What is the Fetch API, and how does it differ from XMLHttpRequest?",
    ],
  },
  {
    title: "Performance & Memory",
    questions: [
      "How does garbage collection work in JavaScript?",
      "What are memory leaks, and what are common causes?",
      "Explain debouncing vs throttling.",
      "What is lazy loading, and how can it improve performance?",
      "What are Web Workers, and when would you use them?",
    ],
  },
  {
    title: "Design Patterns & Best Practices",
    questions: [
      "Explain common JavaScript design patterns (module, singleton, observer, factory).",
      "What is the difference between imperative and declarative programming?",
      "Explain functional programming concepts in JavaScript (immutability, composition, currying).",
      "What is event-driven programming?",
      "What are common security concerns in JavaScript (XSS, CSRF, eval)?",
    ],
  },
];
