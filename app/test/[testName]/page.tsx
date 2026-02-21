"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { allTests } from "@/data/all-tests";
import { QuestionTest } from "@/components/question-test";
import { Button } from "@/components/ui/button";

export default function TestPage() {
  const { testName } = useParams<{ testName: string }>();
  const sections = allTests[testName];

  if (!sections) {
    return (
      <div className="w-full flex flex-col items-center p-8 gap-4">
        <Link href="/">
          <Button variant="outline">← Back</Button>
        </Link>
        <p className="text-lg">Test &quot;{testName}&quot; not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-y-6 w-full max-w-375 p-4 sm:p-6 md:p-8">
        <Link href="/">
          <Button variant="outline">← Back</Button>
        </Link>
        <QuestionTest testType={testName} sections={sections} />
      </div>
    </div>
  );
}
