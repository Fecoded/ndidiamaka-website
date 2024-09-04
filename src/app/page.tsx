import {
	BusinessHeadStart,
	Features,
	HeroLayout,
	Navbar,
	HowItWorks,
	WhyChooseUs,
	TakingCharge,
	Footer,
} from "@src/layout";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroLayout />
			<BusinessHeadStart />
			<Features />
			<HowItWorks />
			<WhyChooseUs />
			<TakingCharge />
			<Footer />
		</>
	);
}
