import CallToAction from "@/components/CTA/CallToAction";
import Faqs from "@/components/Faqs/Faqs";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/Howitworks/HowItWorks";

export default function Home() {
	return (
		<>
			<Hero />
			<HowItWorks />
			<Faqs />
			<CallToAction />
		</>
	);
}
