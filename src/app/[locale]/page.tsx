import Cta from "@/components/en/Cta";
import Hero from "@/components/en/Hero";
import HowItWorks from "@/components/en/How-it-works";
import Services from "@/components/en/Services";
import Testimonials from "@/components/en/Testimonials";

interface HomePageProps {
	params: {
		locale: string;
	};
}

export default function Home({ params }: HomePageProps) {
	console.log("Page Locale", params.locale);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Hero />
			<Services />
			<HowItWorks />
			<Testimonials />
			<Cta />
		</main>
	);
}
