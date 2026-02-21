import { QuestionSectionData } from "./all-tests";

export const typescriptQuestions: QuestionSectionData[] = [
  {
    title: "Fundamentals & Core Concepts",
    questions: [
      "What is TypeScript, and what advantages does it offer over plain JavaScript?",
      "Explain the difference between static typing and dynamic typing.",
      "What are the basic types in TypeScript (string, number, boolean, any, unknown, void, never)?",
      "What is the difference between any and unknown?",
      "When should you use never, and what does it represent?",
      "What is type inference, and how does TypeScript infer types?",
      "Explain the difference between type aliases and interfaces.",
      "When should you use a type alias vs an interface?",
      "What is structural typing (duck typing) in TypeScript?",
      "How does TypeScript compile to JavaScript, and what is the role of tsconfig.json?",
    ],
  },
  {
    title: "Types & Type System",
    questions: [
      "What are union types and intersection types?",
      "Explain literal types and how they are useful.",
      "What are tuple types, and how do they differ from arrays?",
      "What are enums in TypeScript, and what are the differences between numeric and string enums?",
      "What is const assertion (as const), and when would you use it?",
      "Explain type narrowing and type guards (typeof, instanceof, in, custom type guards).",
      "What is a discriminated union, and how does it help with type safety?",
      "What is the difference between type assertions (as) and type casting?",
      "Explain the non-null assertion operator (!).",
      "What is the satisfies operator, and when would you use it?",
    ],
  },
  {
    title: "Generics",
    questions: [
      "What are generics, and why are they useful?",
      "How do you create a generic function, interface, or class?",
      "What are generic constraints (extends keyword)?",
      "Explain the difference between <T> and <T extends SomeType>.",
      "What are default generic types?",
      "How do you use multiple type parameters?",
      "What is the infer keyword, and how is it used in conditional types?",
    ],
  },
  {
    title: "Utility Types",
    questions: [
      "Explain Partial<T>, Required<T>, and Readonly<T>.",
      "What are Pick<T, K> and Omit<T, K>?",
      "Explain Record<K, T> and when you would use it.",
      "What are Exclude<T, U> and Extract<T, U>?",
      "What is ReturnType<T> and Parameters<T>?",
      "What is NonNullable<T>?",
      "How would you create your own custom utility type?",
    ],
  },
  {
    title: "Advanced Types",
    questions: [
      "What are mapped types, and how do they work?",
      "Explain conditional types (T extends U ? X : Y).",
      "What are template literal types?",
      "What are index signatures and index access types?",
      "Explain keyof and typeof operators in a type context.",
      "What are recursive types, and when would you use them?",
      "What is declaration merging, and how does it work with interfaces?",
    ],
  },
  {
    title: "Functions & Overloads",
    questions: [
      "How do you type function parameters and return values?",
      "What are function overloads in TypeScript?",
      "Explain the difference between void and undefined as return types.",
      "How do you type callbacks and higher-order functions?",
      "What is the this parameter in TypeScript functions?",
      "How do you type rest parameters and destructured parameters?",
    ],
  },
  {
    title: "Classes & OOP",
    questions: [
      "How do access modifiers (public, private, protected, readonly) work in TypeScript?",
      "What is the difference between private and # (ECMAScript private fields)?",
      "What are abstract classes and abstract methods?",
      "How do interfaces work with classes (implements keyword)?",
      "What are parameter properties in TypeScript constructors?",
      "Explain the difference between static and instance members.",
    ],
  },
  {
    title: "Modules & Configuration",
    questions: [
      "How does TypeScript module resolution work?",
      "What is the difference between import type and regular import?",
      "What are declaration files (.d.ts), and when do you need to write them?",
      "What is the @types scope, and how does DefinitelyTyped work?",
      "Explain key tsconfig.json options (strict, target, module, paths, baseUrl).",
      "What is the difference between strict mode sub-options (strictNullChecks, noImplicitAny, etc.)?",
    ],
  },
  {
    title: "Error Handling & Patterns",
    questions: [
      "How do you type errors in catch blocks?",
      "What are type assertion functions (asserts keyword)?",
      "How do you handle nullable types safely?",
      "What are branded/nominal types, and when would you use them?",
      "How do you type third-party libraries that lack type definitions?",
    ],
  },
  {
    title: "Best Practices & Real-World Usage",
    questions: [
      "When is it acceptable to use any, and what are safer alternatives?",
      "How do you gradually migrate a JavaScript project to TypeScript?",
      "What are common TypeScript anti-patterns to avoid?",
      "How does TypeScript work with React (typing props, state, hooks, events)?",
      "What is the difference between .ts and .tsx files?",
      "How do you balance type safety with developer productivity?",
    ],
  },
];
