import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Description() {
  return (
    <div className="container px-16 pt-28">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg text-left font-regular mb-4">
              A Digital Collective.
            </h1>
            <p className="text-md font-light text-gray-400 max-w-md text-left">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 ps-10">
          <div className="bg-zinc-900 rounded-md aspect-square"></div>
          <div className="bg-zinc-900 rounded-md row-span-2"></div>
          <div className="bg-zinc-900 rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  );
}
