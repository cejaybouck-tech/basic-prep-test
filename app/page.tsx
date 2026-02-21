import { allTests } from "@/data/all-tests";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-4 w-full max-w-375 p-8">
        {Object.keys(allTests).map((test) => (
          <Link
            key={"test-link-" + test}
            href={"/test/" + test}
            className="p-4 border shadow-md hover:bg-yellow-500 rounded-lg"
          >
            {test}
          </Link>
        ))}
      </div>
    </div>
  );
}
