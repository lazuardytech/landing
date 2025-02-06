import ComponentProvider from "@/components/provider/component-provider";
import GoogleProvider from "@/components/provider/google-provider";
import VercelProvider from "@/components/provider/vercel-provider";
import { CompanyData } from "@/lib/config";
import Poppins from "@/lib/fonts/poppins";
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
			<body className={`bg-main ${Poppins.className}`}>
				{children}
				<ComponentProvider />
				<CrispProvider />
				<VercelProvider />
			</body>
			<GoogleProvider />
		</html>
	);
}
