import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Plus_Jakarta_Sans from "@/lib/fonts/plus-jakarta-sans";
import SmoothScrolling from "@/components/smooth-scrolling";
import dynamic from "next/dynamic";
import "./globals.css";

export const metadata = {
  title: "Lazuardy",
  description: "We help businesses grow bigger through technology.",
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
      </body>
    </html>
  );
}
