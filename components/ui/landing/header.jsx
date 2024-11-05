"use client";

import Link from "next/link";
import Logo from "@/components/ui/logo";
import { ExternalLink } from "lucide-react";
import { forwardRef } from "react";
import { useRouter } from "next/navigation";
import { performScrollToTop, performRedirectContact } from "@/lib/utils";

export default forwardRef(function Header(props, ref) {
  const { className } = props;
  const router = useRouter();

  return (
    <div
      ref={ref}
      className={`${className} mx-auto sticky top-0 right-0 z-50 w-full bg-black/40 backdrop-filter backdrop-blur bg-opacity-30 text-white border-b border-zinc-800`}
    >
      <div className="container py-4 grid grid-cols-2 gap-4">
        <Logo className="w-full text-start text-xl" />
        <div className="w-full text-end justify-end text-md flex">
          <span
            className="text-end transition-colors text-white font-medium hover:text-white hover:cursor-pointer"
            onClick={() => performScrollToTop(scroll)}
          >
            home
          </span>
          <span
            className="text-end transition-colors text-gray-400 font-medium hover:text-white hover:cursor-pointer ms-6"
            onClick={() => performRedirectContact(router)}
          >
            contact
          </span>
          <span className="text-end transition-colors text-gray-400 font-medium hover:text-white hover:cursor-pointer ms-6">
            <Link href="https://blog.lazuardy.tech" target="_blank">
              articles
              <ExternalLink className="ms-2 mb-1 w-4 h-4 inline-block" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
});
