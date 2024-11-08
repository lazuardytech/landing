import BlurFade from "@/components/magicui/blur-fade";
import { PhoneCall } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  return (
    <div className="container mt-40 mb-40 px-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-2 flex-col">
              <div className="text-3xl md:text-5xl max-w-xl text-left font-regular mb-5">
                <BlurFade key={"faq-title"} delay={0.25 + 0 * 0.05} inView>
                  Ready to build products that outstands other?
                </BlurFade>
              </div>
              <div className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                <BlurFade key={"faq-text"} delay={0.25 + 1 * 0.05} inView>
                  Feel free to reach out if you want to collaborate with us, or
                  simply have a chat. We would love to hear from you.
                </BlurFade>
              </div>
            </div>
            <div className="mt-8">
              <BlurFade key={"faq-button"} delay={0.25 + 2 * 0.05} inView>
                <Button className="gap-2" variant="default">
                  Book a Free Consultation <PhoneCall className="w-4 h-4" />
                </Button>
              </BlurFade>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {Array.from({ length: 4 }).map((_, index) => (
            <BlurFade
              key={"faq-" + index}
              delay={0.25 + (index + 3) * 0.05}
              inView
            >
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>
                  This is the start of something new
                </AccordionTrigger>
                <AccordionContent>
                  Managing a small business today is already tough. Avoid
                  further complications by ditching outdated, tedious trade
                  methods. Our goal is to streamline SMB trade, making it easier
                  and faster than ever.
                </AccordionContent>
              </AccordionItem>
            </BlurFade>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
