import Globe from "@/components/ui/globe";

export default function Test() {
  return (
    <div className="relative h-screen max-w-screen overflow-hidden">
      <Globe className="mx-auto max-w-2xl pointer-events-none" />
      <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
