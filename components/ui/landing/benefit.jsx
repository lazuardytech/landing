import Image from "next/image";

export default function Benefit() {
  return (
    <div className="container pt-20 lg:pt-40 px-10 lg:px-16">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div className="flex gap-2 flex-col">
            <div className="text-3xl md:text-4xl lg:text-5xl font-regular text-left mb-4">
              We got your back.
            </div>
            <div className="max-w-lg lg:max-w-3xl text-md lg:text-lg text-left text-gray-400 font-light">
              We’re here to support you every step of the way, with the right
              technology and strategies to tackle your challenges, streamline
              operations, and set your business up for lasting success.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 aspect-square lg:aspect-auto">
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
                    25+ Certified Engineers and Professional
                  </div>
                  <div className="max-w-sm lg:max-w-xl text-gray-200 font-light text-sm lg:text-md [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    Work with a team of certified experts committed to
                    delivering innovative, high-quality solutions tailored to
                    your business needs.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 aspect-square">
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
                    Flexible Payment Term
                  </div>
                  <div className="max-w-sm lg:max-w-xl text-gray-200 font-light text-sm lg:text-md [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    Flexible payment plans to fit your budget, making top-tier
                    tech solutions accessible.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 aspect-square">
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
                    Free Consultation
                  </div>
                  <div className="max-w-sm lg:max-w-xl text-gray-200 font-light text-sm lg:text-md [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    Start with a free consultation to discuss your goals and how
                    we can help you succeed.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 aspect-square lg:aspect-auto">
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
                    16+ Team Expertise
                  </div>
                  <div className="max-w-sm lg:max-w-xl text-gray-200 font-light text-sm lg:text-md [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    Our team covers over 16 specialized fields, from software
                    development to AI and cloud computing, ensuring
                    comprehensive support for any challenge.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
