"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <BlurFade key="not-found-status" delay={0.25 + 1 * 0.05} inView>
        <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-9xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          404
        </div>
      </BlurFade>
      <BlurFade key="not-found-title" delay={0.25 + 2 * 0.05} inView>
        <div className="font-heading mt-4 mb-4 text-2xl font-bold">
          Something&apos;s missing
        </div>
      </BlurFade>
      <BlurFade key="not-found-text" delay={0.25 + 3 * 0.05} inView>
        <div>
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </div>
      </BlurFade>
      <BlurFade key="not-found-button" delay={0.25 + 4 * 0.05} inView>
        <div className="mt-12 flex justify-center gap-4">
          <Button onClick={() => router.back()} variant="default" size="lg">
            Go back
          </Button>
          <Button onClick={() => router.push("/")} variant="ghost" size="lg">
            Back to Home
          </Button>
        </div>
      </BlurFade>
    </div>
  );
}
