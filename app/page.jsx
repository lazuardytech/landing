import Maintenance from "@/components/ui/maintenance";
import Cases from "@/components/ui/landing/cases";
import FAQ from "@/components/ui/landing/faq";
import Footer from "@/components/ui/landing/footer";
import Header from "@/components/ui/landing/header";
import Hero from "@/components/ui/landing/hero";
import { isMaintenanceMode } from "@/lib/config";

export default function Page() {
  if (isMaintenanceMode()) {
    return (
      <>
        <Maintenance ref={maintenance} />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="w-full mx-auto">
        <Hero />
        <Cases />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
