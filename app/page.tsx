import { allTests } from "@/data/all-tests";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap gap-3 sm:gap-4 w-full max-w-375 p-4 sm:p-6 md:p-8">
        {Object.keys(allTests).map((test) => (
          <Link
            key={"test-link-" + test}
            href={"/test/" + test}
            className="w-full sm:w-auto text-center p-4 border shadow-md hover:bg-yellow-500 rounded-lg"
          >
            {test}
          </Link>
        ))}
      </div>
    </div>
  );
}
