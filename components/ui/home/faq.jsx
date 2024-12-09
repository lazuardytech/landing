import Link from "next/link";
import { PhoneCall } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What services you offer?",
    answer:
      "We provide custom software development, cloud solutions, hardware engineering, AI integration, and ongoing tech support tailored to help businesses grow. You can read more about our services on the Service Offering document.",
  },
  {
    question: "How does the consultation process work?",
    answer:
      "During our free consultation, we listen to your business challenges, objectives, and vision. Based on this, we identify potential solutions and explain how our expertise can help you overcome obstacles and achieve your goals.",
  },
  {
    question: "What makes your team unique?",
    answer:
      "Our team consists of 25+ certified engineers and professionals with expertise in over 16 different fields. This diverse knowledge allows us to provide comprehensive, high-quality solutions. We pride ourselves on offering personalized, hands-on support to ensure your project’s success.",
  },
  {
    question: "Do you offer flexible payment options?",
    answer:
      "Yes, we understand that every business has different financial needs. We offer flexible payment terms to accommodate your budget and project scale, making it easier for you to invest in the technology and solutions you need without strain.",
  },
];

export default function FAQ() {
  return (
    <div className="container mt-40 mb-10 px-10 lg:px-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-2 flex-col">
              <div className="text-3xl md:text-4xl lg:text-5xl max-w-sm md:max-w-xl text-left font-regular mb-5">
                Ready to build products that outstands other?
              </div>
              <div className="text-md lg:text-lg max-w-md lg:max-w-lg text-left font-light text-gray-400">
                Feel free to reach out if you want to collaborate with us, or
                simply have a chat. We would love to hear from you.
              </div>
            </div>
            <div className="mt-8">
              <Link
                href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
                target="_blank"
              >
                <Button className="gap-2" variant="default">
                  Book a Free Consultation <PhoneCall className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Accordion
          className="w-full"
          aria-hidden="true"
          type="single"
          collapsible
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={"faq-item-" + index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
