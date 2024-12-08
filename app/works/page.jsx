import Link from "next/link";
import Maintenance from "@/components/ui/maintenance";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { PencilLine } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { isMaintenanceMode } from "@/lib/config";

export default function Page() {
  if (isMaintenanceMode()) return <Maintenance />;

  return (
    <>
      <Header />
      <div className="container px-10 lg:px-16 mb-16 mt-16 lg:mt-40">
        <Title className="mt-0" />
        <WIP className="mt-12" />
        {/* <Works className="mt-12" /> */}
      </div>
      <Footer />
    </>
  );
}

function Title({ className }) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="w-full max-w-xl lg:max-w-4xl text-3xl lg:text-7xl font-bold">
        <h1 className="leading-none">We made good sh*ts.</h1>
      </div>
      <div className="w-full flex gap-6 lg:justify-start items-start text-xl font-regular text-neutral-400 mt-8">
        <Link href="/works">
          <span className="transition-colors duration-300 hover:text-white text-white">
            Featured
          </span>
        </Link>
        <span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="transition-colors duration-300 hover:cursor-not-allowed">
                  Web
                </span>
              </TooltipTrigger>
              <TooltipContent className="border-none">
                <p>work in progress...</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
        <span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="transition-colors duration-300 hover:cursor-not-allowed">
                  Device
                </span>
              </TooltipTrigger>
              <TooltipContent className="border-none">
                <p>work in progress...</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
        <span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="transition-colors duration-300 hover:cursor-not-allowed">
                  AI
                </span>
              </TooltipTrigger>
              <TooltipContent className="border-none">
                <p>work in progress...</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
        <span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="transition-colors duration-300 hover:cursor-not-allowed">
                  Brand
                </span>
              </TooltipTrigger>
              <TooltipContent className="border-none">
                <p>work in progress...</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
      </div>
    </div>
  );
}

function Works({ className }) {
  return (
    <div className={`w-full grid lg:grid-cols-5 ${className}`}>
      <div className="w-full flex flex-col">
        <div className="sticky top-28 flex min-h-screen">
          <h2 className="text-xl font-regular bg-black">2024</h2>
        </div>
        <div className="sticky top-28 flex min-h-screen">
          <h2 className="text-xl font-regular bg-black">2023</h2>
        </div>
        <div className="sticky top-28 flex min-h-screen">
          <h2 className="text-xl font-regular bg-black">2022</h2>
        </div>
      </div>
      <div className="w-full flex flex-col col-span-4">
        <div className="w-full h-10 border border-white"></div>
      </div>
    </div>
  );
}

function WIP({ className }) {
  return (
    <div
      className={`w-full flex justify-center items-center gap-2 lg:gap-4 py-20 px-10 hover:cursor-not-allowed ${className}`}
    >
      <h2 className="text-sm lg:text-2xl text-regular text-neutral-400 leading-snug">
        ✏️
      </h2>
      <h2 className="text-sm lg:text-lg text-light text-neutral-300 leading-snug">
        documentation is still under progress...
      </h2>
    </div>
  );
}
