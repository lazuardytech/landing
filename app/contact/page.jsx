import Maintenance from "@/components/ui/maintenance";
import Header from "@/components/ui/contact/header";
import Footer from "@/components/ui/contact/footer";
import { isMaintenanceMode } from "@/lib/config";

export default function Page() {
  if (isMaintenanceMode()) {
    return (
      <>
        <Maintenance />
      </>
    );
  }

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
