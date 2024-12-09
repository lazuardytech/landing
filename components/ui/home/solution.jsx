import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Solution() {
  return (
    <div className="container pt-40 px-10 lg:px-16">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="grid grid-cols-2 gap-8 lg:pe-32 select-none pointer-events-none">
          <div className="row-span-1 aspect-square w-full h-full border border-zinc-800">
            <Image
              alt="solution-image-1"
              src="/images/landing/solution-1.webp"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="row-span-1 aspect-square w-full h-full border border-zinc-800">
            <Image
              alt="solution-image-2"
              src="/images/landing/solution-2.webp"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="row-span-1 aspect-square w-full h-full border border-zinc-800">
            <Image
              alt="solution-image-3"
              src="/images/landing/solution-3.webp"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="row-span-1 aspect-square w-full h-full border border-zinc-800">
            <Image
              alt="solution-image-4"
              src="/images/landing/solution-4.webp"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="text-3xl md:text-4xl lg:text-5xl text-center md:text-left lg:text-left font-regular mb-2">
              Do we got your interest?
            </div>
            <div className="text-center md:text-left lg:text-left text-md font-light text-gray-400 max-w-sm lg:max-w-lg mx-auto lg:mx-0">
              Read our Company Profile and Service Offering documents below to
              know more about us.
            </div>
            <div className="flex justify-center lg:justify-start gap-6 mt-6">
              <Link
                href={process.env.NEXT_PUBLIC_COMPANY_PROFILE_DOCUMENT_LINK}
                target="_blank"
              >
                <Button className="gap-2" variant="default" size="sm">
                  Company Profile <Download className="w-4 h-4" />
                </Button>
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_SERVICE_OFFERING_DOCUMENT_LINK}
                target="_blank"
              >
                <Button className="gap-2" variant="default" size="sm">
                  Service Offering <Download className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
