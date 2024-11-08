import BlurFade from "@/components/magicui/blur-fade";
import ShineBorder from "@/components/magicui/shine-border";
import {
  AppWindow,
  Cloud,
  Speech,
  CircuitBoard,
  MonitorSmartphone,
  Cpu,
  Figma,
  UserSearch,
  Apple,
  Brain,
  SquareFunction,
  ScanEye,
} from "lucide-react";

export default function Division() {
  return (
    <>
      <div className="container mt-40 px-16">
        <div className="grid grid-rows gap-12">
          <div className="text-2xl md:text-4xl text-center font-regular">
            <BlurFade key={"division-title"} delay={0.25 + 0 * 0.05} inView>
              We got a complete solutions, ready to help you.
            </BlurFade>
          </div>
          <div className="grid grid-cols lg:grid-cols-2 gap-8 h-auto">
            <BlurFade key={"division-card-1"} delay={0.25 + 1 * 0.05} inView>
              <Byte />
            </BlurFade>
            <BlurFade key={"division-card-2"} delay={0.25 + 2 * 0.05} inView>
              <Things />
            </BlurFade>
            <BlurFade key={"division-card-3"} delay={0.25 + 3 * 0.05} inView>
              <Studio />
            </BlurFade>
            <BlurFade key={"division-card-4"} delay={0.25 + 4 * 0.05} inView>
              <AI />
            </BlurFade>
          </div>
        </div>
        <div className="text-md font-light text-gray-200 text-center mt-12">
          <BlurFade key={"division-text-1"} delay={0.25 + 6 * 0.05} inView>
            <div>You don&apos;t have to choose anything though.</div>
            <div className="mt-2">
              Let us give you the best solution for your business,
              <br />
              through our free consultation, with no commitment needed.
            </div>
          </BlurFade>
        </div>
      </div>
    </>
  );
}

export function Byte() {
  return (
    <ShineBorder color="#0D92F4" borderRadius={0} className="px-16 py-12">
      <div className="flex gap-8 flex-col">
        <div className="flex gap-2 flex-col">
          <div className="text-xl lg:text-2xl text-left font-light mb-2">
            <BlurFade
              key={"division-card-1-title"}
              delay={0.25 + 2 * 0.05}
              inView
            >
              Lazuardy Byte
            </BlurFade>
          </div>
          <div className="text-md font-light text-gray-400 text-justify max-w-xl">
            <BlurFade
              key={"division-card-1-description"}
              delay={0.25 + 3 * 0.05}
              inView
            >
              We simplify tech with custom software, reliable cloud solutions,
              and expert support to help your business grow smoothly.
            </BlurFade>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-8">
          <BlurFade
            key={"division-card-1-list-1"}
            delay={0.25 + 4 * 0.05}
            inView
          >
            <div className="flex flex-row gap-4 items-start">
              <div className="pt-0.5">
                <AppWindow className="w-5 h-5 text-primary" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-gray-200 font-regular text-md">
                  Software Engineering
                </p>
                <p className="text-gray-400 font-light text-xs text-justify">
                  Custom software, SaaS, ERP, PoS, Company Website, etc.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-1-list-2"}
            delay={0.25 + 5 * 0.05}
            inView
          >
            <div className="flex flex-row gap-4 items-start">
              <div className="pt-0.5">
                <Cloud className="w-5 h-5 text-primary" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-gray-200 font-regular text-md">
                  Cloud Infrastructure
                </p>
                <p className="text-gray-400 font-light text-xs text-justify">
                  Scalable, secure cloud for modern needs.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-1-list-3"}
            delay={0.25 + 6 * 0.05}
            inView
          >
            <div className="flex flex-row gap-4 items-start">
              <div className="pt-0.5">
                <Speech className="w-5 h-5 text-primary" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-gray-200 font-regular text-md">
                  Technology Consultation
                </p>
                <p className="text-gray-400 font-light text-xs text-justify">
                  Expert guidance to drive tech innovation.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </ShineBorder>
  );
}

export function Things() {
  return (
    <ShineBorder color="#F95454" borderRadius={0} className="px-16 py-12">
      <div className="flex gap-8 flex-col">
        <div className="flex gap-2 flex-col">
          <div className="text-xl lg:text-2xl text-left font-light mb-2">
            <BlurFade
              key={"division-card-2-title"}
              delay={0.25 + 3 * 0.05}
              inView
            >
              Lazuardy Things
            </BlurFade>
          </div>
          <div className="text-md font-light text-gray-400 text-justify">
            <BlurFade
              key={"division-card-2-description"}
              delay={0.25 + 4 * 0.05}
              inView
            >
              We brings smart tech to your world, with innovative hardware, IoT,
              and robotics solutions that make life easier and more connected.
            </BlurFade>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-8">
          <BlurFade
            key={"division-card-2-list-1"}
            delay={0.25 + 5 * 0.05}
            inView
          >
            <div className="flex flex-row gap-4 items-start">
              <div className="pt-0.5">
                <CircuitBoard className="w-5 h-5 text-primary" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-gray-200 font-regular text-md">
                  Hardware Engineering
                </p>
                <p className="text-gray-400 font-light text-xs text-justify">
                  Designing reliable, high-tech devices.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-2-list-2"}
            delay={0.25 + 6 * 0.05}
            inView
          >
            <div className="flex flex-row gap-4 items-start">
              <div className="pt-0.5">
                <MonitorSmartphone className="w-5 h-5 text-primary" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-gray-200 font-regular text-md">
                  Internet of Things
                </p>
                <p className="text-gray-400 font-light text-xs text-justify">
                  Connecting devices for smarter living.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-2-list-3"}
            delay={0.25 + 7 * 0.05}
            inView
          >
            <div className="flex flex-row gap-4 items-start">
              <div className="pt-0.5">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-gray-200 font-regular text-md">Robotics</p>
                <p className="text-gray-400 font-light text-xs text-justify">
                  Crafting automation for efficiency and ease.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </ShineBorder>
  );
}

export function Studio() {
  return (
    <ShineBorder color="#FFFFFF" borderRadius={0} className="px-16 py-12">
      <div className="flex gap-8 flex-col">
        <div className="flex gap-2 flex-col">
          <div className="text-xl lg:text-2xl text-left font-light mb-2">
            <BlurFade
              key={"division-card-3-title"}
              delay={0.25 + 4 * 0.05}
              inView
            >
              Lazuardy Studio
            </BlurFade>
          </div>
          <div className="text-md font-light text-gray-400 text-justify">
            <BlurFade
              key={"division-card-3-description"}
              delay={0.25 + 5 * 0.05}
              inView
            >
              We brings your brand to life with creative design, seamless UI/UX,
              and a friendly touch that makes every interaction memorable.
            </BlurFade>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-8">
          <BlurFade
            key={"division-card-3-list-1"}
            delay={0.25 + 6 * 0.05}
            inView
          >
            <div className="flex flex-row gap-4 items-start">
              <div className="pt-0.5">
                <Figma className="w-5 h-5 text-primary" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-gray-200 font-regular text-md">
                  UI/UX Designing
                </p>
                <p className="text-gray-400 font-light text-xs text-justify">
                  Creating intuitive, user-friendly app interfaces.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-3-list-2"}
            delay={0.25 + 7 * 0.05}
            inView
          >
            <div className="flex flex-row gap-4 items-start">
              <div className="pt-0.5">
                <UserSearch className="w-5 h-5 text-primary" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-gray-200 font-regular text-md">
                  UX Research
                </p>
                <p className="text-gray-400 font-light text-xs text-justify">
                  Insight-driven design for better experiences.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-3-list-3"}
            delay={0.25 + 8 * 0.05}
            inView
          >
            <div className="flex flex-row gap-4 items-start">
              <div className="pt-0.5">
                <Apple className="w-5 h-5 text-primary" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-gray-200 font-regular text-md">
                  Brand Identity
                </p>
                <p className="text-gray-400 font-light text-xs text-justify">
                  Building memorable and unique brand images.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </ShineBorder>
  );
}

export function AI() {
  return (
    <ShineBorder color="#219B9D" borderRadius={0} className="px-16 py-12">
      <div className="flex gap-8 flex-col">
        <div className="flex gap-2 flex-col">
          <div className="text-xl lg:text-2xl text-left font-light mb-2">
            <BlurFade
              key={"division-card-4-title"}
              delay={0.25 + 5 * 0.05}
              inView
            >
              Lazuardy AI
            </BlurFade>
          </div>
          <div className="text-md font-light text-gray-400 text-justify">
            <BlurFade
              key={"division-card-4-description"}
              delay={0.25 + 6 * 0.05}
              inView
            >
              We&apos;re here to make technology smarter for you, with advanced
              AI solutions like chatbots and deep learning tailored to your
              needs.
            </BlurFade>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-8">
          <BlurFade
            key={"division-card-4-list-1"}
            delay={0.25 + 7 * 0.05}
            inView
          >
            <div className="flex flex-row gap-4 items-start">
              <div className="pt-0.5">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-gray-200 font-regular text-md">
                  AI Integration
                </p>
                <p className="text-gray-400 font-light text-xs text-justify">
                  Embedding AI to enhance business solutions.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-4-list-2"}
            delay={0.25 + 8 * 0.05}
            inView
          >
            <div className="flex flex-row gap-4 items-start">
              <div className="pt-0.5">
                <SquareFunction className="w-5 h-5 text-primary" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-gray-200 font-regular text-md">
                  AI Research
                </p>
                <p className="text-gray-400 font-light text-xs text-justify">
                  Innovating with cutting-edge AI advancements.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade
            key={"division-card-4-list-3"}
            delay={0.25 + 9 * 0.05}
            inView
          >
            <div className="flex flex-row gap-4 items-start">
              <div className="pt-0.5">
                <ScanEye className="w-5 h-5 text-primary" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <p className="text-gray-200 font-regular text-md">
                  Computer Vision
                </p>
                <p className="text-gray-400 font-light text-xs text-justify">
                  Enabling machines to interpret visuals accurately.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </ShineBorder>
  );
}
