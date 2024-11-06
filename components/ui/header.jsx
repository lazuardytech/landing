"use client";

import Link from "next/link";
import Logo from "@/components/ui/logo";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export default function Header(props) {
  const { className } = props;
  const router = useRouter();

  return (
    <div
      className={`${className} mx-auto sticky top-0 right-0 z-50 w-full bg-black/30 backdrop-filter backdrop-blur bg-opacity-30 text-white border-b border-zinc-800`}
    >
      <div className="container py-4 grid grid-cols-4">
        <div className="col-span-1 flex justify-start">
          <Logo className="text-xl" />
        </div>
        <div className="col-span-2 flex justify-center text-center text-md">
          <Link
            href="/"
            className="text-end transition-colors text-white font-medium hover:text-white hover:cursor-pointer"
          >
            home
          </Link>
          <HeaderNavigationDivider />
          <Link
            href="/solutions"
            className="text-end transition-colors text-gray-400 font-medium hover:text-white hover:cursor-pointer ms-6"
          >
            solutions
          </Link>
          <HeaderNavigationDivider />
          <Link
            href="/work"
            className="text-end transition-colors text-gray-400 font-medium hover:text-white hover:cursor-pointer ms-6"
          >
            work
          </Link>
          <HeaderNavigationDivider />
          <Link
            href="/contact"
            className="text-end transition-colors text-gray-400 font-medium hover:text-white hover:cursor-pointer ms-6"
          >
            contact
          </Link>
          <HeaderNavigationDivider />
          <span className="text-end transition-colors text-gray-400 font-medium hover:text-white hover:cursor-pointer ms-6">
            <Link href="https://blog.lazuardy.tech" target="_blank">
              articles
            </Link>
          </span>
        </div>
        <div className="col-span-1 flex justify-end">
          <Link href="/urgent">
            <Badge
              className="text-xs font-medium px-4 py-1 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:border-zinc-400 transition-colors duration-500"
              variant="outline"
            >
              Feeling Urgent?
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function HeaderNavigationDivider() {
  return <span className="ms-6 text-end text-zinc-600 font-2xl">/</span>;
}
