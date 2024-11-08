"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { Cookie } from "lucide-react";
import { ZincBadge } from "@/components/ui/badge";
import Link from "next/link";

export default function CookieConfirmation() {
  useEffect(() => {
    if (localStorage.getItem("cookie-confirmation")) return;
    setTimeout(() => {
      toast.dismiss();
      toast.custom(
        (t) => (
          <div className="px-4 py-1 w-auto border border-zinc-800 bg-zinc-950 grid grid-cols-6 shadow-2xl">
            <div className="col-span-4">
              <div className="text-md font-base text-white mb-2 pt-3 flex">
                <Cookie className="w-4 h-4 mt-1 me-2" /> Cookie Usage
              </div>
              <div className="text-xs font-light text-gray-400">
                We use cookies to improve your experience on our site.
              </div>
            </div>
            <div className="col-span-2 grid grid-rows justify-end my-3 gap-3 pointer-events-auto">
              <button
                className="text-xs text-white font-regular py-1 px-2 bg-zinc-800 hover:bg-zinc-700 transition-colors duration-500 border border-zinc-600 text-center"
                onClick={() => {
                  toast.dismiss(t);
                  localStorage.getItem("cookie-confirmation");
                }}
              >
                Accept
              </button>
              <Link
                className="text-xs text-white font-regular py-1 px-2 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-500 border border-zinc-600 text-center"
                href="/policy"
              >
                Policy
              </Link>
            </div>
          </div>
        ),
        { duration: Infinity },
      );
    }, 2000);
  });
}
