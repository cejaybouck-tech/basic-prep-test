"use client";

import { useCallback, useState } from "react";
import { QuestionSection } from "@/components/question-section";
import { storageKey } from "@/components/question-answer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { QuestionSectionData } from "@/data/all-tests";

interface QuestionTestProps {
  testType: string;
  sections: QuestionSectionData[];
}

function countAnswered(questions: string[]): number {
  if (typeof window === "undefined") return 0;
  return questions.filter((q) => {
    const val = localStorage.getItem(storageKey(q));
    return val !== null && val.trim().length > 0;
  }).length;
}

export function QuestionTest({ testType, sections }: QuestionTestProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [saveCheck, setSaveCheck] = useState(0);
  const [reviewMode, setReviewMode] = useState(false);

  const isComplete = !reviewMode && currentIndex >= sections.length;
  const currentSection = reviewMode
    ? sections[currentIndex]
    : isComplete
      ? null
      : sections[currentIndex];

  // Re-evaluate readiness whenever a child saves
  const handleSave = useCallback(() => {
    setSaveCheck((c) => c + 1);
  }, []);

  const handleReviewAnswers = useCallback(() => {
    setCurrentIndex(0);
    setReviewMode(true);
  }, []);

  const handleResetTest = useCallback(() => {
    sections.forEach((section) =>
      section.questions.forEach((q) => localStorage.removeItem(storageKey(q)))
    );
    window.location.reload();
  }, [sections]);

  const totalQuestions = currentSection?.questions.length ?? 0;
  // trigger re-check on saveCheck change
  const answered =
    !isComplete && saveCheck >= 0
      ? countAnswered(currentSection!.questions)
      : 0;
  const canContinue = !isComplete && answered === totalQuestions;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{testType}</h1>
        {reviewMode && (
          <Button variant="destructive" onClick={handleResetTest}>
            Reset Test
          </Button>
        )}
      </div>

      <p className="text-muted-foreground text-sm">
        Section {Math.min(currentIndex + 1, sections.length)} of{" "}
        {sections.length}
      </p>

      {isComplete ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Questions Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            <Button size="lg" onClick={handleReviewAnswers}>Review Answers</Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <QuestionSection
            title={currentSection!.title}
            questions={currentSection!.questions}
            onSave={handleSave}
          />

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
            <span className="text-muted-foreground text-sm">
              {answered} of {totalQuestions} answered
            </span>
            {reviewMode ? (
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() =>
                  currentIndex < sections.length - 1
                    ? setCurrentIndex((i) => i + 1)
                    : undefined
                }
                disabled={currentIndex >= sections.length - 1}
              >
                Next Section
              </Button>
            ) : (
              <Button
                size="lg"
                className="w-full sm:w-auto"
                disabled={!canContinue}
                onClick={() => setCurrentIndex((i) => i + 1)}
              >
                Continue
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
