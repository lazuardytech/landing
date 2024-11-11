import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

export default function Text() {
  return (
    <div className="container px-10 lg:px-16 mt-16 mb-16 lg:mt-32 lg:mb-32">
      <div className="text-4xl md:text-5xl text-white font-bold max-w-2xl mx-auto text-justify">
        <BlurFade key="privacy-title" delay={0.25 + 0 * 0.05} inView>
          Privacy Policy.
        </BlurFade>
      </div>
      <div className="text-white font-light text-md lg:text-md max-w-2xl mx-auto text-justify">
        <BlurFade key="privacy-text-1" delay={0.25 + 1 * 0.05} inView>
          <div className="mt-8 lg:mt-16">
            At Lazuardy, we value your privacy and are committed to protecting
            the personal information you share with us. This Privacy Policy
            explains how we collect, use, and protect your data when you visit
            our website and use our services. By accessing our website, you
            agree to the terms outlined in this policy.
          </div>
        </BlurFade>
        <BlurFade key="privacy-text-2" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-6 lg:mt-12">
            Information We Collect
          </div>
          <div className="mt-4">
            We may collect personal information in various ways, including but
            not limited to:
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
                and usage data collected automatically when you visit our
                website.
              </li>
            </ul>
          </div>
        </BlurFade>
        <BlurFade key="privacy-text-3" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-6 lg:mt-12">
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
        </BlurFade>
        <BlurFade key="privacy-text-4" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-6 lg:mt-12">
            How We Protect Your Information
          </div>
          <div className="mt-4">
            We implement a variety of security measures to protect your personal
            information, including encryption, firewalls, and secure access
            controls. However, please note that no method of data transmission
            or storage is 100% secure, and we cannot guarantee complete
            security.
          </div>
        </BlurFade>
        <BlurFade key="privacy-text-5" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-6 lg:mt-12">
            Sharing Your Information
          </div>
          <div className="mt-4">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties unless one of the following applies:
            <ul className="list-disc ml-8">
              <li className="mt-4">
                <span className="font-bold">Service Providers:</span> We may
                share your information with trusted third-party service
                providers who assist us in operating our business and providing
                services to you, such as payment processors or marketing
                partners. These providers are required to maintain the
                confidentiality of your information.
              </li>
              <li className="mt-4">
                <span className="font-bold">Legal Requirements:</span> We may
                disclose your information if required by law, regulation, legal
                process, or government request.
              </li>
            </ul>
          </div>
        </BlurFade>
        <BlurFade key="privacy-text-6" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-6 lg:mt-12">
            Cookies and Tracking Technologies
          </div>
          <div className="mt-4">
            Our website may use cookies and other tracking technologies to
            enhance your user experience, analyze trends, and gather demographic
            information. You can adjust your browser settings to refuse cookies,
            though doing so may affect the functionality of some parts of our
            website.
          </div>
        </BlurFade>
        <BlurFade key="privacy-text-7" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-6 lg:mt-12">
            Your Data Rights
          </div>
          <div className="mt-4">
            You have the right to:
            <ul className="list-disc ml-8 mb-8">
              <li className="mt-4">
                <span className="font-bold">Access:</span> Request a copy of the
                personal information we hold about you.
              </li>
              <li className="mt-4">
                <span className="font-bold">Rectification:</span> Request
                correction of any inaccurate or incomplete information.
              </li>
              <li className="mt-4">
                <span className="font-bold">Deletion:</span> Request the
                deletion of your personal information, subject to legal
                obligations.
              </li>
              <li className="mt-4">
                <span className="font-bold">Opt-out:</span> You can opt out of
                marketing communications by clicking the unsubscribe link in any
                email or by contacting us directly.
              </li>
            </ul>
            To exercise your rights or for any concerns about your data, please
            contact us at{" "}
            <Link
              href="mailto:contact@lazuardy.tech"
              target="_blank"
              className="hover:underline font-mono"
            >
              contact@lazuardy.tech
            </Link>
            .
          </div>
        </BlurFade>
        <BlurFade key="privacy-text-8" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-6 lg:mt-12">
            Third-party Links
          </div>
          <div className="mt-4">
            Our website may contain links to third-party websites. These
            websites have their own privacy policies, and we are not responsible
            for their content or practices. We encourage you to review their
            privacy policies before sharing any personal information.
          </div>
        </BlurFade>
        <BlurFade key="privacy-text-9" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-6 lg:mt-12">
            Children&apos;s Privacy
          </div>
          <div className="mt-4">
            Our website and services are not intended for children under the age
            of 13, and we do not knowingly collect personal information from
            minors. If we become aware that we have collected personal
            information from a child under 13, we will take steps to delete that
            information immediately.
          </div>
        </BlurFade>
        <BlurFade key="privacy-text-10" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-6 lg:mt-12">
            Changes to This Privacy Policy
          </div>
          <div className="mt-4">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with the updated date. We encourage you
            to review this policy periodically to stay informed about how we are
            protecting your information.
          </div>
        </BlurFade>
        <BlurFade key="privacy-text-11" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-6 lg:mt-12">Contact Us</div>
          <div className="mt-4">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
            <div className="mt-8">
              <span className="font-semibold">Company Legal Name</span>
            </div>
            <div className="mt-2">PT Inovasi Kolektif Digital</div>
            <div className="mt-4">
              <span className="font-semibold">Company Trade Name</span>
            </div>
            <div className="mt-2">Lazuardy</div>
            <div className="mt-4">
              <span className="font-semibold">Company Address</span>
            </div>
            <div className="mt-2">
              Menara Suara Merdeka, Jl. Pandanaran No. 30, Semarang, Indonesia
              50134
            </div>
            <div className="mt-4">
              <span className="font-semibold">Company Email</span>
            </div>
            <div className="mt-2">
              <Link
                href="mailto:contact@lazuardy.tech"
                target="_blank"
                className="hover:underline font-mono"
              >
                contact@lazuardy.tech
              </Link>
            </div>
            <div className="mt-4">
              <span className="font-semibold">Company Phone</span>
            </div>
            <div className="mt-2">
              <Link
                href="https://wa.me/%2B6287777437000"
                target="_blank"
                className="hover:underline font-mono"
              >
                +62 8777 7437 000
              </Link>
            </div>
          </div>
        </BlurFade>
        <BlurFade key="privacy-text-12" delay={0.25 + 1 * 0.05} inView>
          <div className="mt-8 lg:mt-16">
            By using our website and services, you agree to the terms of this
            Privacy Policy.
            <div className="mt-4">
              <span className="font-bold">
                Effective Date: 01 November 2024
              </span>
              .
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
