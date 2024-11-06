import Maintenance from "@/components/ui/maintenance";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Cases from "@/components/ui/landing/cases";
import Description from "@/components/ui/landing/description";
import FAQ from "@/components/ui/landing/faq";
import Hero from "@/components/ui/landing/hero";
import Problem from "@/components/ui/landing/problem";
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
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
