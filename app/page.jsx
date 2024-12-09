import Maintenance from "@/components/ui/maintenance";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/home/hero";
import HeroGlobe from "@/components/ui/home/hero-globe";
import Cases from "@/components/ui/home/cases";
import Description from "@/components/ui/home/description";
import Problem from "@/components/ui/home/problem";
import Benefit from "@/components/ui/home/benefit";
import Division from "@/components/ui/home/division";
import Timeline from "@/components/ui/home/timeline";
import Solution from "@/components/ui/home/solution";
import FAQ from "@/components/ui/home/faq";
import Article from "@/components/ui/home/article";
import CookieConfirmation from "@/components/ui/cookie-confirmation";
import { isMaintenanceMode } from "@/lib/config";

export default function Page() {
  if (isMaintenanceMode()) return <Maintenance />;

  return (
    <>
      <Header />
      <div className="w-full">
        <div className="block lg:hidden">
          <Hero />
        </div>
        <div className="hidden lg:block">
          <HeroGlobe />
        </div>
        <Cases />
        <Description />
        <Problem />
        <Benefit />
        <Division />
        <Timeline />
        <Solution />
        <Article />
        <FAQ />
      </div>
      <Footer />
      <CookieConfirmation />
    </>
  );
}
