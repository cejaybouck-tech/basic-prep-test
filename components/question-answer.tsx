"use client";

import { useEffect, useId, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function storageKey(question: string) {
  return `qa:${question}`;
}

interface QuestionAnswerProps {
  question: string;
  clearKey?: number;
  onSave?: () => void;
}

export function QuestionAnswer({ question, clearKey, onSave }: QuestionAnswerProps) {
  const id = useId();
  const [answer, setAnswer] = useState("");

  // Load saved answer from localStorage on mount or after clear
  useEffect(() => {
    const stored = localStorage.getItem(storageKey(question));
    setAnswer(stored ?? "");
  }, [question, clearKey]);

  const handleChange = (value: string) => {
    setAnswer(value);
    localStorage.setItem(storageKey(question), value);
    onSave?.();
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-base font-semibold">
        {question}
      </Label>
      <Textarea
        id={id}
        placeholder="Type your answer here..."
        rows={4}
        className="min-h-24 min-w-150 resize-y"
        value={answer}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
