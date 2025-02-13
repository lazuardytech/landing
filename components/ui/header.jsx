"use client";

import { Button } from "@/components/ui/button";
import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Logo from "@/components/ui/logo";
import Doto from "@/lib/fonts/doto";
import { navigations } from "@/lib/state";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const mobileMenuPanel = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <div id="header" className="fixed top-0 left-0 z-50 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <LayoutLine className="px-8 md:pt-6" />
          <HorizontalBorder />
          <div className="grid grid-cols-2 w-full md:max-w-screen-lg select-none backdrop-filter backdrop-blur-lg bg-neutral-200/40 text-black border border-t-0 border-b-0 border-neutral-400 border-opacity-90">
            <div className="flex w-full">
              <Link
                href="/"
                className="flex w-auto justify-center items-center px-8 border-r border-neutral-400 border-opacity-90 bg-[#171717]"
              >
                <Logo className="font-medium text-sm md:text-md text-white" />
              </Link>
            </div>
            <div className="hidden md:flex w-full py-4 px-8 space-x-8 justify-end">
              {navigations.map((navigation, index) => (
                <Button
                  key={index}
                  size="default"
                  variant="link"
                  className={`px-0 font-black text-black text-sm lowercase ${Doto.className} ${pathname === navigation.link || (navigation.link === "/article" && pathname.startsWith("/article")) ? "underline" : ""}`}
                  asChild
                >
                  <Link
                    href={navigation.link}
                    target={navigation.target}
                    rel={navigation.rel}
                  >
                    {navigation.name}
                  </Link>
                </Button>
              ))}
            </div>
            <div className="flex md:hidden w-full py-3 md:py-4 px-8 space-x-8 justify-end">
              <Button
                size="default"
                variant="link"
                className={`text-lg font-black text-black px-0 lowercase ${Doto.className}`}
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
                {isMobileMenuOpen ? "Close" : "Menu"}
              </Button>
            </div>
          </div>
          <HorizontalBorder />
        </div>
      </div>
      {isMobileMenuOpen && (
        <MobileMenuPanel ref={mobileMenuPanel} pathname={pathname} />
      )}
    </>
  );
}

export const MobileMenuPanel = forwardRef(({ className, pathname }, ref) => (
  <div
    ref={ref}
    className={`fixed top-0 left-0 flex justify-center items-center z-40 w-full h-screen select-none backdrop-filter backdrop-blur-lg bg-neutral-200/40 ${className}`}
  >
    <div className="flex flex-col w-full space-y-8 justify-center items-center">
      <Button
        size="default"
        variant="link"
        className={`font-black text-black text-lg lowercase ${Doto.className} ${pathname === "/" && "underline"}`}
        asChild
      >
        <Link href="/">Home</Link>
      </Button>
      {navigations.map((navigation, index) => (
        <Button
          key={index}
          size="default"
          variant="link"
          className={`font-black text-black text-lg lowercase ${Doto.className} ${pathname === navigation.link || (navigation.link === "/article" && pathname.startsWith("/article")) ? "underline" : ""}`}
          asChild
        >
          <Link
            href={navigation.link}
            target={navigation.target}
            rel={navigation.rel}
          >
            {navigation.name}
          </Link>
        </Button>
      ))}
    </div>
  </div>
));
MobileMenuPanel.displayName = "MobileMenuPanel";
