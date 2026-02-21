import { QuestionSectionData } from "./all-tests";

export const cssTailwindQuestions: QuestionSectionData[] = [
  {
    title: "CSS Fundamentals",
    questions: [
      "What is the difference between block, inline, and inline-block elements?",
      "Explain the CSS cascade and the role of origin and importance.",
      "What are the different units in CSS (px, em, rem, %, vw, vh, ch)? When would you use each?",
      "What is the difference between reset.css and normalize.css?",
      "How do you organize CSS for scalability and maintainability?",
    ],
  },
  {
    title: "Selectors, Specificity, and Inheritance",
    questions: [
      "How is specificity calculated? Provide examples.",
      "What are attribute selectors and pseudo-classes/pseudo-elements?",
      "How does inheritance work in CSS and which properties inherit by default?",
      "What does !important do and when (if ever) is it appropriate?",
    ],
  },
  {
    title: "Box Model & Positioning",
    questions: [
      "Explain the CSS box model and how box-sizing affects it.",
      "Compare position: static, relative, absolute, fixed, and sticky.",
      "What are stacking contexts and how does z-index work?",
      "How do margin collapsing rules work?",
    ],
  },
  {
    title: "Layout: Flexbox & Grid",
    questions: [
      "When would you choose Flexbox vs CSS Grid?",
      "Explain main axis vs cross axis in Flexbox and common properties (justify-content, align-items, flex).",
      "How do implicit vs explicit grid tracks work in CSS Grid?",
      "What are grid-template-areas and when are they useful?",
    ],
  },
  {
    title: "Responsive Design & Media Queries",
    questions: [
      "How do mobile-first vs desktop-first strategies affect media queries?",
      "When would you use container queries vs media queries?",
      "How do you handle responsive typography and spacing?",
      "What is the difference between min-width and max-width breakpoints?",
    ],
  },
  {
    title: "Typography, Colors, and Visuals",
    questions: [
      "What are best practices for loading web fonts (FOIT/FOUT mitigation)?",
      "How do you manage color systems (HSL vs HEX vs RGB) and contrast accessibility?",
      "Explain filters and backdrop-filter, and common use cases.",
      "How do you create responsive images (srcset, sizes, object-fit)?",
    ],
  },
  {
    title: "Transitions, Transforms, and Animations",
    questions: [
      "How do CSS transitions differ from CSS animations?",
      "What is will-change and how can it help or hurt performance?",
      "When do transforms trigger GPU acceleration and what are the trade-offs?",
      "How do you create a performant animation loop in CSS?",
    ],
  },
  {
    title: "TailwindCSS Fundamentals",
    questions: [
      "What problem does TailwindCSS solve and how does utility-first styling work?",
      "How do responsive breakpoints and variants (hover:, focus:, dark:) work?",
      "What are arbitrary values (e.g., w-[37px]) and when should you use them?",
      "How do you compose utilities vs using @apply? Trade-offs?",
    ],
  },
  {
    title: "Tailwind Configuration & Theming",
    questions: [
      "How do you customize the design system via tailwind.config.js (theme.extend)?",
      "How does the JIT engine work and how does it affect purging/treeshaking?",
      "How do you set up dark mode and color palettes (CSS variables + Tailwind)?",
      "How do plugins work and when would you create a custom plugin?",
    ],
  },
  {
    title: "Tailwind Patterns & Best Practices",
    questions: [
      "How do you manage complex component states and variants with utilities?",
      "How do you keep class strings readable (clsx/cva/patterns)?",
      "When should you extract components vs use @apply vs keep utilities inline?",
      "How do you avoid specificity wars and ensure predictable overrides in Tailwind?",
    ],
  },
];
