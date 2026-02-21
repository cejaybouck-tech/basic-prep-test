"use client";

import { useEffect, useId, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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

  const handleSearch = () => {
    const url = `https://www.google.com/search?q=${encodeURIComponent(question)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Label htmlFor={id} className="text-sm sm:text-base font-semibold break-words">
          {question}
        </Label>
        <Button variant="outline" size="sm" onClick={handleSearch}>
          Search Answer
        </Button>
      </div>
      <Textarea
        id={id}
        placeholder="Type your answer here..."
        rows={4}
        className="min-h-24 w-full resize-y"
        value={answer}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
