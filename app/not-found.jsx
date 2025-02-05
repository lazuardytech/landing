"use client";

import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <Title className="text-7xl md:text-8xl font-black text-center">404</Title>
      <h1 className="my-2 md:my-4 text-lg md:text-xl font-regular">
        Something&apos;s Missing
      </h1>
      <p className="text-sm md:text-md font-light text-neutral-600">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <div className="mt-12 flex justify-center gap-4">
        <Button onClick={() => router.back()} variant="default" size="default">
          Go back
        </Button>
        <Button onClick={() => router.push("/")} variant="link" size="default">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
