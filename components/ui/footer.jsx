import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import Logo from "@/components/ui/logo";
import WordRotate from "@/components/magicui/word-rotate";

export default function Footer() {
  const navigationItems = [
    {
      title: "Connect.",
      items: [
        {
          title: "Instagram",
          href: "https://instagram.com/lazuardy.tech",
          target: "_blank",
        },
        {
          title: "LinkedIn",
          href: "https://linkedin.com/company/lazuardy/?viewAsMember=true",
          target: "_blank",
        },
        {
          title: "Medium",
          href: "https://blog.lazuardy.tech",
          target: "_blank",
        },
        {
          title: "GitHub",
          href: "https://github.com/lazuardy-tech",
          target: "_blank",
        },
      ],
    },
    {
      title: "Navigate.",
      items: [
        {
          title: "home",
          href: "/",
        },
        {
          title: "contact",
          href: "/contact",
        },
        {
          title: "articles",
          href: "https://blog.lazuardy.tech",
          target: "_blank",
        },
        {
          title: "manifesto",
          href: "https://manifesto.lazuardy.tech",
          target: "_blank",
        },
        {
          title: "partnership",
          href: "https://partnership.lazuardy.tech",
          target: "_blank",
        },
      ],
    },
    {
      title: "Solutions.",
      items: [
        {
          title: "technology consultation",
          href: "/byte",
        },
        {
          title: "cloud infrastructure",
          href: "/byte",
        },
        {
          title: "software engineering",
          href: "/byte",
        },
        {
          title: "hardware engineering",
          href: "/things",
        },
        {
          title: "internet of things",
          href: "/things",
        },
        {
          title: "ui/ux design",
          href: "/studio",
        },
        {
          title: "brand identity",
          href: "/studio",
        },
        {
          title: "artificial intelligence",
          href: "/ai",
        },
        {
          title: "computer vision",
          href: "/ai",
        },
      ],
    },
  ];

  const phrases = [
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

  return (
    <div className="w-full bg-foreground text-background border-t border-zinc-800 bg-black">
      <div className="container px-16 py-14">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <BlurFade key={"footer-title"} delay={0.25 + 0 * 0.05} inView>
                <Logo className="w-full text-start text-2xl" withTM="true" />
              </BlurFade>
              <BlurFade
                key={"footer-text-1"}
                delay={0.25 + 1 * 0.05}
                inView
                className="flex text-lg font-light max-w-lg text-left"
              >
                <span className="pt-2">Helping your businesses </span>
                <WordRotate
                  className="ms-1 text-black dark:text-white"
                  words={phrases}
                />
              </BlurFade>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm text-left font-light text-gray-400">
                <div className="text-white mb-2">
                  <BlurFade
                    key={"footer-text-2"}
                    delay={0.25 + 2 * 0.05}
                    inView
                  >
                    PT Inovasi Kolektif Digital
                  </BlurFade>
                </div>
                <div>
                  <BlurFade
                    key={"footer-text-3"}
                    delay={0.25 + 3 * 0.05}
                    inView
                  >
                    Menara Suara Merdeka
                  </BlurFade>
                </div>
                <div>
                  <BlurFade
                    key={"footer-text-4"}
                    delay={0.25 + 4 * 0.05}
                    inView
                  >
                    Jl. Pandanaran No. 30, Semarang
                  </BlurFade>
                </div>
                <div>
                  <BlurFade
                    key={"footer-text-5"}
                    delay={0.25 + 5 * 0.05}
                    inView
                  >
                    Indonesia 50134
                  </BlurFade>
                </div>
                <div className="mt-14">
                  <BlurFade
                    key={"footer-text-6"}
                    delay={0.25 + 6 * 0.05}
                    inView
                  >
                    © Lazuardy 2024. All rights reserved.
                  </BlurFade>
                </div>
              </div>
              <div className="flex flex-col text-sm max-w-lg text-background/75 text-left">
                <Link
                  href="/terms"
                  className="transition-colors duration-500 font-light text-gray-200 text-sm hover:text-white mb-2"
                >
                  <BlurFade
                    key={"footer-link-1"}
                    delay={0.25 + 2 * 0.05}
                    inView
                  >
                    Terms of Service
                  </BlurFade>
                </Link>
                <Link
                  href="/privacy"
                  className="transition-colors duration-500 font-light text-gray-200 text-sm hover:text-white mb-2"
                >
                  <BlurFade
                    key={"footer-link-2"}
                    delay={0.25 + 3 * 0.05}
                    inView
                  >
                    Privacy Policy
                  </BlurFade>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  <BlurFade
                    key={"footer-link-" + item.title}
                    delay={0.25 + 0 * 0.05}
                    inView
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                      </Link>
                    ) : (
                      <div className="text-lg">{item.title}</div>
                    )}
                  </BlurFade>
                  {item.items &&
                    item.items.map((subItem, index) => (
                      <BlurFade
                        key={"footer-link-" + index + subItem.href}
                        delay={0.25 + (index + 1) * 0.05}
                        inView
                      >
                        <Link
                          key={index}
                          href={subItem.href}
                          target={subItem.target ?? ""}
                          className="flex justify-between items-center"
                        >
                          <span className="transition-colors duration-500 font-light text-gray-400 text-sm hover:text-white">
                            {subItem.title}
                          </span>
                        </Link>
                      </BlurFade>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
