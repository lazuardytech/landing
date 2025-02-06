"use client";

import { Button } from "@/components/ui/button";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import { Marquee } from "@/components/ui/marquee";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import lazuardyAi from "@/public/images/logo/lazuardy-ai.png";
import lazuardyByte from "@/public/images/logo/lazuardy-byte.png";
import lazuardyStudio from "@/public/images/logo/lazuardy-studio.png";
import lazuardyThings from "@/public/images/logo/lazuardy-things.png";
import solution1 from "@/public/images/solution/solution-1.png";
import solution10 from "@/public/images/solution/solution-10.png";
import solution11 from "@/public/images/solution/solution-11.png";
import solution12 from "@/public/images/solution/solution-12.png";
import solution2 from "@/public/images/solution/solution-2.png";
import solution3 from "@/public/images/solution/solution-3.png";
import solution4 from "@/public/images/solution/solution-4.png";
import solution5 from "@/public/images/solution/solution-5.png";
import solution6 from "@/public/images/solution/solution-6.png";
import solution7 from "@/public/images/solution/solution-7.png";
import solution8 from "@/public/images/solution/solution-8.png";
import solution9 from "@/public/images/solution/solution-9.png";
import {
  Apple,
  AppWindow,
  Brain,
  CircuitBoard,
  Cloud,
  Cpu,
  Figma,
  MonitorSmartphone,
  Speech,
  SquareFunction,
  UserRoundSearch,
  View,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, useEffect, useRef } from "react";

const lazuardyByteImages = [
  {
    name: "Lazuardy Byte 1",
    img: solution1,
  },
  {
    name: "Lazuardy Byte 2",
    img: solution2,
  },
  {
    name: "Lazuardy Byte 3",
    img: solution3,
  },
];

const lazuardyThingsImages = [
  {
    name: "Lazuardy Things 1",
    img: solution4,
  },
  {
    name: "Lazuardy Things 2",
    img: solution5,
  },
  {
    name: "Lazuardy Things 3",
    img: solution6,
  },
];

const lazuardyStudioImages = [
  {
    name: "Lazuardy Studio 1",
    img: solution7,
  },
  {
    name: "Lazuardy Studio 2",
    img: solution8,
  },
  {
    name: "Lazuardy Studio 3",
    img: solution9,
  },
];

const lazuardyAiImages = [
  {
    name: "Lazuardy AI 1",
    img: solution10,
  },
  {
    name: "Lazuardy AI 2",
    img: solution11,
  },
  {
    name: "Lazuardy AI 3",
    img: solution12,
  },
];

export default function Solution() {
  const lazuardyByteDiv = useRef(null);
  const lazuardyByteLogo = useRef(null);
  const lazuardyThingsDiv = useRef(null);
  const lazuardyThingsLogo = useRef(null);
  const lazuardyStudioDiv = useRef(null);
  const lazuardyStudioLogo = useRef(null);
  const lazuardyAiDiv = useRef(null);
  const lazuardyAiLogo = useRef(null);

  const showClass = "md:opacity-100";
  const showClass2 = "md:opacity-90";
  const hideClass = "md:opacity-20";
  const hideClass2 = "md:opacity-20";
  const threshold = 0.6;

  useEffect(() => {
    const _lazuardyByteDiv = lazuardyByteDiv?.current;
    const _lazuardyByteLogo = lazuardyByteLogo?.current;
    const _lazuardyThingsDiv = lazuardyThingsDiv?.current;
    const _lazuardyThingsLogo = lazuardyThingsLogo?.current;
    const _lazuardyStudioDiv = lazuardyStudioDiv?.current;
    const _lazuardyStudioLogo = lazuardyStudioLogo?.current;
    const _lazuardyAiDiv = lazuardyAiDiv?.current;
    const _lazuardyAiLogo = lazuardyAiLogo?.current;

    if (
      !_lazuardyByteDiv ||
      !_lazuardyByteLogo ||
      !_lazuardyThingsDiv ||
      !_lazuardyThingsLogo ||
      !_lazuardyStudioDiv ||
      !_lazuardyStudioLogo ||
      !_lazuardyAiDiv ||
      !_lazuardyAiLogo
    )
      return;

    const _lazuardyByteDivObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            _lazuardyByteLogo.classList.add(showClass);
            _lazuardyByteLogo.classList.remove(hideClass);
            _lazuardyByteDiv.classList.add(showClass2);
            _lazuardyByteDiv.classList.remove(hideClass2);

            _lazuardyThingsLogo.classList.add(hideClass);
            _lazuardyThingsLogo.classList.remove(showClass);
            _lazuardyThingsDiv.classList.add(hideClass2);
            _lazuardyThingsDiv.classList.remove(showClass2);

            _lazuardyStudioLogo.classList.add(hideClass);
            _lazuardyStudioLogo.classList.remove(showClass);
            _lazuardyStudioDiv.classList.add(hideClass2);
            _lazuardyStudioDiv.classList.remove(showClass2);

            _lazuardyAiLogo.classList.add(hideClass);
            _lazuardyAiLogo.classList.remove(showClass);
            _lazuardyAiDiv.classList.add(hideClass2);
            _lazuardyAiDiv.classList.remove(showClass2);
          }
        });
      },
      { threshold: threshold },
    );

    const _lazuardyThingsDivObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            _lazuardyByteLogo.classList.add(hideClass);
            _lazuardyByteLogo.classList.remove(showClass);
            _lazuardyByteDiv.classList.add(hideClass2);
            _lazuardyByteDiv.classList.remove(showClass2);

            _lazuardyThingsLogo.classList.add(showClass);
            _lazuardyThingsLogo.classList.remove(hideClass);
            _lazuardyThingsDiv.classList.add(showClass2);
            _lazuardyThingsDiv.classList.remove(hideClass2);

            _lazuardyStudioLogo.classList.add(hideClass);
            _lazuardyStudioLogo.classList.remove(showClass);
            _lazuardyStudioDiv.classList.add(hideClass2);
            _lazuardyStudioDiv.classList.remove(showClass2);

            _lazuardyAiLogo.classList.add(hideClass);
            _lazuardyAiLogo.classList.remove(showClass);
            _lazuardyAiDiv.classList.add(hideClass2);
            _lazuardyAiDiv.classList.remove(showClass2);
          }
        });
      },
      { threshold: threshold },
    );

    const _lazuardyStudioDivObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            _lazuardyByteLogo.classList.add(hideClass);
            _lazuardyByteLogo.classList.remove(showClass);
            _lazuardyByteDiv.classList.add(hideClass2);
            _lazuardyByteDiv.classList.remove(showClass2);

            _lazuardyThingsLogo.classList.add(hideClass);
            _lazuardyThingsLogo.classList.remove(showClass);
            _lazuardyThingsDiv.classList.add(hideClass2);
            _lazuardyThingsDiv.classList.remove(showClass2);

            _lazuardyStudioLogo.classList.add(showClass);
            _lazuardyStudioLogo.classList.remove(hideClass);
            _lazuardyStudioDiv.classList.add(showClass2);
            _lazuardyStudioDiv.classList.remove(hideClass2);

            _lazuardyAiLogo.classList.add(hideClass);
            _lazuardyAiLogo.classList.remove(showClass);
            _lazuardyAiDiv.classList.add(hideClass2);
            _lazuardyAiDiv.classList.remove(showClass2);
          }
        });
      },
      { threshold: threshold },
    );

    const _lazuardyAiDivObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            _lazuardyByteLogo.classList.add(hideClass);
            _lazuardyByteLogo.classList.remove(showClass);
            _lazuardyByteDiv.classList.add(hideClass2);
            _lazuardyByteDiv.classList.remove(showClass2);

            _lazuardyThingsLogo.classList.add(hideClass);
            _lazuardyThingsLogo.classList.remove(showClass);
            _lazuardyThingsDiv.classList.add(hideClass2);
            _lazuardyThingsDiv.classList.remove(showClass2);

            _lazuardyStudioLogo.classList.add(hideClass);
            _lazuardyStudioLogo.classList.remove(showClass);
            _lazuardyStudioDiv.classList.add(hideClass2);
            _lazuardyStudioDiv.classList.remove(showClass2);

            _lazuardyAiLogo.classList.add(showClass);
            _lazuardyAiLogo.classList.remove(hideClass);
            _lazuardyAiDiv.classList.add(showClass2);
            _lazuardyAiDiv.classList.remove(hideClass2);
          }
        });
      },
      { threshold: threshold },
    );

    _lazuardyByteDivObserver.observe(_lazuardyByteDiv);
    _lazuardyThingsDivObserver.observe(_lazuardyThingsDiv);
    _lazuardyStudioDivObserver.observe(_lazuardyStudioDiv);
    _lazuardyAiDivObserver.observe(_lazuardyAiDiv);

    return () => {
      if (_lazuardyByteDiv)
        _lazuardyByteDivObserver.unobserve(_lazuardyByteDiv);
      if (_lazuardyThingsDiv)
        _lazuardyThingsDivObserver.unobserve(_lazuardyThingsDiv);
      if (_lazuardyStudioDivObserver)
        _lazuardyStudioDivObserver.unobserve(_lazuardyStudioDiv);
      if (_lazuardyAiDivObserver)
        _lazuardyAiDivObserver.unobserve(_lazuardyAiDiv);
    };
  }, []);

  return (
    <div className="flex flex-col w-full relative">
      <div className="flex flex-col w-full items-center justify-center md:sticky md:top-8 z-30">
        <div className="grid grid-cols-2 w-full pt-20 pb-4 md:max-w-screen-lg border border-t-0 border-b-0 border-neutral-400 border-opacity-90 select-none backdrop-filter backdrop-blur-lg bg-neutral-200/40">
          <div className="flex w-full col-span-2 px-8">
            <Title className="text-2xl md:text-5xl">
              We got a complete solution
            </Title>
          </div>
        </div>
        <HorizontalBorder className="flex w-full" />
        <div className="hidden md:flex flex-col w-full md:max-w-screen-lg border border-t-0 border-b-0 border-neutral-400 border-opacity-90 select-none bg-main">
          <div className="grid grid-cols-4 w-full">
            <div className="flex flex-col w-full justify-center items-center p-4 border-r border-neutral-400 border-opacity-90">
              <SolutionDivisionLogo
                ref={lazuardyByteLogo}
                src={lazuardyByte}
                alt="Lazuardy Byte"
              />
            </div>
            <div className="flex flex-col w-full justify-center items-center p-4 border-r border-neutral-400 border-opacity-90">
              <SolutionDivisionLogo
                ref={lazuardyThingsLogo}
                src={lazuardyThings}
                alt="Lazuardy Things"
              />
            </div>
            <div className="flex flex-col w-full justify-center items-center p-4 border-r border-neutral-400 border-opacity-90">
              <SolutionDivisionLogo
                ref={lazuardyStudioLogo}
                src={lazuardyStudio}
                alt="Lazuardy Studio"
              />
            </div>
            <div className="flex flex-col w-full justify-center items-center p-4">
              <SolutionDivisionLogo
                ref={lazuardyAiLogo}
                src={lazuardyAi}
                alt="Lazuardy AI"
              />
            </div>
          </div>
        </div>
        <HorizontalBorder className="hidden md:flex w-full" />
      </div>

      <LayoutLine>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex flex-col w-full border-r border-b md:border-b-0 border-neutral-400 border-opacity-90">
            <div
              ref={lazuardyByteDiv}
              className="flex w-full transition-opacity duration-200 opacity-80 md:opacity-20"
            >
              <SolutionServiceGallery
                logo={lazuardyByte}
                images={lazuardyByteImages}
              />
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center p-8 md:transition-colors md:duration-200 md:hover:bg-neutral-300">
            <Paragraph className="text-sm">
              At <span className="font-semibold">Lazuardy Byte</span>, we create
              custom software and cloud solutions that help businesses work
              smarter, with a team that builds reliable, scalable systems
              tailored to your needs.
            </Paragraph>
            <Paragraph className="text-sm mt-4">
              Whether automating tasks or optimizing infrastructure, we make
              tech simple and effective. Our expert team ensures your systems
              are efficient, secure, and easy to use.
            </Paragraph>
            <SolutionServiceItem
              Icon={AppWindow}
              label="Software Engineering"
              className="mt-8"
            />
            <SolutionServiceItem
              Icon={Cloud}
              label="Cloud Infrastructure"
              className="mt-4"
            />
            <SolutionServiceItem
              Icon={Speech}
              label="Technology Consultation"
              className="mt-4"
            />
            <div className="flex space-x-4 mt-8 w-full">
              <Button size="default" variant="default" asChild>
                <Link
                  href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I Need This
                </Link>
              </Button>
              <Button size="default" variant="link" asChild>
                <Link href="/contact">I Want to Know More</Link>
              </Button>
            </div>
          </div>
        </div>
      </LayoutLine>
      <HorizontalBorder />

      <LayoutLine>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex flex-col w-full justify-center items-center p-8 md:transition-colors md:duration-200 md:hover:bg-neutral-300 border-r border-neutral-400 border-opacity-90">
            <Paragraph className="text-sm">
              At <span className="font-semibold">Lazuardy Things</span>, we
              develop internet of things, robotics, and hardware solutions to
              bring smart technology into your business. From connected devices
              to automation systems, we design and build reliable hardware that
              enhances efficiency.
            </Paragraph>
            <Paragraph className="text-sm mt-4">
              Our expertise ensures seamless integration between software and
              hardware for a smooth, intelligent workflow.
            </Paragraph>
            <SolutionServiceItem
              Icon={CircuitBoard}
              label="Hardware Engineering"
              className="mt-6"
            />
            <SolutionServiceItem
              Icon={MonitorSmartphone}
              label="Internet of Things"
              className="mt-4"
            />
            <SolutionServiceItem Icon={Cpu} label="Robotics" className="mt-4" />
            <div className="flex space-x-4 mt-8 w-full">
              <Button size="default" variant="default" asChild>
                <Link
                  href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I Need This
                </Link>
              </Button>
              <Button size="default" variant="link" asChild>
                <Link href="/contact">I Want to Know More</Link>
              </Button>
            </div>
          </div>
          <div
            ref={lazuardyThingsDiv}
            className="flex w-full transition-opacity duration-200 opacity-80 md:opacity-20 border-b md:border-b-0 border-neutral-400 border-opacity-90 order-first md:order-last"
          >
            <SolutionServiceGallery
              logo={lazuardyThings}
              images={lazuardyThingsImages}
            />
          </div>
        </div>
      </LayoutLine>
      <HorizontalBorder />

      <LayoutLine>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex flex-col w-full border-r border-b md:border-b-0 border-neutral-400 border-opacity-90">
            <div
              ref={lazuardyStudioDiv}
              className="flex w-full transition-opacity duration-200 opacity-80 md:opacity-20"
            >
              <SolutionServiceGallery
                logo={lazuardyStudio}
                images={lazuardyStudioImages}
              />
            </div>
          </div>
          <div className="flex flex-col w-full p-8 justify-center items-center md:transition-colors md:duration-200 md:hover:bg-neutral-300">
            <Paragraph className="text-sm">
              At <span className="font-semibold">Lazuardy Studio</span>, we
              craft UI/UX designs, brand identities, and digital experiences
              that elevate your business. From intuitive interfaces to
              compelling visuals, we ensure every design is both functional and
              engaging.
            </Paragraph>
            <Paragraph className="text-sm mt-4">
              Whether you need a website, app design, or a complete brand
              refresh, we bring creativity and strategy together. We design with
              purpose, making every interaction seamless and impactful.
            </Paragraph>
            <SolutionServiceItem
              Icon={Figma}
              label="UI/UX Designing"
              className="mt-6"
            />
            <SolutionServiceItem
              Icon={UserRoundSearch}
              label="UX Research"
              className="mt-4"
            />
            <SolutionServiceItem
              Icon={Apple}
              label="Brand Identity"
              className="mt-4"
            />
            <div className="flex space-x-4 mt-8 w-full">
              <Button size="default" variant="default" asChild>
                <Link
                  href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I Need This
                </Link>
              </Button>
              <Button size="default" variant="link" asChild>
                <Link href="/contact">I Want to Know More</Link>
              </Button>
            </div>
          </div>
        </div>
      </LayoutLine>
      <HorizontalBorder />

      <LayoutLine>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex flex-col w-full justify-center items-center p-8 md:transition-colors md:duration-200 md:hover:bg-neutral-300 border-r border-neutral-400 border-opacity-90">
            <Paragraph className="text-sm">
              At <span className="font-semibold">Lazuardy AI</span>, we
              integrate AI, machine learning, and automation to make businesses
              smarter. From predictive analytics to intelligent chatbots, we
              build AI solutions that enhance efficiency and decision-making.
            </Paragraph>
            <Paragraph className="text-sm mt-4">
              Whether you need AI-powered automation or deep learning models, we
              turn complex data into practical solutions. We make AI accessible,
              reliable, and tailored to your business needs.
            </Paragraph>
            <SolutionServiceItem
              Icon={Brain}
              label="AI Integration"
              className="mt-6"
            />
            <SolutionServiceItem
              Icon={SquareFunction}
              label="AI Research"
              className="mt-4"
            />
            <SolutionServiceItem
              Icon={View}
              label="Computer Vision"
              className="mt-4"
            />
            <div className="flex space-x-4 mt-8 w-full">
              <Button size="default" variant="default" asChild>
                <Link
                  href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I Need This
                </Link>
              </Button>
              <Button size="default" variant="link" asChild>
                <Link href="/contact">I Want to Know More</Link>
              </Button>
            </div>
          </div>
          <div
            ref={lazuardyAiDiv}
            className="flex w-full transition-opacity duration-200 opacity-80 md:opacity-20 border-b md:border-b-0 border-neutral-400 border-opacity-90 order-first md:order-last"
          >
            <SolutionServiceGallery
              logo={lazuardyAi}
              images={lazuardyAiImages}
            />
          </div>
        </div>
      </LayoutLine>
      <HorizontalBorder />
    </div>
  );
}

export const SolutionDivisionLogo = forwardRef(function ({ src, alt }, ref) {
  return (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      draggable={false}
      width={400}
      height={200}
      placeholder="blur"
      className="flex w-16 md:w-24 h-full select-none object-fit transition-opacity duration-200 opacity-100 md:opacity-20"
    />
  );
});
SolutionDivisionLogo.displayName = "SolutionDivisionLogo";

export function SolutionServiceItem({ Icon, label, className }) {
  return (
    <div className={`flex w-full space-x-4 ${className}`}>
      <Icon className="w-5 h-5" strokeWidth={1.6} />
      <p className="w-full font-regular text-sm text-black text-justify leading-snug">
        {label}
      </p>
    </div>
  );
}

export function SolutionServiceGallery({ logo, images }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden -mb-4 z-20">
      <div className="flex flex-row gap-4 [perspective:300px]">
        <Marquee
          className="h-[40vh] md:h-[70vh] justify-center overflow-hidden [--duration:20s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {images.map((data, idx) => (
            <Image
              key={idx}
              src={data.img}
              alt={data.name}
              width={400}
              height={600}
              placeholder="blur"
              loading="eager"
              className="select-none mx-auto w-2/5 md:w-2/3 h-full border border-neutral-400 shadow-2xl"
            />
          ))}
        </Marquee>
      </div>
      <div className="absolute md:hidden top-0 left-0">
        <div className="flex w-full h-full items-center justify-center">
          <div className="flex mt-8 ml-8">
            <Image
              src={logo}
              alt={"Logo"}
              draggable={false}
              width={400}
              height={200}
              placeholder="blur"
              className="flex w-20 h-full select-none object-fit transition-opacity duration-200 opacity-100 md:opacity-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
