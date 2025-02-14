import HorizontalBorder from "@/components/ui/horizontal-border";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";

const products = [
  {
    title: "Customer Service",
  },
  {
    title: "Recommendation System",
  },
  {
    title: "Fraud Detection",
  },
  {
    title: "Voice Recognition",
  },
  {
    title: "Image Recognition",
  },
  {
    title: "Content Generation",
  },
  {
    title: "Predictive Analytics",
  },
  {
    title: "Content Generation",
  },
  {
    title: "Virtual Assistant",
  },
  {
    title: "Sentiment Analysis",
  },
  {
    title: "Inventory Management",
  },
  {
    title: "Code Generator",
  },
  {
    title: "Medical Diagnosis",
  },
  {
    title: "Autonomous IoT",
  },
  {
    title: "Video Analytics",
  },
  {
    title: "Resume Screening",
  },
  {
    title: "Speech-to-Text",
  },
  {
    title: "Smart Home System",
  },
  {
    title: "Market Targeting",
  },
  {
    title: "And Many More!",
  },
];

export default function Product() {
  return (
    <div className="flex flex-col w-full relative">
      <LayoutLine>
        <div className="w-full flex flex-col justify-center items-center mt-16 pb-8 px-8">
          <Title className="text-2xl md:text-4xl text-center w-full md:max-w-3xl">
            What AI can do for your Business?
          </Title>
          <div className="flex flex-col w-full mt-6 justify-center items-center">
            <div className="w-full max-w-xl flex justify-center">
              <p className="w-full font-light text-neutral-600 text-center leading-snug text-sm">
                Wonder why most of apps has &quot;AI-Powered&quot; tagline?
                Because AI can do anything, literally. Here are some of the most
                common applications of AI in business.
              </p>
            </div>
          </div>
        </div>
      </LayoutLine>
      <HorizontalBorder />
      <LayoutLine>
        <div className="grid grid-cols-2 md:grid-cols-5 w-full">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`flex flex-col relative w-full p-8 md:p-6 md:pr-8 border-b border-neutral-400 border-opacity-90 ${(index + 1) % 2 === 1 || index === 0 ? "border-r" : ""} ${index <= 3 ? "border-b" : ""} ${(index + 1) % 5 === 0 ? "" : "md:border-r"} ${index + 1 > products.length - 5 ? "md:border-b-0" : ""} ${index <= 4 || index === products.length - 1 ? "" : "hidden md:flex"} ${(index + 1) % 5 === 0 ? "md:border-r-0" : ""}`}
            >
              <Title className="text-lg">{product.title}</Title>
            </div>
          ))}
        </div>
      </LayoutLine>
      <HorizontalBorder />
    </div>
  );
}
