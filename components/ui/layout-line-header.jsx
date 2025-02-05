import HorizontalBorder from "@/components/ui/horizontal-border";
import Title from "@/components/ui/title";

export default function LayoutLineHeader({ title, className, sticky = true }) {
  sticky = typeof sticky === "string" ? sticky === "true" : sticky;
  return (
    <div
      className={`layout-line-header flex flex-col w-full items-center justify-center z-30 ${sticky ? "md:sticky md:top-8" : ""}`}
    >
      <div className="grid grid-cols-2 w-full pt-16 md:pt-20 pb-4 md:max-w-screen-lg border border-t-0 border-b-0 border-neutral-400 border-opacity-90 select-none backdrop-filter backdrop-blur-lg bg-neutral-200/40">
        <div className="flex w-full col-span-2 px-8">
          <Title className={`text-2xl md:text-5xl ${className}`}>{title}</Title>
        </div>
      </div>
      <HorizontalBorder className="flex w-full z-50" />
    </div>
  );
}
