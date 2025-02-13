import CTA from "@/components/block/ai/cta";
import Hero from "@/components/block/ai/hero";
import Hook from "@/components/block/ai/hook";
import LEXA from "@/components/block/ai/lexa";
import Product from "@/components/block/ai/product";
import Keypoint from "@/components/block/home/keypoint";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <Header />
      <Hero />
      <Hook />
      <LEXA />
      <Product />
      <CTA />
      <Keypoint titleCenter />
      <Footer />
    </div>
  );
}
