import { QuestionSection } from "@/components/question-section";
import { reactQuestions } from "@/data/react-questions";
import { QuestionTest } from "@/components/question-test";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-y-4 w-full max-w-375 p-8">
        <QuestionTest
          testType="React Interview Prep"
          sections={reactQuestions}
        />
      </div>
    </div>
  );
}
