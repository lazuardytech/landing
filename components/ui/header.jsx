"use client";

import Link from "next/link";
import Logo from "@/components/ui/logo";
import BlurFade from "@/components/magicui/blur-fade";
import { ZincBadge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";

const routes = {
  "/": "",
  "/byte": "Byte",
  "/things": "Things",
  "/studio": "Studio",
  "/ai": "AI",
};

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="select-none sticky top-0 right-0 z-50 w-full bg-black/30 backdrop-filter backdrop-blur bg-opacity-30 text-white border-b border-zinc-800">
      <div className="container px-16 py-4 grid grid-cols-4">
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
        <div className="col-span-2 flex justify-center text-center text-md pt-1">
          <BlurFade
            key={"header-nav-1"}
            delay={0.25 + 1 * 0.05}
            inView
            className="text-end transition-colors text-gray-400 font-medium hover:text-white hover:cursor-pointer pt-1.5"
          >
            <Link href="/">home</Link>
          </BlurFade>
          <BlurFade
            key={"header-div-1"}
            delay={0.25 + 2 * 0.05}
            inView
            className="pt-1.5"
          >
            <HeaderNavigationDivider />
          </BlurFade>
          <BlurFade
            key={"header-nav-2"}
            delay={0.25 + 3 * 0.05}
            inView
            className="text-end transition-colors text-gray-400 font-medium hover:text-white hover:cursor-pointer ms-6 pt-1.5"
          >
            <Link href="/contact">contact</Link>
          </BlurFade>
          <BlurFade
            key={"header-div-2"}
            delay={0.25 + 4 * 0.05}
            inView
            className="pt-1.5"
          >
            <HeaderNavigationDivider />
          </BlurFade>
          <BlurFade
            key={"header-nav-3"}
            delay={0.25 + 5 * 0.05}
            inView
            className="text-end transition-colors text-gray-400 font-medium hover:text-white hover:cursor-pointer ms-6 pt-1.5"
          >
            <Link href="https://blog.lazuardy.tech" target="_blank">
              articles
            </Link>
          </BlurFade>
          <BlurFade
            key={"header-div-3"}
            delay={0.25 + 6 * 0.05}
            inView
            className="pt-1.5"
          >
            <HeaderNavigationDivider />
          </BlurFade>
          <BlurFade
            key={"header-nav-4"}
            delay={0.25 + 7 * 0.05}
            inView
            className="text-end transition-colors text-gray-400 font-medium hover:text-white hover:cursor-pointer ms-6 pt-1.5"
          >
            <Link href="https://manifesto.lazuardy.tech" target="_blank">
              manifesto
            </Link>
          </BlurFade>
          <BlurFade
            key={"header-div-4"}
            delay={0.25 + 8 * 0.05}
            inView
            className="pt-1.5"
          >
            <HeaderNavigationDivider />
          </BlurFade>
          <BlurFade
            key={"header-nav-5"}
            delay={0.25 + 9 * 0.05}
            inView
            className="text-end transition-colors text-gray-400 font-medium hover:text-white hover:cursor-pointer ms-6 pt-1.5"
          >
            <Link href="https://partnership.lazuardy.tech" target="_blank">
              partnership
            </Link>
          </BlurFade>
        </div>
        <div className="col-span-1 flex justify-end">
          <BlurFade
            key={"header-nav-5"}
            delay={0.25 + 8 * 0.05}
            inView
            className="pt-1.5"
          >
            <Link
              href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
              target="_blank"
            >
              <ZincBadge>Feeling Urgent?</ZincBadge>
            </Link>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

export function HeaderNavigationDivider() {
  return (
    <span className="select-none pointer-events-none hover:cursor-default ms-6 text-end text-zinc-600 font-2xl">
      /
    </span>
  );
}
