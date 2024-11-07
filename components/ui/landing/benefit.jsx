import BlurFade from "@/components/magicui/blur-fade";
import { User } from "lucide-react";

export default function Benefit() {
  return (
    <div className="container pt-40 px-20">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div className="flex gap-2 flex-col">
            <div className="text-3xl md:text-5xl font-regular text-left mb-4">
              <BlurFade key={"benefit-title"} delay={0.25 + 0 * 0.05} inView>
                It&apos;s okay, we got your back
              </BlurFade>
            </div>
            <div className="text-lg text-left text-gray-400 font-light">
              <BlurFade key={"benefit-text-1"} delay={0.25 + 1 * 0.05} inView>
                Managing a small business today is already tough.
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
            <div className="bg-zinc-900 rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-2xl mb-4">Pay supplier invoices</h3>
                <p className="max-w-lg text-gray-400 font-light text-md">
                  Our goal is to streamline SMB trade, making it easier and
                  faster than ever.
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
            <div className="bg-zinc-900 rounded-md aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-2xl mb-4">Pay supplier invoices</h3>
                <p className="max-w-lg text-gray-400 font-light text-md">
                  Our goal is to streamline SMB trade, making it easier and
                  faster than ever.
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
            <div className="bg-zinc-900 rounded-md aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-2xl mb-4">Pay supplier invoices</h3>
                <p className="max-w-lg text-gray-400 font-light text-md">
                  Our goal is to streamline SMB trade, making it easier and
                  faster than ever.
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
            <div className="bg-zinc-900 rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-2xl mb-4">Pay supplier invoices</h3>
                <p className="max-w-lg text-gray-400 font-light text-md">
                  Our goal is to streamline SMB trade, making it easier and
                  faster than ever.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
