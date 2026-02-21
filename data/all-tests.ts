import { reactQuestions } from "@/data/react-questions";
import { javascriptQuestions } from "@/data/javascript-questions";
import { typescriptQuestions } from "@/data/typescript-questions";
import { cssTailwindQuestions } from "@/data/css-tailwind-questions";
import { nextjsQuestions } from "@/data/nextjs-questions";
import { viteReactQuestions } from "@/data/vite-react-questions";
import { shadcnQuestions } from "@/data/shadcn-questions";

interface TestContainer {
  [key: string]: QuestionSectionData[];
}

export interface QuestionSectionData {
  title: string;
  questions: string[];
}

export const allTests: TestContainer = {
  "react-questions": reactQuestions,
  "javascript-questions": javascriptQuestions,
  "typescript-questions": typescriptQuestions,
  "css-tailwind-questions": cssTailwindQuestions,
  "nextjs-questions": nextjsQuestions,
  "vite-react-questions": viteReactQuestions,
  "shadcn-questions": shadcnQuestions,
};
