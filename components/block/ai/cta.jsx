"use client";

import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import Link from "next/link";
import CTAVideo from "@/components/block/ai/cta-video";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function CTA() {
  useEffect(() => {
    const elements = document.querySelectorAll(".bg-ai");
    const textPrimaryElements = document.querySelectorAll(".text-primary");
    const textTitleElements = document.querySelectorAll(".text-black");
    const textParagraphElements =
      document.querySelectorAll(".text-neutral-600");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elements.forEach((el) => {
              el.classList.remove("bg-ai");
              el.classList.add("bg-black/90");
            });
            textPrimaryElements.forEach((el) => {
              el.classList.remove(
                "transition-colors",
                "duration-1000",
                "text-primary",
              );
              el.classList.add(
                "transition-colors",
                "duration-1000",
                "text-white",
              );
            });
            textTitleElements.forEach((el) => {
              el.classList.remove(
                "transition-colors",
                "duration-1000",
                "text-black",
              );
              el.classList.add(
                "transition-colors",
                "duration-1000",
                "text-white",
              );
            });
            textParagraphElements.forEach((el) => {
              el.classList.remove(
                "transition-colors",
                "duration-1000",
                "text-neutral-600",
              );
              el.classList.add(
                "transition-colors",
                "duration-1000",
                "text-neutral-300",
              );
            });
          } else {
            elements.forEach((el) => {
              el.classList.remove("bg-black-90");
              el.classList.add("bg-ai");
            });
            textPrimaryElements.forEach((el) => {
              el.classList.remove(
                "transition-colors",
                "duration-1000",
                "text-white",
              );
              el.classList.add(
                "transition-colors",
                "duration-1000",
                "text-primary",
              );
            });
            textTitleElements.forEach((el) => {
              el.classList.remove(
                "transition-colors",
                "duration-500",
                "text-white",
              );
              el.classList.add(
                "transition-colors",
                "duration-500",
                "text-black",
              );
            });
            textParagraphElements.forEach((el) => {
              el.classList.remove(
                "transition-colors",
                "duration-1000",
                "text-neutral-300",
              );
              el.classList.add(
                "transition-colors",
                "duration-1000",
                "text-neutral-600",
              );
            });
          }
        });
      },
      { threshold: 0.05 },
    );

    const target = document.getElementById("ai-cta");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div id="ai-cta" className="flex flex-col w-full relative">
      <LayoutLine className="relative bg-black">
        <div className="w-full flex flex-col justify-center items-center aspect-video z-10 px-8">
          <Title className="text-lg md:text-3xl text-center w-full text-white md:max-w-2xl">
            Let&apos;s Discover How AI Can Help You Scale to The Next Level
          </Title>
          <div className="flex flex-col w-full mt-6 justify-center items-center">
            <div className="hidden md:flex w-full max-w-xl justify-center">
              <p className="w-full font-light text-center leading-snug text-sm text-neutral-300">
                Let us do the hard work, analysis, and implementation of AI for
                your business. While you keep focusing on your business growth,
                we&apos;ll plan to scale you to the next level.
              </p>
            </div>
            <div className="w-full flex space-x-2 justify-center items-center mt-0 md:mt-8">
              <Button size="lg" variant="link" asChild>
                <Link
                  href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brainstorm Your Ideas
                </Link>
              </Button>
              <Button size="lg" variant="default" asChild>
                <Link href="/inquiry">Start Your AI Project</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full aspect-video z-0 opacity-40">
          <CTAVideo />
        </div>
      </LayoutLine>
      <HorizontalBorder />
    </div>
  );
}
