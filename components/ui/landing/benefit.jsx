import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";

export default function Benefit() {
  return (
    <div className="container pt-40 px-10 lg:px-16">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div className="flex gap-2 flex-col">
            <div className="text-3xl md:text-5xl font-regular text-left mb-4">
              <BlurFade key="benefit-title" delay={0.25 + 0 * 0.05} inView>
                It&apos;s okay, we got your back.
              </BlurFade>
            </div>
            <div className="text-md lg:text-lg text-left text-gray-400 font-light max-w-lg lg:max-w-3xl">
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
            key="benefit-card-1"
            delay={0.25 + 2 * 0.05}
            inView
            className="col-span-1 lg:col-span-2 aspect-square lg:aspect-auto"
          >
            <div className="h-full bg-zinc-950 border border-zinc-800 relative">
              <div className="absolute inset-0">
                <Image
                  alt="benefit-card-1-image"
                  src="/images/landing/benefit-1.webp"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="h-full w-full flex flex-col justify-between relative z-10 p-8 bg-black/60">
                <div></div>
                <div className="flex flex-col">
                  <div className="max-w-xl text-white font-regular text-xl mb-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    <BlurFade
                      key="benefit-card-1-title"
                      delay={0.25 + 3 * 0.05}
                      inView
                    >
                      25+ Certified Engineers and Professional
                    </BlurFade>
                  </div>
                  <div className="max-w-sm lg:max-w-xl text-gray-200 font-light text-md [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    <BlurFade
                      key="benefit-card-1-description"
                      delay={0.25 + 4 * 0.05}
                      inView
                    >
                      Work with a team of certified experts committed to
                      delivering innovative, high-quality solutions tailored to
                      your business needs.
                    </BlurFade>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key="benefit-card-2"
            delay={0.25 + 2 * 0.05}
            inView
            className="col-span-1 aspect-square"
          >
            <div className="h-full bg-zinc-950 border border-zinc-800 relative">
              <div className="absolute inset-0">
                <Image
                  alt="benefit-card-2-image"
                  src="/images/landing/benefit-2.webp"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="h-full w-full flex flex-col justify-between relative z-10 p-8 bg-black/60">
                <div></div>
                <div className="flex flex-col">
                  <div className="max-w-xl text-white font-regular text-xl mb-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    <BlurFade
                      key="benefit-card-2-title"
                      delay={0.25 + 3 * 0.05}
                      inView
                    >
                      Flexible Payment Term
                    </BlurFade>
                  </div>
                  <div className="max-w-sm lg:max-w-xl text-gray-200 font-light text-md [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    <BlurFade
                      key="benefit-card-3-description"
                      delay={0.25 + 4 * 0.05}
                      inView
                    >
                      Flexible payment plans to fit your budget, making top-tier
                      tech solutions accessible.
                    </BlurFade>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key="benefit-card-3"
            delay={0.25 + 3 * 0.05}
            inView
            className="col-span-1 aspect-square"
          >
            <div className="h-full bg-zinc-950 border border-zinc-800 relative">
              <div className="absolute inset-0">
                <Image
                  alt="benefit-card-3-image"
                  src="/images/landing/benefit-3.webp"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="h-full w-full flex flex-col justify-between relative z-10 p-8 bg-black/60">
                <div></div>
                <div className="flex flex-col">
                  <div className="max-w-xl text-white font-regular text-xl mb-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    <BlurFade
                      key="benefit-card-3-title"
                      delay={0.25 + 4 * 0.05}
                      inView
                    >
                      Free Consultation
                    </BlurFade>
                  </div>
                  <div className="max-w-sm lg:max-w-xl text-gray-200 font-light text-md [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    <BlurFade
                      key="benefit-card-3-description"
                      delay={0.25 + 5 * 0.05}
                      inView
                    >
                      Start with a free consultation to discuss your goals and
                      how we can help you succeed.
                    </BlurFade>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key="benefit-card-4"
            delay={0.25 + 3 * 0.05}
            inView
            className="col-span-1 lg:col-span-2 aspect-square lg:aspect-auto"
          >
            <div className="h-full bg-zinc-950 border border-zinc-800 relative">
              <div className="absolute inset-0">
                <Image
                  alt="benefit-card-4-image"
                  src="/images/landing/benefit-4.webp"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="h-full w-full flex flex-col justify-between relative z-10 p-8 bg-black/60">
                <div></div>
                <div className="flex flex-col">
                  <div className="max-w-xl text-white font-regular text-xl mb-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    <BlurFade
                      key="benefit-card-4-title"
                      delay={0.25 + 4 * 0.05}
                      inView
                    >
                      16+ Team Expertise
                    </BlurFade>
                  </div>
                  <div className="max-w-sm lg:max-w-xl text-gray-200 font-light text-md [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    <BlurFade
                      key="benefit-card-4-description"
                      delay={0.25 + 5 * 0.05}
                      inView
                    >
                      Our team covers over 16 specialized fields, from software
                      development to AI and cloud computing, ensuring
                      comprehensive support for any challenge.
                    </BlurFade>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
