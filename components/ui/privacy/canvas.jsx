import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { ArrowRight } from "lucide-react";

export default function Canvas() {
  return (
    <div className="container px-16 mt-36 mb-40">
      <div className="text-white font-bold text-2xl lg:text-7xl max-w-3xl mx-auto text-justify">
        <BlurFade key={"canvas-title"} delay={0.25 + 0 * 0.05} inView>
          Privacy Policy.
        </BlurFade>
      </div>
      <div className="text-white font-light text-md lg:text-lg max-w-3xl mx-auto text-justify">
        <div className="mt-16">
          At Lazuardy, we value your privacy and are committed to protecting the
          personal information you share with us. This Privacy Policy explains
          how we collect, use, and protect your data when you visit our website
          and use our services. By accessing our website, you agree to the terms
          outlined in this policy.
        </div>
        <div className="font-semibold text-xl mt-12">
          Information We Collect
        </div>
        <div className="mt-4">
          We may collect personal information in various ways, including but not
          limited to:
          <ul className="list-disc ml-8">
            <li className="mt-4">
              <span className="font-bold">
                Personal Identification Information:
              </span>{" "}
              Name, email address, phone number, business name, and other
              contact details when you fill out forms or communicate with us.
            </li>
            <li className="mt-4">
              <span className="font-bold">
                Non-personal Identification Information:
              </span>{" "}
              Browser type, operating system, device information, IP address,
              and usage data collected automatically when you visit our website.
            </li>
          </ul>
        </div>
        <div className="font-semibold text-xl mt-12">
          How We Use Your Information
        </div>
        <div className="mt-4">
          The information we collect is used for the following purposes:
          <ul className="list-disc ml-8">
            <li className="mt-4">
              To provide and improve our services and website functionality.
            </li>
            <li className="mt-4">
              To respond to inquiries, feedback, or support requests.
            </li>
            <li className="mt-4">
              To send promotional emails, newsletters, or important updates
              related to our services.
            </li>
            <li className="mt-4">To process payments, if applicable.</li>
            <li className="mt-4">
              To track website usage and enhance user experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
