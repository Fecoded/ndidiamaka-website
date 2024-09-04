import { useDisclosure } from "@chakra-ui/react";

export const useDownloadApp = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	// Function to detect the device type (iPhone or Android)
	const detectDevice = () => {
		if (typeof navigator !== "undefined") {
			const userAgent = navigator.userAgent;
			if (/iPhone|iPad|iPod/i.test(userAgent)) {
				return "iPhone";
			} else if (/Android/i.test(userAgent)) {
				return "Android";
			}
		}
		return "Web";
	};

	const handleButtonClick = () => {
		const device = detectDevice();

		if (device === "iPhone") {
			// Redirect to the App Store
			window.location.href = "";
		} else if (device === "Android") {
			// Redirect to the Google Play Store
			window.location.href = "";
		} else {
			// Fallback option or handle web
			onOpen();
		}
	};

	return { handleButtonClick, onClose, isOpen };
};
