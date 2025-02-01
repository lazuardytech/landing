import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Article from "@/components/ui/home/article";
import Benefit from "@/components/ui/home/benefit";
import Cases from "@/components/ui/home/cases";
import Description from "@/components/ui/home/description";
import Division from "@/components/ui/home/division";
import FAQ from "@/components/ui/home/faq";
import Hero from "@/components/ui/home/hero";
import HeroGlobe from "@/components/ui/home/hero-globe";
import Problem from "@/components/ui/home/problem";
import Solution from "@/components/ui/home/solution";
import Timeline from "@/components/ui/home/timeline";
import Maintenance from "@/components/ui/maintenance";
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
    </>
  );
}
