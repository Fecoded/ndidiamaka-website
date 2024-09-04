"use client";

import { Navbar } from "./navbar";
import { HeroLayout } from "./hero";
import { BusinessHeadStart } from "./business-start";
import { Features } from "./features";
import { HowItWorks } from "./how-it-work";
import { WhyChooseUs } from "./why-choose-us";
import { TakingCharge } from "./taking-charge";
import { Footer } from "./footer";
import { ScanModal } from "./common";

export default function HomeLayout() {
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
			<ScanModal />
		</>
	);
}
