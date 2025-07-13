import ComponentProvider from "@/components/provider/component-provider";
import GoogleProvider from "@/components/provider/google-provider";
import VercelProvider from "@/components/provider/vercel-provider";
import Poppins from "@/lib/fonts/poppins";
import Script from "next/script";
import Image from "next/image";
import { CompanyData } from "@/lib/config";
import dynamic from "next/dynamic";
import "./globals.css";

const CrispProvider = dynamic(
	() => import("@/components/provider/crisp-provider"),
);

export const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
	title: CompanyData.tradeName,
	description: CompanyData.description,
	generator: "Next.js",
	applicationName: CompanyData.tradeName,
	referrer: "strict-origin-when-cross-origin",
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
	themeColor: [{ color: CompanyData.themeColor }],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<Script id="meta-pixel" strategy="afterInteractive">
					{`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '736566302266723');
            fbq('track', 'PageView');
          `}
				</Script>
			</head>
			<body
				className={`bg-main transition-colors duration-500 ${Poppins.className}`}
			>
				{children}
				<ComponentProvider />
				<CrispProvider />
				<VercelProvider />
				<noscript>
					<Image
						height="1"
						width="1"
						alt="Meta Pixel"
						style={{ display: "none" }}
						src="https://www.facebook.com/tr?id=736566302266723&ev=PageView&noscript=1"
					/>
				</noscript>
			</body>
			<GoogleProvider />
		</html>
	);
}
