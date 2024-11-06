import Link from "next/link";
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
        },
        {
          title: "LinkedIn",
          href: "https://linkedin.com/company/lazuardy/?viewAsMember=true",
        },
        {
          title: "Medium",
          href: "https://blog.lazuardy.tech",
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
          title: "solutions",
          href: "/solutions",
        },
        {
          title: "work",
          href: "/work",
        },
        {
          title: "contact",
          href: "/contact",
        },
        {
          title: "articles",
          href: "https://blog.lazuardy.tech",
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
    <div className="mx-auto w-full bg-foreground text-background border-t border-zinc-800 bg-black">
      <div className="container py-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <Logo className="w-full text-start text-2xl" withTM="true" />
              <div className="flex text-lg font-light max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <span className="pt-2">Helping your businesses </span>
                <WordRotate
                  className="ms-1 text-black dark:text-white"
                  words={phrases}
                />
              </div>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg text-background/75 text-left font-light text-gray-400">
                <p className="text-white mb-2">PT Inovasi Kolektif Digital</p>
                <p>Menara Suara Merdeka</p>
                <p>Jl. Pandanaran No. 30, Semarang</p>
                <p>Indonesia 50134</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg text-background/75 text-left">
                <Link
                  href="/terms"
                  className="transition-colors duration-500 font-light text-gray-200 text-sm hover:text-white mb-2"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="transition-colors duration-500 font-light text-gray-200 text-sm hover:text-white"
                >
                  Privacy Policy
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
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-lg">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-lg">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem, index) => (
                      <Link
                        key={index}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="transition-colors duration-500 font-light text-gray-400 text-sm hover:text-white">
                          {subItem.title}
                        </span>
                      </Link>
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
