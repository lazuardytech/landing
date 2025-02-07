import Link from "next/link";

export const CLIENT_TYPES = [
	{ value: "individual", label: "Individual" },
	{ value: "small-business", label: "Small Business" },
	{ value: "agency", label: "Agency" },
	{ value: "enterprise", label: "Enterprise" },
	{ value: "organization", label: "Ogranization" },
	{ value: "institution", label: "Institution" },
	{ value: "government", label: "Government" },
	{ value: "other", label: "Other" },
];

export const PROJECT_CATEGORIES = [
	{ value: "software", label: "Software" },
	{ value: "hardware", label: "Hardware" },
	{ value: "design", label: "Design" },
	{ value: "artificial-intelligence", label: "Artificial Intelligence" },
	{ value: "cloud-devops", label: "Cloud / DevOps" },
	{ value: "branding", label: "Branding" },
	{ value: "security", label: "Security" },
	{ value: "research", label: "Research" },
	{ value: "web-3", label: "Web 3" },
];

export const PROJECT_PRICINGS = [
	{
		value: "rent",
		label: "Rent our Service",
		description:
			"Rent our service for a period of time, recurring monthly or yearly. Best fit for you that needs flexible payment plan.",
	},
	{
		value: "buy",
		label: "Buy our Service",
		description:
			"Buy our service for one-time only. Best fit for you that only needs a one-time service.",
	},
	{
		value: "custom",
		label: "Custom Pricing",
		description:
			"Customize your pricing plan. Best fit for you that needs a unique pricing plan.",
	},
];

export const AGREEMENTS = [
	{
		value: "privacy-policy",
		label: (
			<p className="text-sm">
				I agree to Lazuardy&apos;s{" "}
				<Link
					href="/legal/privacy-policy"
					target="_blank"
					rel="noopener noreferrer"
					className="font-medium text-primary underline-offset-4 hover:underline"
				>
					Privacy Policy
				</Link>
			</p>
		),
	},
	{
		value: "terms-of-service",
		label: (
			<p className="text-sm">
				I agree to Lazuardy&apos;s{" "}
				<Link
					href="/legal/terms-of-service"
					target="_blank"
					rel="noopener noreferrer"
					className="font-medium text-primary underline-offset-4 hover:underline"
				>
					Terms of Service
				</Link>
			</p>
		),
	},
];
