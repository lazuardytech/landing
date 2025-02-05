import Keypoint from "@/components/block/home/keypoint";
import Disclaimer from "@/components/block/technology/disclaimer";
import Hero from "@/components/block/technology/hero";
import Rnd from "@/components/block/technology/rnd";
import Tech from "@/components/block/technology/tech";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import LayoutLine from "@/components/ui/layout-line";

export default function Technology() {
  return (
    <div className="relative w-full h-full">
      <Header />
      <Hero />
      <Rnd />
      <Tech />
      <Disclaimer />
      <Keypoint titleCenter={true} />
      <Footer />
    </div>
  );
}
