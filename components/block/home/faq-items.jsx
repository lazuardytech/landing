"use client";

import { Button } from "@/components/ui/button";
import Doto from "@/lib/fonts/doto";
import Link from "next/link";

export default function FaqItems({ faqs }) {
  function toggleAnswer(index) {
    if (!document) return;
    const answer = document.getElementById(`faq-answer-${index}`);
    const plusIcon = document.getElementById(`faq-plus-${index}`);
    const minusIcon = document.getElementById(`faq-minus-${index}`);
    if (!answer || !plusIcon || !minusIcon) return;
    answer.classList.toggle("hidden");
    plusIcon.classList.toggle("hidden");
    minusIcon.classList.toggle("hidden");
  }

  return (
    <div className="flex flex-col w-full">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-neutral-400 border-opacity-90 p-8 transition-colors duration-200 hover:bg-neutral-300 hover:cursor-pointer"
          onClick={() => toggleAnswer(index)}
        >
          <div className="flex justify-between items-center cursor-pointer">
            <h3 className="w-full font-light text-sm md:text-md text-black text-left leading-snug">
              {faq.question}
            </h3>
            <span
              id={`faq-plus-${index}`}
              className={`select-none text-4xl ml-4 ${Doto.className}`}
            >
              +
            </span>
            <span
              id={`faq-minus-${index}`}
              className={`select-none text-4xl ml-4 hidden ${Doto.className}`}
            >
              -
            </span>
          </div>
          <p
            id={`faq-answer-${index}`}
            className="w-full md:max-w-screen-sm font-light text-sm text-neutral-600 text-left leading-snug mt-5 hidden"
          >
            {faq.answer}
          </p>
        </div>
      ))}
      <div
        className="p-8 transition-colors duration-200 hover:bg-neutral-300 hover:cursor-pointer"
        onClick={() => toggleAnswer(10)}
      >
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="w-full font-light text-sm md:text-md text-black text-left leading-snug">
            I want to ask other questions that are not listed here.
          </h3>
          <span id="faq-plus-10" className={`text-4xl ml-2 ${Doto.className}`}>
            +
          </span>
          <span
            id="faq-minus-10"
            className={`text-4xl ml-2 hidden ${Doto.className}`}
          >
            -
          </span>
        </div>
        <div
          id="faq-answer-10"
          className="mt-5 w-full md:max-w-screen-sm font-light text-sm text-neutral-600 text-left leading-snug hidden"
        >
          <p id="faq-answer-10" className="text-sm">
            Great! you can contact us directly here or by email and phone. We
            are happy to help you with any questions you have.
          </p>
          <Button
            size="default"
            variant="default"
            className="mt-6 w-auto"
            asChild
          >
            <Link href="/contact">Send Questions</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
