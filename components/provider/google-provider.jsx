import { isProductionMode } from "@/lib/utils";
import { GoogleTagManager } from "@next/third-parties/google";

export default function GoogleProvider() {
  if (!isProductionMode() || !process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
    </>
  );
}
