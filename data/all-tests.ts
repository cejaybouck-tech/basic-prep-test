import { reactQuestions } from "@/data/react-questions";

interface TestContainer {
  [key: string]: QuestionSectionData[];
}

export interface QuestionSectionData {
  title: string;
  questions: string[];
}

export const allTests: TestContainer = {
  "react-questions": reactQuestions,
};
