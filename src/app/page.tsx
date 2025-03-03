import type { Metadata } from "next";
import HomeLayout from "@src/layout";

export const metadata: Metadata = {
	title: "NDIDIAMAKA TECH INITIATIVE",
	keywords: "TECHNOLOGY, LMS, Learning Management System",
	description:
		"No tech skill or degree? No problem. At NDIDIAMAKA TECH INITIATIVE, we offer free courses to equip you with the skills to break into the tech industry. Our courses include Data Analysis, Cybersecurity, UX/UI, and more. Your future in tech starts here. Learn, grow, and excel in flying colours.",
};

export default function Home() {
	return <HomeLayout />;
}
