"use client";

import { useCallback, useState } from "react";
import { QuestionAnswer, storageKey } from "@/components/question-answer";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface QuestionSectionProps {
  title: string;
  questions: string[];
  onSave?: () => void;
}

export function QuestionSection({ title, questions, onSave }: QuestionSectionProps) {
  const [clearKey, setClearKey] = useState(0);

  const handleClear = useCallback(() => {
    questions.forEach((q) => localStorage.removeItem(storageKey(q)));
    setClearKey((k) => k + 1);
  }, [questions]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl border-b">{title}</CardTitle>
        <CardAction>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm">
                Clear All
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Clear all answers?</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to clear all the questions for this section?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>No</AlertDialogCancel>
                <AlertDialogAction onClick={handleClear}>Yes</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {questions.map((question, index) => (
          <QuestionAnswer
            key={index + "-" + title}
            question={question}
            clearKey={clearKey}
            onSave={onSave}
          />
        ))}
      </CardContent>
    </Card>
  );
}
