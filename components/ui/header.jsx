"use client";

import Link from "next/link";
import Logo from "@/components/ui/logo";
import BlurFade from "@/components/ui/blur-fade";
import { Transition } from "@headlessui/react";
import { ZincBadge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigations } from "@/lib/state";

export const routes = {
  "/": "/",
  "/solutions": "/solutions",
  "/byte": "/solutions",
  "/things": "/solutions",
  "/studio": "/solutions",
  "/ai": "/solutions",
  "/works": "/works",
  "/contact": "/contact",
};

export const solutionRoutes = {
  "/": "",
  "/byte": "Byte",
  "/things": "Things",
  "/studio": "Studio",
  "/ai": "AI",
};

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
        <HeaderMobile menuExpanded={menuExpanded} navigations={navigations} />
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
      <div className="col-span-1 pt-1">
        <Link href="/">
          <div className="flex gap-1 justify-start">
            <Logo className="text-xl pb-2" />
            <BlurFade key="header-subtitle" delay={1.5} inView>
              <div className="font-regular text-xl mt-1.5">
                {solutionRoutes[pathname] || ""}
              </div>
            </BlurFade>
          </div>
        </Link>
      </div>
      <div className="hidden lg:flex col-span-2 justify-center text-center text-md gap-6 pb-2">
        {navigations.map((nav, index) => (
          <div key={"header-desktop-nav-" + index} className="flex gap-5">
            <div
              key={"header-desktop-nav-label-" + index}
              className={`text-end transition-colors font-medium hover:text-white pt-1.5 ${routes[pathname] === nav.link ? "text-white" : "text-gray-500"}`}
            >
              <Link href={nav.link} target={nav.target ?? ""}>
                {nav.label}
              </Link>
            </div>
            {index === navigations.length - 1 ? null : (
              <div
                key={"header-desktop-nav-divider-" + index}
                className="pt-1.5"
              >
                <HeaderNavigationDivider />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex col-span-1 justify-end pt-1">
        <Link
          href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
          target="_blank"
        >
          <ZincBadge>Feeling Urgent?</ZincBadge>
        </Link>
      </div>
      <div className="flex lg:hidden text-end font-medium col-span-3 justify-end pt-1.5">
        <ChevronDown
          className={`transition-all transform ease-in-out hover:text-white hover:cursor-pointer w-6 h-6 ${menuExpanded ? "text-white rotate-180" : "text-gray-400 rotate-0"}`}
          onClick={() => setMenuExpanded(!menuExpanded)}
        />
      </div>
    </div>
  );
}

export function HeaderMobile({ menuExpanded, navigations }) {
  return (
    <Transition
      show={menuExpanded}
      className="transition-all duration-500 overflow-hidden grid lg:hidden"
      enterFrom="transform max-h-0"
      enterTo="transform max-h-[9999px]"
      leaveFrom="transform max-h-[9999px]"
      leaveTo="transform max-h-0"
    >
      <div className="grid grid-rows gap-8 pb-4">
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
        <div className="flex justify-start gap-2">
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
