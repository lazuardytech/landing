import Plus_Jakarta_Sans from "@/lib/fonts/plus-jakarta-sans";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { CompanyData } from "@/lib/config";
import dynamic from "next/dynamic";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  title: CompanyData.tradeName,
  description: CompanyData.description,
  generator: "Next.js",
  applicationName: CompanyData.tradeName,
  referrer: "origin-when-cross-origin",
  creator: CompanyData.tradeName,
  publisher: CompanyData.tradeName,
  manifest: `${process.env.NEXT_PUBLIC_APP_URL}/manifest.json`,
  category:
    "technology, startup, business, agency, digital, collective, saas, software, hardware",
  keywords: [
    "lazuardy",
    "byte",
    "things",
    "studio",
    "ai",
    "software",
    "hardware",
    "artificial intelligence",
    "uiux",
    "ui/ux",
    "design",
    "user interface",
    "user experience",
    "saas",
  ],
  authors: [
    { name: CompanyData.tradeName, url: process.env.NEXT_PUBLIC_APP_URL },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: [{ color: "#000000" }],
};

const Crisp = dynamic(() => import("@/components/crisp"));

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
      <body className={`${Plus_Jakarta_Sans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster position="bottom-left" />
        <Analytics mode="production" />
        <SpeedInsights />
        <Crisp />
      </body>
    </html>
  );
}
