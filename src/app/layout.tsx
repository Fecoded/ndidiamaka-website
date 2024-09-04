import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@src/styles";

export const metadata: Metadata = {
	title: "Daneizo",
	keywords: "",
	description: "Your Business Solution lies here",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
