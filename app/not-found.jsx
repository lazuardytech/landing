"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-9xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        404
      </div>
      <div className="font-heading mt-4 mb-4 text-2xl font-bold">
        Something&apos;s missing
      </div>
      <div>
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </div>
      <div className="mt-12 flex justify-center gap-4">
        <Button onClick={() => router.back()} variant="default" size="lg">
          Go back
        </Button>
        <Button onClick={() => router.push("/")} variant="ghost" size="lg">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
