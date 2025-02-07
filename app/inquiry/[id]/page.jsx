import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function InquirySuccess({ params }) {
	const { id } = await params;

	if (!id) return notFound();

	return (
		<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
			<Title className="text-6xl md:text-7xl font-black text-center">
				Inquiry Sent!
			</Title>
			<h1 className="mt-4 md:mt-6 mb-2 text-lg md:text-xl font-regular">
				Our team has received your inquiry{" "}
				<span className="font-semibold">#{id}</span>
			</h1>
			<p className="text-sm md:text-md font-light text-neutral-600">
				Thank you for trusting us. We will get back to you as soon as possible.
			</p>
			<div className="mt-12 flex justify-center gap-4">
				<Button variant="link" size="default" asChild>
					<Link href="/inquiry">Send Another Inquiry</Link>
				</Button>
				<Button variant="default" size="default" asChild>
					<Link href="/">Send Another Inquiry</Link>
				</Button>
			</div>
		</div>
	);
}
