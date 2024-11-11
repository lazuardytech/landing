import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import Logo from "@/components/ui/logo";
import WordRotate from "@/components/magicui/word-rotate";
import { socials, navigations, solutions } from "@/lib/state";

export const navigationItems = [
  {
    label: "Connect.",
    items: socials,
  },
  {
    label: "Navigate.",
    items: navigations,
  },
  {
    label: "Solutions.",
    items: solutions,
  },
];

export const phrases = [
  "grow bigger.",
  "outstands other.",
  "shine brighter.",
  "be better.",
  "succeed faster.",
  "thrive stronger.",
  "achieve more.",
  "reach higher.",
  "stand out.",
  "innovate boldly.",
  "perform better.",
  "connect deeper.",
  "expand wider.",
  "excel further.",
  "progress smarter.",
  "evolve faster.",
  "transform successfully.",
  "lead confidently.",
  "build trust.",
  "adapt easier.",
];

export default function Footer() {
  return (
    <BlurFade
      key="footer"
      className="w-full bg-foreground text-background border-t border-zinc-800 bg-black"
      delay={0.25 + 0 * 0.05}
      inView
    >
      <div className="container py-10 px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <BlurFade key="footer-title" delay={0.25 + 0 * 0.05} inView>
                <Logo className="w-full text-start text-xl" withTM="true" />
              </BlurFade>
              <BlurFade
                key="footer-text-1"
                delay={0.25 + 1 * 0.05}
                inView
                className="text-md md:text-md lg:text-lg flex font-light max-w-lg text-left"
              >
                <span className="pt-2">Helping your businesses </span>
                <WordRotate
                  className="ms-1 text-black dark:text-white"
                  words={phrases}
                />
              </BlurFade>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col text-sm text-left font-light text-gray-400">
                <div className="text-white mb-2">
                  <BlurFade key="footer-text-2" delay={0.25 + 2 * 0.05} inView>
                    PT Inovasi Kolektif Digital
                  </BlurFade>
                </div>
                <div>
                  <BlurFade key="footer-text-3" delay={0.25 + 3 * 0.05} inView>
                    Menara Suara Merdeka
                  </BlurFade>
                </div>
                <div>
                  <BlurFade key="footer-text-4" delay={0.25 + 4 * 0.05} inView>
                    Jl. Pandanaran No. 30, Semarang
                  </BlurFade>
                </div>
                <div>
                  <BlurFade key="footer-text-5" delay={0.25 + 5 * 0.05} inView>
                    Indonesia 50134
                  </BlurFade>
                </div>
                <div className="hidden lg:block mt-14">
                  <BlurFade
                    key="footer-desktop-copyright"
                    delay={0.25 + 6 * 0.05}
                    inView
                  >
                    © Lazuardy 2024. All rights reserved.
                  </BlurFade>
                </div>
              </div>
              <div className="flex flex-rows-1 lg:flex-rows-2 gap-4 text-sm max-w-lg text-left">
                <Link
                  href="/terms"
                  className="transition-colors duration-500 font-light text-gray-200 text-sm hover:text-white"
                >
                  <BlurFade key="footer-link-1" delay={0.25 + 2 * 0.05} inView>
                    Terms of Service
                  </BlurFade>
                </Link>
                <Link
                  href="/privacy"
                  className="transition-colors duration-500 font-light text-gray-200 text-sm hover:text-white"
                >
                  <BlurFade key="footer-link-2" delay={0.25 + 3 * 0.05} inView>
                    Privacy Policy
                  </BlurFade>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  <BlurFade
                    key={"footer-link-" + item.label}
                    delay={0.25 + 0 * 0.05}
                    inView
                  >
                    {item.link ? (
                      <Link
                        href={item.link}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.label}</span>
                      </Link>
                    ) : (
                      <div className="text-lg">{item.label}</div>
                    )}
                  </BlurFade>
                  {item.items &&
                    item.items.map((subItem, index) => (
                      <BlurFade
                        key={"footer-link-" + index + subItem.link}
                        delay={0.25 + (index + 1) * 0.05}
                        inView
                      >
                        <Link
                          key={index}
                          href={subItem.link}
                          target={subItem.target ?? ""}
                          className="flex justify-between items-center"
                        >
                          <span className="transition-colors duration-500 font-light text-gray-400 text-sm hover:text-white">
                            {subItem.label}
                          </span>
                        </Link>
                      </BlurFade>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex lg:hidden mb-10 font-light text-sm text-gray-400">
            <BlurFade
              key="footer-mobile-copyright"
              className="text-center w-full"
              delay={0.25 + 6 * 0.05}
              inView
            >
              © Lazuardy 2024. All rights reserved.
            </BlurFade>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}
