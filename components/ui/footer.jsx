import Link from "next/link";
import Logo from "@/components/ui/logo";
import WordRotate from "@/components/ui/word-rotate";
import { CompanyData } from "@/lib/config";
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
    <div className="w-full bg-foreground text-background border-t border-zinc-800 bg-black">
      <div className="container py-10 px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <Logo className="w-full text-start text-xl" withTM="true" />
              <div className="text-sm md:text-md lg:text-lg flex font-light max-w-lg text-left">
                <span className="pt-2">Helping your businesses </span>
                <WordRotate
                  className="ms-1 text-black dark:text-white"
                  words={phrases}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
              <div className="flex flex-col text-sm text-left font-light text-gray-400">
                <div className="text-white mb-2">{CompanyData.legalName}</div>
                <div>
                  <Link
                    href={CompanyData.business.link}
                    target={CompanyData.business.target}
                    className="font-regular transition-color duration-300 hover:text-white"
                  >
                    {CompanyData.business.html}
                  </Link>
                </div>
                <div className="hidden lg:block mt-14">
                  {CompanyData.copyright.label}
                </div>
              </div>
              <div className="flex flex-col text-sm text-left font-light text-gray-400">
                <div className="flex flex-rows-1 lg:flex-rows-2 gap-4 text-sm text-left">
                  <div>
                    <Link
                      href="/terms"
                      className="transition-colors duration-500 font-regular text-gray-300 text-sm hover:text-white"
                    >
                      Terms of Service
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/privacy"
                      className="transition-colors duration-500 font-regular text-gray-300 text-sm hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>
                <div className="mt-2">{CompanyData.copyright.html}</div>
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
                  {item.items &&
                    item.items.map((subItem, index) => (
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
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center w-full flex lg:hidden mb-16 lg:mb-10 font-light text-sm text-gray-400">
            {CompanyData.copyright.label}
          </div>
        </div>
      </div>
    </div>
  );
}
