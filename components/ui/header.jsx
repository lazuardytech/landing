"use client";

import Link from "next/link";
import Logo from "@/components/ui/logo";
import BlurFade from "@/components/magicui/blur-fade";
import { Transition } from "@headlessui/react";
import { ZincBadge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const routes = {
  "/": "",
  "/byte": "Byte",
  "/things": "Things",
  "/studio": "Studio",
  "/ai": "AI",
};

export const navigations = [
  {
    label: "home",
    link: "/",
  },
  {
    label: "solutions",
    link: "/solutions",
  },
  {
    label: "works",
    link: "/works",
  },
  {
    label: "articles",
    link: "https://blog.lazuardy.tech",
    target: "_blank",
  },
  {
    label: "contact",
    link: "/contact",
  },
  // {
  //   label: "manifesto",
  //   link: "https://manifesto.lazuardy.tech",
  //   target: "_blank",
  // },
  {
    label: "partnership",
    link: "https://partnership.lazuardy.tech",
    target: "_blank",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <div className="select-none sticky top-0 right-0 z-50 w-full bg-black/30 backdrop-filter backdrop-blur bg-opacity-30 text-white border-b border-zinc-800">
      <div className="container px-10 lg:px-16 py-4 grid grid-rows">
        <HeaderDesktop
          pathname={pathname}
          menuExpanded={menuExpanded}
          setMenuExpanded={setMenuExpanded}
          navigations={navigations}
        />
        <HeaderMobile
          pathname={pathname}
          menuExpanded={menuExpanded}
          setMenuExpanded={setMenuExpanded}
          navigations={navigations}
        />
      </div>
    </div>
  );
}

export function HeaderNavigationDivider() {
  return (
    <span className="select-none pointer-events-none hover:cursor-default text-end text-zinc-600 font-2xl">
      /
    </span>
  );
}

export function HeaderDesktop({
  pathname,
  menuExpanded,
  setMenuExpanded,
  navigations,
}) {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1">
        <Link href="/">
          <div className="flex gap-1 justify-start pt-1.5">
            <BlurFade key="header-title" delay={0.25 + 0 * 0.05} inView>
              <Logo className="text-xl" />
            </BlurFade>
            <BlurFade key="header-subtitle" delay={0.25 + 24 * 0.05} inView>
              <div className="font-regular text-xl">
                {routes[pathname] || ""}
              </div>
            </BlurFade>
          </div>
        </Link>
      </div>
      <div className="hidden lg:flex col-span-2 justify-center text-center text-md pt-1 gap-6">
        {navigations.map((nav, index) => (
          <div key={"header-desktop-nav-" + index} className="flex gap-5">
            <BlurFade
              key={"header-desktop-nav-label-" + index}
              className="text-end transition-colors text-gray-400 font-medium hover:text-white pt-1.5"
              delay={0.25 + (index + 1) * 0.05}
              inView
            >
              <Link href={nav.link} target={nav.target ?? ""}>
                {nav.label}
              </Link>
            </BlurFade>
            {index === navigations.length - 1 ? null : (
              <BlurFade
                key={"header-desktop-nav-divider-" + index}
                className="pt-1.5"
                delay={0.25 + (index + 2) * 0.05}
                inView
              >
                <HeaderNavigationDivider />
              </BlurFade>
            )}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex col-span-1 justify-end pt-2">
        <BlurFade key="header-nav-5" delay={0.25 + 8 * 0.05} inView>
          <Link
            href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
            target="_blank"
          >
            <ZincBadge>Feeling Urgent?</ZincBadge>
          </Link>
        </BlurFade>
      </div>
      <div className="flex lg:hidden col-span-3 justify-end">
        <BlurFade
          key="header-nav-mobile-5"
          delay={0.25 + 8 * 0.05}
          inView
          className={`text-end font-medium pt-2`}
        >
          <ChevronDown
            className={`transition-all transform ease-in-out hover:text-white hover:cursor-pointer w-6 h-6 ${menuExpanded ? "text-white rotate-180" : "text-gray-400 rotate-0"}`}
            onClick={() => setMenuExpanded(!menuExpanded)}
          />
        </BlurFade>
      </div>
    </div>
  );
}

export function HeaderMobile({
  pathname,
  menuExpanded,
  setMenuExpanded,
  navigations,
}) {
  return (
    <Transition
      show={menuExpanded}
      className="transition-all duration-500 overflow-hidden grid lg:hidden"
      enterFrom="transform max-h-0"
      enterTo="transform max-h-[9999px]"
      leaveFrom="transform max-h-[9999px]"
      leaveTo="transform max-h-0"
    >
      <div className="grid grid-rows gap-6 pb-4">
        <div className="grid grid-cols-2 mt-6 gap-4">
          {navigations.map((nav, index) => (
            <div
              key={index}
              className="col-span-1 text-start transition-colors text-gray-400 font-medium hover:text-white"
            >
              <Link href={nav.link} target={nav.target ?? ""}>
                {nav.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="text-md font-light text-gray-400">
            Feeling urgent?
          </div>
          <div>
            <Link
              href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
              target="_blank"
              className="font-bold transform-colors duration-500 hover:text-white hover:underline"
            >
              Let&apos;s talk.
            </Link>
          </div>
        </div>
      </div>
    </Transition>
  );
}
