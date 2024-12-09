export default function Timeline() {
  return (
    <>
      <div className="container pt-20 lg:pt-40 px-10 lg:px-16">
        <div className="grid grid-rows gap-12">
          <div className="text-left">
            <div className="text-3xl md:text-4xl lg:text-5xl font-regular mb-6">
              How It Works?
            </div>
            <div className="text-lg font-light text-gray-400">
              We keep all things simple here. We do no <i>bs</i>, just results.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 h-auto">
            <One />
            <Two />
            <Three />
            <Four />
          </div>
        </div>
        <div className="text-md font-light text-gray-400 mt-12 text-left max-w-lg lg:max-w-xl">
          Our first-time consulting services are free of charge. The consulting
          and proposal step may take 1 - 2 days, while the development is
          contract-based.
        </div>
      </div>
    </>
  );
}

export function One() {
  return (
    <div className="pt-12 pb-10 px-8 border border-zinc-800">
      <div className="flex gap-10 flex-col">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              1
            </div>
            <div className="w-full text-2xl lg:text-4xl text-center font-regular">
              Consult
            </div>
            <div className="text-md font-light text-gray-400 text-center mt-6">
              Begin with an in-depth discussion to understand your goals and
              needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Two() {
  return (
    <div className="pt-12 pb-10 px-8 border border-zinc-800">
      <div className="flex gap-10 flex-col">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              2
            </div>
            <div className="w-full text-2xl lg:text-4xl text-center font-regular">
              Propose
            </div>
            <div className="text-md font-light text-gray-400 text-center mt-6">
              We craft a tailored solution plan that aligns with your vision.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Three() {
  return (
    <div className="pt-12 pb-10 px-8 border border-zinc-800">
      <div className="flex gap-10 flex-col">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              3
            </div>
            <div className="w-full text-2xl lg:text-4xl text-center font-regular">
              Develop
            </div>
            <div className="text-md font-light text-gray-400 text-center mt-6">
              Our team builds and implements your project with precision and
              expertise.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Four() {
  return (
    <div className="pt-12 pb-10 px-8 border border-zinc-800">
      <div className="flex gap-10 flex-col">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              4
            </div>
            <div className="w-full text-2xl lg:text-4xl text-center font-regular">
              Maintain
            </div>
            <div className="text-md font-light text-gray-400 text-center mt-6">
              We provide ongoing support to keep your solution up-to-date.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
