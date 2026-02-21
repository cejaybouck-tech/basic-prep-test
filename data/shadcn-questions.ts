import { QuestionSectionData } from "./all-tests";

export const shadcnQuestions: QuestionSectionData[] = [
  {
    title: "Fundamentals & Philosophy",
    questions: [
      "What is shadcn/ui and how does it differ from a component library like MUI or Chakra?",
      "Why is it described as 'copy-paste' components? What are the benefits and trade-offs?",
      "How do Radix UI primitives fit into shadcn/ui?",
      "How do you decide between keeping utilities inline vs extracting components?",
    ],
  },
  {
    title: "Installation & Setup",
    questions: [
      "How do you install and initialize shadcn/ui in a Next.js + Tailwind project?",
      "What command(s) are used to add components and what do they generate?",
      "Where do components live in the repo and how are they updated over time?",
      "What are common pitfalls during setup (tailwind config, CSS variables, fonts)?",
    ],
  },
  {
    title: "Styling System & Design Tokens",
    questions: [
      "How does shadcn/ui use Tailwind + CSS variables for theming?",
      "Where are color tokens defined and how do you customize them?",
      "How do you implement light/dark themes and support system preference?",
      "What is the recommended way to handle spacing, radius, and typography scales?",
    ],
  },
  {
    title: "Components & Variants (cva)",
    questions: [
      "What is class-variance-authority (cva) and how is it used in shadcn/ui?",
      "How do you add new variants/sizes to an existing component?",
      "How do you compose variants across components without duplication?",
      "How do you keep class strings maintainable (cn utility, clsx, tailwind-merge)?",
    ],
  },
  {
    title: "Accessibility & Radix",
    questions: [
      "How do Radix primitives help ensure a11y (focus management, ARIA)?",
      "What are common a11y considerations when customizing Dialog, Menu, or Combobox?",
      "How do you test keyboard navigation and focus traps?",
      "How do you ensure color contrast remains AA compliant when theming?",
    ],
  },
  {
    title: "Forms & Validation",
    questions: [
      "How do you build forms with shadcn/ui + react-hook-form + zod?",
      "What patterns help with field-level validation messages and states?",
      "How do you structure reusable form components (Form, FormField, FormItem, FormMessage)?",
      "How do you handle async form submissions with loading and error states?",
    ],
  },
  {
    title: "Next.js Integration",
    questions: [
      "How do you use shadcn/ui in Server vs Client Components?",
      "What hydration pitfalls can occur (portals, modals) and how to avoid them?",
      "How do you organize shared UI in the app/ directory with layouts and slots?",
      "How do you dynamically import heavy components to reduce initial JS?",
    ],
  },
  {
    title: "Theming & Customization Patterns",
    questions: [
      "How do you implement multi-brand theming (per-tenant theme switching)?",
      "How can CSS variables be scoped to a section or subtree?",
      "What is the best way to package custom components for reuse across repos?",
      "How do you maintain consistency while allowing product teams to extend components?",
    ],
  },
  {
    title: "Performance & DX",
    questions: [
      "How do you keep bundle size small when using shadcn/ui?",
      "What strategies help avoid Tailwind class bloat?",
      "How do you profile interaction performance for complex components (e.g., Combobox)?",
      "What linting or codegen aids keep variants and classnames consistent?",
    ],
  },
  {
    title: "Best Practices & Upgrades",
    questions: [
      "How do you track upstream changes and safely update copied components?",
      "What conventions do you use for folder/file naming and exports?",
      "How do you write tests for UI components that rely on Radix behavior?",
      "Common pitfalls when rolling out a design system with shadcn/ui?",
    ],
  },
];
