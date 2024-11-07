import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import Logo from "@/components/ui/logo";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  return (
    <div className="select-none sticky top-0 right-0 z-50 w-full bg-black/30 backdrop-filter backdrop-blur bg-opacity-30 text-white border-b border-zinc-800">
      <div className="container px-20 py-4 grid grid-cols-4">
        <div className="col-span-1 flex justify-start pt-1.5">
          <BlurFade key={"header-title"} delay={0.25 + 0 * 0.05} inView>
            <Logo className="text-xl" />
          </BlurFade>
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
            <Link href="/urgent">
              <Badge
                className="text-xs font-medium px-4 py-1 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:border-zinc-400 transition-colors duration-500"
                variant="outline"
              >
                Feeling Urgent?
              </Badge>
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
