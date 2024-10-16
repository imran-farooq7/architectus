import CallToAction from "@/components/CTA/CallToAction";
import Faqs from "@/components/Faqs/Faqs";
import FeaturesTools from "@/components/Features/FeaturesTools";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Insights from "@/components/insights/Insights";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
	return (
		<>
			<Hero />
			<FeaturesTools />
			<Testimonials />
			<Insights />
			<Faqs />
			<CallToAction />
		</>
	);
}
