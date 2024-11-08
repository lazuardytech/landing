import BlurFade from "@/components/magicui/blur-fade";
import {
  CircleDollarSign,
  Receipt,
  Rocket,
  ShieldCheck,
  Speech,
  User,
} from "lucide-react";

export default function Benefit() {
  return (
    <div className="container pt-40 px-16">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div className="flex gap-2 flex-col">
            <div className="text-3xl md:text-5xl font-regular text-left mb-4">
              <BlurFade key="benefit-title" delay={0.25 + 0 * 0.05} inView>
                It&apos;s okay, we got your back.
              </BlurFade>
            </div>
            <div className="text-lg text-left text-gray-400 font-light max-w-3xl">
              <BlurFade key="benefit-text-1" delay={0.25 + 1 * 0.05} inView>
                We’re here to support you every step of the way, with the right
                technology and strategies to tackle your challenges, streamline
                operations, and set your business up for lasting success.
              </BlurFade>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlurFade
            key={"benefit-card-1"}
            delay={0.25 + 2 * 0.05}
            inView
            className="lg:col-span-2"
          >
            <div className="bg-zinc-950 border border-zinc-800 h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <ShieldCheck className="w-8 h-8" />
              <div className="flex flex-col">
                <h3 className="text-2xl mb-4">
                  25+ Certified Engineers and Professional
                </h3>
                <p className="max-w-xl text-gray-400 font-light text-md">
                  Work with a team of certified experts committed to delivering
                  innovative, high-quality solutions tailored to your business
                  needs.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"benefit-card-2"}
            delay={0.25 + 3 * 0.05}
            inView
            className="aspect-square"
          >
            <div className="bg-zinc-950 border border-zinc-800 aspect-square p-6 flex justify-between flex-col">
              <CircleDollarSign className="w-8 h-8" />
              <div className="flex flex-col">
                <h3 className="text-2xl mb-4">Flexible Payment Term</h3>
                <p className="max-w-lg text-gray-400 font-light text-md">
                  Flexible payment plans to fit your budget, making top-tier
                  tech solutions accessible.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"benefit-card-3"}
            delay={0.25 + 4 * 0.05}
            inView
            className="aspect-square"
          >
            <div className="bg-zinc-950 border border-zinc-800 aspect-square p-6 flex justify-between flex-col">
              <Speech className="w-8 h-8" />
              <div className="flex flex-col">
                <h3 className="text-2xl mb-4">Free Consultation</h3>
                <p className="max-w-lg text-gray-400 font-light text-md">
                  Start with a free consultation to discuss your goals and how
                  we can help you succeed.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"benefit-card-4"}
            delay={0.25 + 5 * 0.05}
            inView
            className="lg:col-span-2"
          >
            <div className="bg-zinc-950 border border-zinc-800 h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <Rocket className="w-8 h-8" />
              <div className="flex flex-col">
                <h3 className="text-2xl mb-4">16+ Team Expertise</h3>
                <p className="max-w-xl text-gray-400 font-light text-md">
                  Our team covers over 16 specialized fields, from software
                  development to AI and cloud computing, ensuring comprehensive
                  support for any challenge.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
