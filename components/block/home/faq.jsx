import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import LayoutLineHeader from "@/components/ui/layout-line-header";
import FaqItems from "./faq-items";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide custom software development, cloud solutions, hardware engineering, AI integration, and ongoing tech support tailored to help businesses grow. Please contact us to know more what and how we can help you.",
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

export default function Faq() {
  return (
    <div className="flex flex-col w-full relative">
      <LayoutLineHeader title="Frequently asked questions" />
      <LayoutLine>
        <FaqItems faqs={faqs} />
      </LayoutLine>
      <HorizontalBorder />
    </div>
  );
}
