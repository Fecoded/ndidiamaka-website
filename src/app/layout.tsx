"use client";

import { ProviderContext } from "@src/utils";
import "./globals.css";
import { Providers } from "@src/styles";
import { useDownloadApp } from "@src/utils/hooks";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { handleButtonClick, isOpen, onClose } = useDownloadApp();
	return (
		<html lang="en">
			<body>
				<Providers>
					<ProviderContext.Provider
						value={{
							handleButtonClick,
							isOpen,
							onClose,
						}}
					>
						{children}
					</ProviderContext.Provider>
				</Providers>
			</body>
		</html>
	);
}
