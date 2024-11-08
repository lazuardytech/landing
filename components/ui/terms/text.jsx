import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

export default function Text() {
  return (
    <div className="container px-16 my-32">
      <div className="text-white font-bold text-2xl lg:text-6xl max-w-2xl mx-auto text-justify">
        <BlurFade key="terms-title" delay={0.25 + 0 * 0.05} inView>
          Terms of Service.
        </BlurFade>
      </div>
      <div className="text-white font-light text-md lg:text-md max-w-2xl mx-auto text-justify">
        <BlurFade key="terms-text-1" delay={0.25 + 1 * 0.05} inView>
          <div className="mt-16">
            Welcome to Lazuardy! By accessing or using our website and services,
            you agree to be bound by these Terms of Service. Please read these
            terms carefully, as they outline your rights, responsibilities, and
            the conditions under which you may use our services. If you do not
            agree with any part of these terms, you may not access or use our
            services.
          </div>
        </BlurFade>
        <BlurFade key="terms-text-2" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-12">Acceptance of Terms</div>
          <div className="mt-4">
            By accessing our website or using our services, you acknowledge that
            you have read, understood, and agree to these Terms of Service and
            our Privacy Policy. We reserve the right to modify these terms at
            any time, and any changes will be effective immediately upon
            posting.
          </div>
        </BlurFade>
        <BlurFade key="terms-text-3" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-12">Use of Our Services</div>
          <div className="mt-4">
            You agree to use our website and services only for lawful purposes
            and in compliance with all applicable laws and regulations. You must
            not:
            <ul className="list-disc ml-8">
              <li className="mt-4">
                Interfere with or disrupt our website or servers.
              </li>
              <li className="mt-4">
                Attempt to gain unauthorized access to our systems or services.
              </li>
              <li className="mt-4">
                Use our services for any fraudulent, abusive, or illegal
                activities.
              </li>
            </ul>
          </div>
        </BlurFade>
        <BlurFade key="terms-text-4" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-12">User Accounts</div>
          <div className="mt-4">
            To access certain features of our services, you may be required to
            create an account. You agree to provide accurate, complete
            information and to update it as needed. You are responsible for
            maintaining the confidentiality of your account credentials and for
            any activities conducted under your account. Notify us immediately
            of any unauthorized use of your account.
          </div>
        </BlurFade>
        <BlurFade key="terms-text-5" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-12">
            Intellectual Property Rights
          </div>
          <div className="mt-4">
            All content, logos, trademarks, and other intellectual property
            displayed on our website are owned by Lazuardy or our licensors. You
            may not copy, distribute, modify, or create derivative works from
            our content without our express permission. Unauthorized use of our
            intellectual property is strictly prohibited
          </div>
        </BlurFade>
        <BlurFade key="terms-text-6" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-12">
            Payments and Billing
          </div>
          <div className="mt-4">
            If you purchase services from us, you agree to provide valid payment
            information and authorize us to charge for the services. All fees
            are due as stated on the website or as agreed upon with Lazuardy. We
            reserve the right to modify fees or billing terms at any time.
          </div>
        </BlurFade>
        <BlurFade key="terms-text-7" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-12">
            Termination of Service
          </div>
          <div className="mt-4">
            We reserve the right to suspend or terminate your access to our
            services if we believe you have violated these Terms of Service or
            engaged in any unlawful activities. You may also terminate your
            account at any time. Upon termination, all rights granted to you
            under these terms will cease immediately.
          </div>
        </BlurFade>
        <BlurFade key="terms-text-8" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-12">
            Limitation of Liability
          </div>
          <div className="mt-4">
            To the fullest extent permitted by law, Lazuardy shall not be liable
            for any direct, indirect, incidental, consequential, or punitive
            damages arising out of your use or inability to use our services. We
            provide our services “as is” and “as available,” without any
            warranties, express or implied.
          </div>
        </BlurFade>
        <BlurFade key="terms-text-9" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-12">Indemnification</div>
          <div className="mt-4">
            You agree to indemnify and hold harmless Lazuardy, its affiliates,
            and employees from any claims, liabilities, damages, or expenses
            (including legal fees) arising from your use of our services or
            violation of these Terms of Service.
          </div>
        </BlurFade>
        <BlurFade key="terms-text-10" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-12">Third-party Links</div>
          <div className="mt-4">
            Our website may contain links to third-party websites. These links
            are provided for your convenience, but we do not endorse or control
            the content of these websites. You access third-party sites at your
            own risk and should review their terms and privacy policies.
          </div>
        </BlurFade>
        <BlurFade key="terms-text-11" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-12">Governing Law</div>
          <div className="mt-4">
            These Terms of Service are governed by the laws of the Republic of
            Indonesia, without regard to its conflict of law provisions. Any
            disputes arising from these terms shall be resolved exclusively in
            the courts of the Republic of Indonesia.
          </div>
        </BlurFade>
        <BlurFade key="terms-text-12" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-12">
            Changes to These Terms
          </div>
          <div className="mt-4">
            We may update these Terms of Service at any time. Any changes will
            be posted on this page with the updated date. By continuing to use
            our website and services after changes are made, you agree to the
            revised terms.
          </div>
        </BlurFade>
        <BlurFade key="terms-text-13" delay={0.25 + 1 * 0.05} inView>
          <div className="font-semibold text-xl mt-12">Contact Us</div>
          <div className="mt-4">
            If you have any questions or concerns regarding these Terms of
            Service, please contact us at:
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
                className="hover:underline"
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
                className="hover:underline"
              >
                +62 8777 7437 000
              </Link>
            </div>
          </div>
        </BlurFade>
        <BlurFade key="terms-text-14" delay={0.25 + 1 * 0.05} inView>
          <div className="mt-16">
            By accessing or using our services, you acknowledge and agree to
            these Terms of Service.
            <div className="mt-4">
              <span className="font-mono">
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
