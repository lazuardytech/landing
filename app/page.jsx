import Maintenance from "@/components/ui/maintenance";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/landing/hero";
import Cases from "@/components/ui/landing/cases";
import Description from "@/components/ui/landing/description";
import Problem from "@/components/ui/landing/problem";
import Benefit from "@/components/ui/landing/benefit";
import Division from "@/components/ui/landing/division";
import Timeline from "@/components/ui/landing/timeline";
import Solution from "@/components/ui/landing/solution";
import FAQ from "@/components/ui/landing/faq";
import Article from "@/components/ui/landing/article";
import { isMaintenanceMode } from "@/lib/config";

export default function Page() {
  if (isMaintenanceMode()) return <Maintenance />;

  return (
    <>
      <Header />
      <div className="w-full">
        <Hero />
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
