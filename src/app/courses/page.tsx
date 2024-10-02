import type { Metadata } from "next";
import CoursesLayout from "@src/layout/courses";

export const metadata: Metadata = {
	title: "Courses - NTI",
	keywords: "TECHNOLOGY, LMS, Learning Management System",
	description:
		"No tech skill or degree? No problem. At NDIDIAMAKA TECH INITIATIVE, we offer free courses to equip you with the skills to break into the tech industry. Our courses include Data Analysis, Cybersecurity, UX/UI, and more. Your future in tech starts here. Learn, grow, and excel in flying colours.",
};

export default function Course() {
	return <CoursesLayout />;
}
