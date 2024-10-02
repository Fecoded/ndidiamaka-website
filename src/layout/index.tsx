"use client";

import { Footer } from "./footer";
import { AboutFounder } from "./home/about";
import { ContactUs } from "./home/contact-us";
import { FAQ } from "./home/faq";
import { HeroLayout } from "./home/hero";
import { MakingDifference } from "./home/making-difference";
import { Navbar } from "./home/navbar";
import { NextTechGeneration } from "./home/next-tech";
import { Ovation } from "./home/ovation";
import { OwnPace } from "./home/own-pace";
import { SupportOurMission } from "./home/support-our-mission";
import { VisionMission } from "./home/vision-mission";

export default function HomeLayout() {
	return (
		<>
			<Navbar />
			<HeroLayout />
			<NextTechGeneration />
			<AboutFounder />
			<VisionMission />
			<OwnPace />
			<MakingDifference />
			<SupportOurMission />
			<Ovation />
			<FAQ />
			<ContactUs />
			<Footer />
		</>
	);
}
