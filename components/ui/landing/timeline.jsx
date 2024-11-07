import BlurFade from "@/components/magicui/blur-fade";

export default function Timeline() {
  return (
    <>
      <div className="container mt-40 px-20 ">
        <div className="grid grid-rows gap-12">
          <div className="text-left">
            <div className="text-3xl md:text-5xl font-regular mb-6">
              <BlurFade key={"timeline-title"} delay={0.25 + 0 * 0.05} inView>
                How It Works?
              </BlurFade>
            </div>
            <div className="text-lg font-light text-gray-400">
              <BlurFade key={"timeline-title"} delay={0.25 + 1 * 0.05} inView>
                We keep all things simple here. We do no <i>bs</i>, just
                results.
              </BlurFade>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-12 h-auto">
            <BlurFade key={"timeline-card-1"} delay={0.25 + 2 * 0.05} inView>
              <One />
            </BlurFade>
            <BlurFade key={"timeline-card-2"} delay={0.25 + 3 * 0.05} inView>
              <Two />
            </BlurFade>
            <BlurFade key={"timeline-card-3"} delay={0.25 + 4 * 0.05} inView>
              <Three />
            </BlurFade>
          </div>
        </div>
        <div className="text-md font-light text-gray-400 text-left mt-12">
          <BlurFade key={"division-text-1"} delay={0.25 + 6 * 0.05} inView>
            Our first-time consulting services are free of charge.
            <br />
            The consulting and proposal step may take 1 - 2 days, while the
            development is contract-based.
          </BlurFade>
        </div>
      </div>
    </>
  );
}

export function One() {
  return (
    <div className="py-12 px-8 border border-zinc-800 rounded-lg">
      <div className="flex gap-10 flex-col">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <BlurFade
              key={"timeline-card-1-number"}
              delay={0.25 + 3 * 0.05}
              inView
            >
              <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                1
              </div>
            </BlurFade>
            <div className="w-full text-2xl lg:text-4xl text-center font-regular">
              <BlurFade
                key={"timeline-card-1-title"}
                delay={0.25 + 4 * 0.05}
                inView
              >
                Consult
              </BlurFade>
            </div>
            <div className="text-md font-light text-gray-400 text-center mt-6">
              <BlurFade
                key={"timeline-card-1-description"}
                delay={0.25 + 5 * 0.05}
                inView
              >
                Managing a small business today is already tough.
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Two() {
  return (
    <div className="py-12 px-8 border border-zinc-800 rounded-lg">
      <div className="flex gap-10 flex-col">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <BlurFade
              key={"timeline-card-2-number"}
              delay={0.25 + 4 * 0.05}
              inView
            >
              <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                2
              </div>
            </BlurFade>
            <div className="w-full text-2xl lg:text-4xl text-center font-regular">
              <BlurFade
                key={"timeline-card-2-title"}
                delay={0.25 + 5 * 0.05}
                inView
              >
                Propose
              </BlurFade>
            </div>
            <div className="text-md font-light text-gray-400 text-center mt-6">
              <BlurFade
                key={"timeline-card-2-description"}
                delay={0.25 + 6 * 0.05}
                inView
              >
                Managing a small business today is already tough.
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Three() {
  return (
    <div className="py-12 px-8 border border-zinc-800 rounded-lg">
      <div className="flex gap-10 flex-col">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <BlurFade
              key={"timeline-card-3-number"}
              delay={0.25 + 5 * 0.05}
              inView
            >
              <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                3
              </div>
            </BlurFade>
            <div className="w-full text-2xl lg:text-4xl text-center font-regular">
              <BlurFade
                key={"timeline-card-3-title"}
                delay={0.25 + 6 * 0.05}
                inView
              >
                Develop
              </BlurFade>
            </div>
            <div className="text-md font-light text-gray-400 text-center mt-6">
              <BlurFade
                key={"timeline-card-3-description"}
                delay={0.25 + 7 * 0.05}
                inView
              >
                Managing a small business today is already tough.
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
