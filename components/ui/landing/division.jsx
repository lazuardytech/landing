import BlurFade from "@/components/magicui/blur-fade";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Division() {
  return (
    <>
      <div className="container mt-40 px-20 ">
        <div className="grid grid-rows gap-20">
          <div className="text-3xl md:text-5xl text-center font-regular">
            <BlurFade key={"division-title"} delay={0.25 + 0 * 0.05} inView>
              We got a complete solutions, ready to help you.
            </BlurFade>
          </div>
          <div className="grid grid-cols-2 gap-20 h-auto">
            <BlurFade key={"division-card-1"} delay={0.25 + 1 * 0.05} inView>
              <Byte />
            </BlurFade>
            <BlurFade key={"division-card-2"} delay={0.25 + 1 * 0.05} inView>
              <Things />
            </BlurFade>
          </div>
          <div className="grid grid-cols-2 gap-20 h-auto">
            <BlurFade key={"division-card-3"} delay={0.25 + 2 * 0.05} inView>
              <Studio />
            </BlurFade>
            <BlurFade key={"division-card-4"} delay={0.25 + 2 * 0.05} inView>
              <AI />
            </BlurFade>
          </div>
        </div>
        <div className="text-md font-regular text-gray-200 text-center mt-12">
          <BlurFade key={"division-text-1"} delay={0.25 + 6 * 0.05} inView>
            You don&apos;t have to choose anything though. <br />
            Let us give you the best solution for your business, through our
            free consultation. <u>No commitment needed</u>.
          </BlurFade>
        </div>
      </div>
    </>
  );
}

export function Byte() {
  return (
    <div className="py-16 px-20 border border-zinc-800 rounded-lg">
      <div className="flex gap-10 flex-col">
        <div className="flex gap-4 flex-col">
          <BlurFade
            key={"division-card-1-badge"}
            delay={0.25 + 2 * 0.05}
            inView
          >
            <Badge variant="outline" className="mb-2">
              Solutions
            </Badge>
          </BlurFade>
          <div className="flex gap-2 flex-col">
            <div className="text-2xl lg:text-4xl text-left font-regular mb-2">
              <BlurFade
                key={"division-card-1-title"}
                delay={0.25 + 3 * 0.05}
                inView
              >
                Lazuardy Byte
              </BlurFade>
            </div>
            <div className="text-lg font-light text-gray-400 text-left">
              <BlurFade
                key={"division-card-1-description"}
                delay={0.25 + 4 * 0.05}
                inView
              >
                Managing a small business today is already tough.
              </BlurFade>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
          <BlurFade
            key={"division-card-1-list-1"}
            delay={0.25 + 5 * 0.05}
            inView
          >
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-1-list-2"}
            delay={0.25 + 6 * 0.05}
            inView
          >
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ve made it fast and reliable.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-1-list-3"}
            delay={0.25 + 7 * 0.05}
            inView
          >
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ve made it beautiful and modern.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

export function Things() {
  return (
    <div className="py-16 px-20 border border-zinc-800 rounded-lg">
      <div className="flex gap-10 flex-col">
        <div className="flex gap-4 flex-col">
          <BlurFade
            key={"division-card-2-badge"}
            delay={0.25 + 2 * 0.05}
            inView
          >
            <Badge variant="outline" className="mb-2">
              Solutions
            </Badge>
          </BlurFade>
          <div className="flex gap-2 flex-col">
            <div className="text-2xl lg:text-4xl text-left font-regular mb-2">
              <BlurFade
                key={"division-card-2-title"}
                delay={0.25 + 3 * 0.05}
                inView
              >
                Lazuardy Things
              </BlurFade>
            </div>
            <div className="text-lg font-light text-gray-400 text-left">
              <BlurFade
                key={"division-card-2-description"}
                delay={0.25 + 4 * 0.05}
                inView
              >
                Managing a small business today is already tough.
              </BlurFade>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
          <BlurFade
            key={"division-card-2-list-1"}
            delay={0.25 + 5 * 0.05}
            inView
          >
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-2-list-2"}
            delay={0.25 + 6 * 0.05}
            inView
          >
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ve made it fast and reliable.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-2-list-3"}
            delay={0.25 + 7 * 0.05}
            inView
          >
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ve made it beautiful and modern.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

export function Studio() {
  return (
    <div className="py-16 px-20 border border-zinc-800 rounded-lg">
      <div className="flex gap-10 flex-col">
        <div className="flex gap-4 flex-col">
          <BlurFade
            key={"division-card-3-badge"}
            delay={0.25 + 3 * 0.05}
            inView
          >
            <Badge variant="outline" className="mb-2">
              Solutions
            </Badge>
          </BlurFade>
          <div className="flex gap-2 flex-col">
            <div className="text-2xl lg:text-4xl text-left font-regular mb-2">
              <BlurFade
                key={"division-card-3-title"}
                delay={0.25 + 4 * 0.05}
                inView
              >
                Lazuardy Studio
              </BlurFade>
            </div>
            <div className="text-lg font-light text-gray-400 text-left">
              <BlurFade
                key={"division-card-3-description"}
                delay={0.25 + 5 * 0.05}
                inView
              >
                Managing a small business today is already tough.
              </BlurFade>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
          <BlurFade
            key={"division-card-3-list-1"}
            delay={0.25 + 6 * 0.05}
            inView
          >
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-3-list-2"}
            delay={0.25 + 7 * 0.05}
            inView
          >
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ve made it fast and reliable.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-3-list-3"}
            delay={0.25 + 8 * 0.05}
            inView
          >
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ve made it beautiful and modern.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

export function AI() {
  return (
    <div className="py-16 px-20 border border-zinc-800 rounded-lg">
      <div className="flex gap-10 flex-col">
        <div className="flex gap-4 flex-col">
          <BlurFade
            key={"division-card-4-badge"}
            delay={0.25 + 3 * 0.05}
            inView
          >
            <Badge variant="outline" className="mb-2">
              Solutions
            </Badge>
          </BlurFade>
          <div className="flex gap-2 flex-col">
            <div className="text-2xl lg:text-4xl text-left font-regular mb-2">
              <BlurFade
                key={"division-card-4-title"}
                delay={0.25 + 4 * 0.05}
                inView
              >
                Lazuardy AI
              </BlurFade>
            </div>
            <div className="text-lg font-light text-gray-400 text-left">
              <BlurFade
                key={"division-card-4-description"}
                delay={0.25 + 5 * 0.05}
                inView
              >
                Managing a small business today is already tough.
              </BlurFade>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
          <BlurFade
            key={"division-card-4-list-1"}
            delay={0.25 + 6 * 0.05}
            inView
          >
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-4-list-2"}
            delay={0.25 + 7 * 0.05}
            inView
          >
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ve made it fast and reliable.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-4-list-3"}
            delay={0.25 + 8 * 0.05}
            inView
          >
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-gray-400 font-light text-sm">
                  We&apos;ve made it beautiful and modern.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
