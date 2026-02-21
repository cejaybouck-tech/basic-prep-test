import { QuestionSectionData } from "./all-tests";

export const nextjsQuestions: QuestionSectionData[] = [
  {
    title: "Fundamentals & Project Structure",
    questions: [
      "What is Next.js and how does it differ from a client-only React app?",
      "Compare the Pages Router and the App Router. When would you choose each?",
      "What is the recommended project structure in the App Router (app/ directory)?",
      "How do layouts and nested layouts work?",
    ],
  },
  {
    title: "Routing & Navigation",
    questions: [
      "How does file-system routing work in the App Router?",
      "What are dynamic routes ([id]), catch-all ([...slug]), and optional catch-all ([[...slug]])?",
      "How do you perform client-side navigation vs server-side navigation?",
      "When should you use Link vs router.push/replace?",
    ],
  },
  {
    title: "Rendering & React Server Components (RSC)",
    questions: [
      "What are Server Components vs Client Components in Next.js?",
      "How do you decide whether a component should be server or client?",
      "What are the trade-offs of RSC for data fetching and bundle size?",
      "How do you pass data from a Server Component to a Client Component?",
    ],
  },
  {
    title: "Data Fetching (App Router)",
    questions: [
      "How does the fetch API integrate with Next.js caching by default?",
      "What are revalidate, cache: 'no-store', and force-cache?",
      "How do Route Handlers (app/api/route.ts) work compared to API routes in the Pages Router?",
      "What is the difference between static rendering, dynamic rendering, and ISR in the App Router?",
    ],
  },
  {
    title: "Data Fetching (Pages Router)",
    questions: [
      "When would you still use getStaticProps/getStaticPaths/getServerSideProps?",
      "How do incremental static regeneration (ISR) and fallback modes work?",
      "How do API routes work under the Pages Router?",
    ],
  },
  {
    title: "Caching, Revalidation & Performance",
    questions: [
      "Explain Next.js caching layers (request memoization, data cache, full-route cache).",
      "How do you opt out of caching for a specific request?",
      "How does revalidateTag/revalidatePath work and when would you use them?",
      "What tools do you use to analyze performance (Lighthouse, next build output, profiling)?",
    ],
  },
  {
    title: "Middleware, Edge & Deployment",
    questions: [
      "What is Middleware and what are common use cases (auth, A/B testing, rewrites)?",
      "What are Edge Runtime constraints vs Node.js runtime?",
      "How do you configure runtime per route (edge vs node)?",
      "What are best practices for deploying Next.js (Vercel vs custom Node server)?",
    ],
  },
  {
    title: "Assets: Images, Fonts, and Metadata",
    questions: [
      "How does next/image optimize images and what are its key props?",
      "How do next/font and font optimization work?",
      "How do you configure dynamic metadata in the App Router (generateMetadata)?",
      "How do static assets in public/ differ from imports via next/image?",
    ],
  },
  {
    title: "Styling & Tailwind in Next.js",
    questions: [
      "What styling options exist (CSS Modules, Tailwind, styled-components, etc.)?",
      "How do CSS Modules work in the App Router?",
      "What are considerations for using Tailwind with Server/Client Components?",
      "How do you avoid hydration mismatches when styling conditionally?",
    ],
  },
  {
    title: "Testing, Auth, and Best Practices",
    questions: [
      "How do you test RSC and Client Components (unit/integration/E2E)?",
      "How does NextAuth (or other auth) integrate with Middleware and RSC?",
      "What patterns help avoid 'use client' bloat?",
      "Common pitfalls and debugging techniques for App Router projects?",
    ],
  },
];
