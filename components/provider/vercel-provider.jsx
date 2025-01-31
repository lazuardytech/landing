import { isProductionMode } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function VercelProvider() {
  if (!isProductionMode()) {
    return null;
  }

  return (
    <>
      {/* Vercel Analytics */}
      <Analytics mode="production" />
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </>
  );
}
