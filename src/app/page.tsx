import type { Metadata } from "next";
import HomeLayout from "@src/layout";

export const metadata: Metadata = {
	title: "Daneizo",
	keywords: "",
	description: "Your Business Solution lies here",
};

export default function Home() {
	return <HomeLayout />;
}
