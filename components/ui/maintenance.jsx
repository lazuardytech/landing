import Roboto_Mono from "@/lib/fonts/roboto-mono";
import Link from "next/link";
import { forwardRef } from "react";

export default forwardRef(function Maintenance(props, ref) {
  const { className } = props;
  return (
    <div
      ref={ref}
      className={`${className} maintenance flex justify-center items-center w-screen h-screen bg-red transition-opacity duration-500 top-0 left-0 absolute ease-in-out mx-auto`}
    >
      <div className="pb-2">
        <div
          className={`text-center lowercase text-white text-xl font-regular ${className} flex gap-2`}
        >
          <div>Sorry, we are still under maintenance</div>
          <div>🚧</div>
        </div>
        <div className="mt-8 font-light text-gray-300 text-md text-center">
          <div>Have something urgent?</div>
          <div className="mt-2">
            Please email us at{" "}
            <Link
              href="mailto:contact@lazuardy.tech"
              target="_blank"
              className="font-bold hover:underline"
            >
              contact@lazuardy.tech
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});
