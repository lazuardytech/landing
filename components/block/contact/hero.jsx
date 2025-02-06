import { Button } from "@/components/ui/button";
import Whatsapp from "@/components/ui/icon/whatsapp";
import LayoutLine from "@/components/ui/layout-line";
import Title from "@/components/ui/title";
import { CompanyData } from "@/lib/config";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
	return (
		<LayoutLine className="pt-[12vh] md:pt-[22vh] px-8 relative">
			<Title className="text-md md:text-lg text-center uppercase">
				Contact
			</Title>
			<div className="flex flex-col justify-center items-center gap-4 w-full mt-6 relative">
				<div className="flex flex-col w-full justify-center items-center">
					<Title className="text-3xl md:text-5xl text-center">
						&quot;A closed mouth doesn’t get fed&quot;
					</Title>
					<p className="w-full md:max-w-md font-light text-neutral-600 text-center text-xs md:text-sm leading-snug mt-4 md:mt-8">
						Don&apos;t be shy, ask us anything. We are here to help you.
						<br />
						If only you don&apos;t feel like to type, let&apos;s book a call.
					</p>
					<div className="grid grid-cols-3 gap-4 md:gap-6 mt-8">
						<Button size="lg" variant="link" className="px-0" asChild>
							<Link href={CompanyData.email.link}>
								<Mail />
								<span className="ml-0.5">Email us</span>
							</Link>
						</Button>
						<Button size="lg" variant="default" asChild>
							<Link
								href={process.env.NEXT_PUBLIC_CONSULTATION_BOOKING_LINK}
								target="_blank"
								rel="noopener noreferrer"
							>
								Talk to us
							</Link>
						</Button>
						<Button size="lg" variant="link" className="px-0" asChild>
							<Link
								href={CompanyData.phone.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Whatsapp />
								<span className="ml-0">Chat us</span>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</LayoutLine>
	);
}
