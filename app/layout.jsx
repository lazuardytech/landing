// import SmoothScrolling from "@/components/smooth-scrolling";
import Plus_Jakarta_Sans from "@/lib/fonts/plus-jakarta-sans";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  title: "Lazuardy",
  description: "We help businesses grow bigger through technology.",
  generator: "Next.js",
  applicationName: "Lazuardy",
  referrer: "origin-when-cross-origin",
  creator: "Lazuardy",
  publisher: "Lazuardy",
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
  authors: [{ name: "Lazuardy", url: process.env.NEXT_PUBLIC_APP_URL }],
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
      <body className={`${Plus_Jakarta_Sans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* <SmoothScrolling>{children}</SmoothScrolling> */}
        </ThemeProvider>
        <Toaster position="bottom-left" />
        <Crisp />
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  );
}
