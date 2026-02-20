export interface QuestionSectionData {
  title: string
  questions: string[]
}

export const reactQuestions: QuestionSectionData[] = [
  {
    title: "Fundamentals & Core Concepts",
    questions: [
      "What is React, and what problem does it solve?",
      "What are the major features of React?",
      "What is JSX, and how does it actually work under the hood?",
      "Explain the Virtual DOM — how does it differ from the real DOM, and why is it useful?",
      "What is reconciliation in React?",
      "What is the difference between a React Element, a React Node, and a React Component?",
      "What are React Fragments, and when would you use them?",
      "What is the purpose of the key prop in lists, and why is using array index as key usually a bad idea?",
      "Explain the difference between controlled and uncontrolled components.",
      "How does one-way data flow work in React?",
    ],
  },
  {
    title: "Components & Composition",
    questions: [
      "What are the differences between functional and class components?",
      "When would you still choose a class component over a functional one?",
      "Explain props vs state — when to use each?",
      "What are props drilling and how can you avoid it?",
      "What are higher-order components (HOCs), render props, and compound components? When would you choose one pattern over the others?",
      "What are React Portals and typical use cases?",
      "How do you create reusable layouts or compound components?",
    ],
  },
  {
    title: "State & Hooks",
    questions: [
      "Explain the rules of hooks.",
      "How does useState work internally? Why can't you call setState multiple times in the same function and expect batched behavior every time?",
      "What is the functional update form of setState and when is it necessary?",
      "Explain useEffect completely: cleanup, dependencies, common mistakes, and how it replaces lifecycle methods.",
      "What problems does useEffect with empty dependency array solve vs. with dependencies?",
      "When should you use useLayoutEffect instead of useEffect?",
      "Explain useMemo vs useCallback — when to use each and why they matter for performance.",
      "What is useReducer, and when is it better than multiple useState calls?",
      "Explain useRef — common use cases beyond DOM access.",
      "What is useImperativeHandle and forwardRef?",
      "How do custom hooks improve code reuse?",
    ],
  },
  {
    title: "Performance & Optimization",
    questions: [
      "How can you prevent unnecessary re-renders in React?",
      "What tools can you use to debug performance issues in a React app?",
      "Explain memoization in React (React.memo, useMemo, useCallback).",
      "When does a component re-render? (props, state, context, parent, hooks)",
      "What causes wasted renders, and how do you identify/fix them?",
      "Explain the React Compiler (React Forget) — what problem does it solve?",
    ],
  },
  {
    title: "Forms & Events",
    questions: [
      "How do you handle forms in React?",
      "Explain controlled form components vs uncontrolled + refs.",
      "What are the improvements to forms in React 19 (Actions, pending state, etc.)?",
      "How would you implement debouncing or throttling on input events?",
    ],
  },
  {
    title: "Advanced & Modern React (React 18+ / 19)",
    questions: [
      "What are the new features in React 19?",
      "Explain React Server Components (RSC) — benefits and limitations.",
      "What is the use hook in React 19?",
      "What are Actions in React 19, and how do they work with forms?",
      "Explain Suspense — how has it evolved, and what can it suspend?",
      "What is concurrent rendering / React 18's concurrent features?",
      "Explain startTransition, useTransition, and useDeferredValue.",
      "What is useOptimistic and typical use cases?",
      "How do streaming SSR and selective hydration work?",
    ],
  },
  {
    title: "Context & State Management",
    questions: [
      "What is React Context, and when should you use it?",
      "What are the downsides of overusing Context?",
      "How would you structure a medium/large app's state (Context + useReducer vs external libraries)?",
      "When would you reach for Zustand, Jotai, Recoil, Redux, or Redux Toolkit instead of built-in tools?",
    ],
  },
  {
    title: "Lifecycle & Side Effects",
    questions: [
      "Explain the (old) class component lifecycle methods and their modern hook equivalents.",
      "What happens when keys change on a component instance?",
      "How do you fetch data in React (useEffect vs libraries vs React 19 patterns)?",
    ],
  },
  {
    title: "Routing & Ecosystem",
    questions: [
      "How does React Router work (v6+)? Explain <Outlet>, loaders, actions.",
      "What are data routers and why are they preferred in modern React Router?",
    ],
  },
  {
    title: "Testing & Best Practices",
    questions: [
      "How do you test React components (unit vs integration)?",
      "What is the testing-library/react philosophy?",
      "Common security concerns in React apps (XSS, etc.)?",
      "How do you handle code splitting and lazy loading?",
    ],
  },
]
