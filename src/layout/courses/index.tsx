"use client";

import { Footer } from "../footer";
import { Navbar } from "../home/navbar";
import { CourseDetails } from "./details";
import { Hero } from "./hero";

const CoursesLayout = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<CourseDetails />
			<Footer />
		</>
	);
};

export default CoursesLayout;
