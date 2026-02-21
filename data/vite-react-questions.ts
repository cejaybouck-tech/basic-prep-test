import { QuestionSectionData } from "./all-tests";

export const viteReactQuestions: QuestionSectionData[] = [
  {
    title: "Vite & React Basics",
    questions: [
      "What is Vite and how is its dev server different from webpack-dev-server or CRA?",
      "Why is Vite fast? Explain native ESM, dependency pre-bundling, and cold starts.",
      "What trade-offs come with Vite's architecture compared to traditional bundlers?",
      "How would you migrate a Create React App project to Vite?",
    ],
  },
  {
    title: "Project Setup & Configuration",
    questions: [
      "What does a typical vite.config.ts look like? What does defineConfig do?",
      "How do you configure base, resolve.alias, server.proxy, and build options?",
      "How do you split config by mode or environment?",
      "What are common pitfalls with path aliases and tsconfig paths?",
    ],
  },
  {
    title: "React Integration",
    questions: [
      "What does @vitejs/plugin-react provide (Fast Refresh, JSX transforms)?",
      "When would you use the SWC variant (@vitejs/plugin-react-swc) and why?",
      "How do you configure React refresh boundaries to preserve state?",
      "How do you enable React profiling builds in Vite?",
    ],
  },
  {
    title: "Dev Server, HMR & DX",
    questions: [
      "How does HMR work in Vite and what can break HMR state preservation?",
      "How do you customize the error overlay and server proxy for APIs?",
      "What is dependency pre-bundling and when do you need optimizeDeps config?",
      "How do you debug module graph or circular imports in Vite?",
    ],
  },
  {
    title: "Env Variables & Modes",
    questions: [
      "How do .env, .env.development, .env.production, and .env.local files work?",
      "Why must env vars be prefixed with VITE_, and how do you access them?",
      "What does import.meta.env.MODE do, and how do you add custom prefixes?",
      "How do you safely type env variables in TypeScript?",
    ],
  },
  {
    title: "Build, Bundling & Optimization",
    questions: [
      "How does Vite use Rollup under the hood for builds?",
      "How do you control code splitting, dynamic imports, and manualChunks?",
      "What minifiers are available (esbuild vs terser) and when to choose each?",
      "How do you analyze bundle size and fix large vendor chunks?",
    ],
  },
  {
    title: "Assets, CSS & Tailwind",
    questions: [
      "How are assets handled from src and public/ (hashing, inlining thresholds)?",
      "How do CSS Modules, PostCSS, and preprocessors (Sass/Less) work in Vite?",
      "How do you set up TailwindCSS with Vite and enable JIT features?",
      "How do you avoid FOIT/FOUT and configure font loading with Vite?",
    ],
  },
  {
    title: "Testing & Tooling",
    questions: [
      "How do you set up Vitest with React Testing Library and jsdom?",
      "What tsconfig and alias considerations exist for test runs?",
      "How do you configure ESLint/Prettier with a Vite React project?",
      "How do you run type-checking separately from vite build?",
    ],
  },
  {
    title: "SSR, SSG & Routing Integration",
    questions: [
      "What options exist for SSR with Vite + React (custom server, frameworks)?",
      "How do you wire up Vite's createServer for SSR dev and use the build manifest in prod?",
      "What are caveats with RSC (React Server Components) and plain Vite?",
      "How do you integrate client-side routing (react-router) with Vite?",
    ],
  },
  {
    title: "Deployment & Best Practices",
    questions: [
      "What does the production build output look like and how do you host it?",
      "How do you configure base path for subfolder deployments?",
      "How do you handle CSP, asset hashing, and long-term caching with Vite?",
      "What best practices keep DX fast while ensuring small prod bundles?",
    ],
  },
];
