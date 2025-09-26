"use client";

import Spinner from "@/components/ui/spinner";
import Script from "next/script";
import { useEffect, useRef } from "react";

export default function Beta() {
  const spinner = useRef(null);
  const iframe = useRef(null);

  useEffect(() => {
    const _spinner = spinner?.current;
    const _iframe = iframe?.current;
    let timer1, timer2;

    if (!_spinner || !_iframe) return;

    function handleIframeLoad() {
      timer1 = setTimeout(() => {
        _spinner.classList.add("opacity-0");
        _spinner.classList.remove("opacity-100");
        timer2 = setTimeout(() => {
          _spinner.classList.add("hidden");
        }, 500);
      }, 1000);
    }

    _iframe.addEventListener("load", handleIframeLoad);

    return () => {
      clearTimeout(timer1, timer2);
      _iframe.removeEventListener("load", handleIframeLoad);
    };
  }, []);

  return (
    <div className="relative h-full w-full min-h-screen overflow-hidden">
      <div
        ref={spinner}
        className="absolute inset-0 w-full h-full bg-white flex items-center justify-center z-20 transition-opacity duration-500 opacity-100"
      >
        <Spinner />
      </div>
      <iframe
        ref={iframe}
        data-tally-src="https://tally.so/r/3xKgAE"
        width="100%"
        height="100%"
        className={`border-0 m-0 w-full h-full bg-main min-h-screen`}
      />
      <div className="absolute right-0 md:right-2 bottom-0 w-full md:w-[30vw] lg:w-[20vw] h-[5vh] md:h-[40vh] bg-white overflow-hidden"></div>
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
    </div>
  );
}
