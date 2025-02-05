import { Button } from "@/components/ui/button";
import Whatsapp from "@/components/ui/icon/whatsapp";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import { CompanyData } from "@/lib/config";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <LayoutLine className="pt-[14vh] md:pt-[22vh] px-8 relative">
      <Title className="text-md md:text-lg text-center uppercase">
        Contact
      </Title>
      <div className="flex flex-col justify-center items-center gap-4 w-full mt-6 relative">
        <div className="flex flex-col w-full justify-center items-center">
          <Title className="text-3xl md:text-5xl text-center">
            "A closed mouth doesn’t get fed"
          </Title>
          <p className="w-full md:max-w-md font-light text-neutral-600 text-center text-sm leading-snug mt-8">
            Don't be shy, ask us anything. We are here to help you.
            <br />
            If only you don't feel like to type, let's book a call.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <Button size="lg" variant="link" className="px-0" asChild>
              <Link href={CompanyData.email.link}>
                <Mail />
                <span className="ml-0.5">Email</span>
              </Link>
            </Button>
            <Button size="lg" variant="default">
              Talk to us
            </Button>
            <Button size="lg" variant="link" className="px-0" asChild>
              <Link
                href={CompanyData.phone.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Whatsapp />
                <span className="ml-0">WhatsApp</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </LayoutLine>
  );
}
